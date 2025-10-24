'use strict';
const db = uniCloud.database();
const cmd = db.command;

exports.main = async (event, context) => {
  console.log('获取康复训练计划:', event);
  
  try {
    const { userId } = event;
    
    if (!userId) {
      return {
        code: 400,
        message: '缺少用户ID'
      };
    }
    
    // 1. 获取用户当前的训练计划
    const planCollection = db.collection('rehabilitation_plans');
    const planRes = await planCollection
      .where({
        userId,
        status: 'active'
      })
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get();
    
    if (!planRes.data || planRes.data.length === 0) {
      return {
        code: 404,
        message: '暂无训练计划',
        data: {
          hasPlan: false
        }
      };
    }
    
    const plan = planRes.data[0];
    
    // 2. 获取视频详情
    const videoCollection = db.collection('rehabilitation_videos');
    const videosRes = await videoCollection
      .where({
        _id: cmd.in(plan.videoIds)
      })
      .get();
    
    // 3. 获取今日打卡状态
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const checkInCollection = db.collection('training_check_ins');
    const todayCheckIns = await checkInCollection
      .where({
        userId,
        planId: plan._id,
        checkInDate: cmd.gte(today).and(cmd.lt(tomorrow))
      })
      .get();
    
    const todayCheckedVideoIds = todayCheckIns.data.map(c => c.videoId);
    
    // 4. 获取本周打卡统计
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    
    const weekCheckIns = await checkInCollection
      .where({
        userId,
        planId: plan._id,
        checkInDate: cmd.gte(weekStart)
      })
      .count();
    
    // 5. 获取用户档案
    const profileCollection = db.collection('user_rehabilitation_profiles');
    const profileRes = await profileCollection.where({ userId }).get();
    
    const streak = profileRes.data.length > 0 ? 
      profileRes.data[0].statistics.currentStreak : 0;
    
    return {
      code: 0,
      message: '获取成功',
      data: {
        hasPlan: true,
        plan: {
          _id: plan._id,
          diagnosisStage: plan.diagnosisStage,
          weeklyGoal: plan.weeklyGoal,
          currentWeek: plan.currentWeek,
          totalWeeks: plan.totalWeeks,
          totalCheckIns: plan.totalCheckIns,
          completionRate: plan.completionRate || 0
        },
        videos: videosRes.data,
        weekCheckIns: weekCheckIns.total,
        todayCheckIns: todayCheckedVideoIds,
        streak
      }
    };
    
  } catch (error) {
    console.error('获取训练计划失败:', error);
    return {
      code: 500,
      message: '获取失败: ' + error.message
    };
  }
};
