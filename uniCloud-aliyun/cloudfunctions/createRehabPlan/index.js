'use strict';
const db = uniCloud.database();
const cmd = db.command;

exports.main = async (event, context) => {
  console.log('创建康复训练计划:', event);
  
  try {
    const { userId, diagnosisId } = event;
    
    if (!userId || !diagnosisId) {
      return {
        code: 400,
        message: '缺少必要参数'
      };
    }
    
    // 1. 获取诊断结果
    const diagnosisCollection = db.collection('diagnosis_records');
    const diagnosisRes = await diagnosisCollection.doc(diagnosisId).get();
    
    if (!diagnosisRes.data || diagnosisRes.data.length === 0) {
      return {
        code: 404,
        message: '未找到诊断记录'
      };
    }
    
    const diagnosis = diagnosisRes.data[0];
    const stage = diagnosis.diagnosisStage; // "I", "II", "III", "IV"
    
    console.log('诊断分期:', stage);
    
    // 2. 根据分期推荐视频
    const videoCollection = db.collection('rehabilitation_videos');
    
    // 分期配置
    const stageConfig = {
      'I': { difficulties: ['easy'], maxVideos: 6 },
      'II': { difficulties: ['easy', 'medium'], maxVideos: 8 },
      'III': { difficulties: ['easy'], maxVideos: 6 },
      'IV': { difficulties: ['easy'], maxVideos: 4 }
    };
    
    const config = stageConfig[stage] || stageConfig['I'];
    
    // 查询适合的视频
    const videosRes = await videoCollection
      .where({
        targetStage: cmd.in([stage]),
        difficulty: cmd.in(config.difficulties)
      })
      .orderBy('avgRating', 'desc')
      .limit(config.maxVideos)
      .get();
    
    console.log('推荐视频数量:', videosRes.data.length);
    
    if (videosRes.data.length === 0) {
      return {
        code: 404,
        message: '暂无适合的训练视频'
      };
    }
    
    // 3. 生成训练计划
    const weeklyGoal = (stage === 'I' || stage === 'II') ? 5 : 3;
    const totalWeeks = (stage === 'I' || stage === 'II') ? 12 : 8;
    
    const plan = {
      userId,
      diagnosisStage: stage,
      diagnosisId,
      videoIds: videosRes.data.map(v => v._id),
      weeklyGoal,
      currentWeek: 1,
      totalWeeks,
      totalCheckIns: 0,
      completionRate: 0,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // 4. 保存到数据库
    const planCollection = db.collection('rehabilitation_plans');
    const planRes = await planCollection.add(plan);
    
    console.log('计划创建成功:', planRes.id);
    
    // 5. 更新诊断记录，标记已创建康复计划
    await diagnosisCollection.doc(diagnosisId).update({
      hasRehabPlan: true,
      rehabPlanId: planRes.id,
      updatedAt: new Date()
    });
    
    // 6. 初始化用户康复档案
    const profileCollection = db.collection('user_rehabilitation_profiles');
    const existingProfile = await profileCollection.where({ userId }).get();
    
    if (existingProfile.data.length > 0) {
      // 更新现有档案
      await profileCollection.doc(existingProfile.data[0]._id).update({
        diagnosisHistory: cmd.push({
          stage,
          diagnosisDate: new Date(),
          diagnosisId
        }),
        updatedAt: new Date()
      });
    } else {
      // 创建新档案
      await profileCollection.add({
        userId,
        diagnosisHistory: [{
          stage,
          diagnosisDate: new Date(),
          diagnosisId
        }],
        statistics: {
          totalCheckIns: 0,
          totalTrainingTime: 0,
          currentStreak: 0,
          longestStreak: 0,
          completionRate: 0,
          totalPoints: 0
        },
        abilities: {
          flexibility: 50,
          strength: 50,
          balance: 50,
          endurance: 50
        },
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    
    return {
      code: 0,
      message: '康复计划创建成功',
      data: {
        planId: planRes.id,
        stage,
        weeklyGoal,
        totalWeeks,
        videoCount: videosRes.data.length
      }
    };
    
  } catch (error) {
    console.error('创建康复计划失败:', error);
    return {
      code: 500,
      message: '服务器错误: ' + error.message
    };
  }
};
