'use strict';
const db = uniCloud.database();
const cmd = db.command;

exports.main = async (event, context) => {
  console.log('训练打卡:', event);
  
  try {
    const { userId, planId, videoId, duration, feedback, images } = event;
    
    if (!userId || !planId || !videoId) {
      return {
        code: 400,
        message: '缺少必要参数'
      };
    }
    
    // 1. 检查今天是否已打卡该视频
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const checkInCollection = db.collection('training_check_ins');
    const existingCheckIn = await checkInCollection
      .where({
        userId,
        videoId,
        checkInDate: cmd.gte(today).and(cmd.lt(tomorrow))
      })
      .count();
    
    if (existingCheckIn.total > 0) {
      return {
        code: 400,
        message: '今日已打卡此视频'
      };
    }
    
    // 2. 创建打卡记录
    const checkIn = {
      userId,
      planId,
      videoId,
      checkInDate: new Date(),
      duration: duration || 0,
      feedback: feedback || {},
      images: images || [],
      points: 10,
      isPublic: false,
      likes: 0,
      comments: 0,
      createdAt: new Date()
    };
    
    const checkInRes = await checkInCollection.add(checkIn);
    console.log('打卡记录创建成功:', checkInRes.id);
    
    // 3. 更新训练计划进度
    const planCollection = db.collection('rehabilitation_plans');
    await planCollection.doc(planId).update({
      totalCheckIns: cmd.inc(1),
      updatedAt: new Date()
    });
    
    // 4. 计算连续打卡天数
    const streak = await calculateStreak(userId);
    
    // 5. 更新用户档案
    const profileCollection = db.collection('user_rehabilitation_profiles');
    const profileRes = await profileCollection.where({ userId }).get();
    
    if (profileRes.data.length > 0) {
      const profile = profileRes.data[0];
      
      await profileCollection.doc(profile._id).update({
        'statistics.totalCheckIns': cmd.inc(1),
        'statistics.totalTrainingTime': cmd.inc(duration || 0),
        'statistics.totalPoints': cmd.inc(10),
        'statistics.currentStreak': streak,
        'statistics.longestStreak': Math.max(streak, profile.statistics.longestStreak || 0),
        updatedAt: new Date()
      });
    }
    
    // 6. 检查成就
    const achievements = await checkAchievements(userId, streak);
    
    return {
      code: 0,
      message: '打卡成功',
      data: {
        checkInId: checkInRes.id,
        points: 10,
        streak,
        achievements
      }
    };
    
  } catch (error) {
    console.error('打卡失败:', error);
    return {
      code: 500,
      message: '打卡失败: ' + error.message
    };
  }
};

// 计算连续打卡天数
async function calculateStreak(userId) {
  const checkInCollection = db.collection('training_check_ins');
  const checkIns = await checkInCollection
    .where({ userId })
    .orderBy('checkInDate', 'desc')
    .limit(30)
    .get();
  
  let streak = 0;
  let lastDate = new Date();
  lastDate.setHours(0, 0, 0, 0);
  
  for (const item of checkIns.data) {
    const checkInDate = new Date(item.checkInDate);
    checkInDate.setHours(0, 0, 0, 0);
    
    const diffDays = Math.floor((lastDate - checkInDate) / (86400000));
    
    if (diffDays === 0 || diffDays === 1) {
      streak++;
      lastDate = checkInDate;
    } else {
      break;
    }
  }
  
  return streak;
}

// 检查成就
async function checkAchievements(userId, streak) {
  const achievements = [];
  
  const profileCollection = db.collection('user_rehabilitation_profiles');
  const profileRes = await profileCollection.where({ userId }).get();
  
  if (profileRes.data.length > 0) {
    const stats = profileRes.data[0].statistics;
    
    if (streak === 7 && stats.currentStreak < 7) {
      achievements.push('连续打卡7天');
    }
    if (streak === 30 && stats.currentStreak < 30) {
      achievements.push('连续打卡30天');
    }
    if (stats.totalCheckIns + 1 === 50) {
      achievements.push('累计打卡50次');
    }
    if (stats.totalCheckIns + 1 === 100) {
      achievements.push('康复达人');
    }
  }
  
  return achievements;
}
