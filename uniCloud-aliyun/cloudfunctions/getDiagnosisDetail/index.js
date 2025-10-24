'use strict';

/**
 * 获取诊断记录详情
 * @param {String} diagnosisId - 诊断记录ID
 * @param {String} userId - 用户ID（用于权限验证）
 */
exports.main = async (event, context) => {
  const { diagnosisId, userId } = event;
  
  if (!diagnosisId) {
    return {
      code: 400,
      message: '缺少诊断记录ID'
    };
  }
  
  const db = uniCloud.database();
  const diagnosisCollection = db.collection('diagnosis_records');
  
  try {
    // 查询诊断记录
    const res = await diagnosisCollection.doc(diagnosisId).get();
    
    if (!res.data || res.data.length === 0) {
      return {
        code: 404,
        message: '诊断记录不存在'
      };
    }
    
    const record = res.data[0];
    
    // 验证权限（如果提供了userId）
    if (userId && record.userId !== userId) {
      return {
        code: 403,
        message: '无权访问此诊断记录'
      };
    }
    
    // 格式化详情数据
    const detail = {
      id: record._id,
      diagnosisType: record.diagnosisType,
      imageUrl: record.imageUrl,
      stage: record.diagnosisStage,
      confidence: record.confidence,
      items: record.diagnosisResult || [],
      analysis: record.analysis || '',
      suggestion: record.suggestion || '',
      allCategories: record.allCategories || [],
      createdAt: record.createdAt,
      hasRehabPlan: record.hasRehabPlan || false,
      rehabPlanId: record.rehabPlanId || null
    };
    
    return {
      code: 0,
      message: '查询成功',
      data: detail
    };
    
  } catch (error) {
    console.error('查询诊断详情失败:', error);
    return {
      code: 500,
      message: '查询失败: ' + error.message
    };
  }
};
