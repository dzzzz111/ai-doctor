'use strict';

/**
 * 获取用户的诊断历史记录
 * @param {String} userId - 用户ID
 * @param {Number} pageSize - 每页数量，默认10
 * @param {Number} pageNum - 页码，默认1
 */
exports.main = async (event, context) => {
  const { userId, pageSize = 10, pageNum = 1 } = event;
  
  if (!userId) {
    return {
      code: 400,
      message: '缺少用户ID'
    };
  }
  
  const db = uniCloud.database();
  const diagnosisCollection = db.collection('diagnosis_records');
  
  try {
    // 计算跳过的记录数
    const skip = (pageNum - 1) * pageSize;
    
    // 查询用户的诊断记录（按创建时间倒序）
    const countRes = await diagnosisCollection
      .where({ userId })
      .count();
    
    const listRes = await diagnosisCollection
      .where({ userId })
      .orderBy('createdAt', 'desc')
      .skip(skip)
      .limit(pageSize)
      .get();
    
    // 格式化记录
    const records = listRes.data.map(record => ({
      id: record._id,
      diagnosisType: record.diagnosisType,
      imageUrl: record.imageUrl,
      stage: record.diagnosisStage,
      mainResult: record.diagnosisResult.length > 0 
        ? record.diagnosisResult[0].value 
        : '骨关节炎',
      confidence: record.confidence,
      createdAt: record.createdAt,
      hasRehabPlan: record.hasRehabPlan || false,
      rehabPlanId: record.rehabPlanId || null
    }));
    
    return {
      code: 0,
      message: '查询成功',
      data: {
        records,
        total: countRes.total,
        pageNum,
        pageSize,
        hasMore: skip + pageSize < countRes.total
      }
    };
    
  } catch (error) {
    console.error('查询诊断历史失败:', error);
    return {
      code: 500,
      message: '查询失败: ' + error.message
    };
  }
};
