'use strict';

/**
 * 保存X光诊断记录
 * @param {String} userId - 用户ID
 * @param {String} diagnosisType - 诊断类型
 * @param {String} imageUrl - 图像URL（云存储路径）
 * @param {Object} result - 诊断结果
 * @param {String} stage - 骨关节炎分期 (I/II/III/IV)
 * @param {Number} confidence - 置信度
 */
exports.main = async (event, context) => {
  const { userId, diagnosisType, imageUrl, result, stage, confidence } = event;
  
  // 参数验证
  if (!userId || !result || !stage) {
    return {
      code: 400,
      message: '缺少必要参数'
    };
  }
  
  const db = uniCloud.database();
  const diagnosisCollection = db.collection('diagnosis_records');
  
  try {
    // 准备诊断记录数据
    const recordData = {
      userId,
      diagnosisType: diagnosisType || '骨关节炎X光',
      imageUrl: imageUrl || '',
      diagnosisStage: stage,
      confidence: confidence || 0,
      diagnosisResult: result.items || [],
      analysis: result.analysis || '',
      suggestion: result.suggestion || '',
      allCategories: result.allCategories || [],
      createdAt: new Date(),
      updatedAt: new Date(),
      // 是否已创建康复计划
      hasRehabPlan: false,
      rehabPlanId: null
    };
    
    // 保存到数据库
    const saveRes = await diagnosisCollection.add(recordData);
    
    // 更新用户的诊断统计
    const userCollection = db.collection('users');
    await userCollection.doc(userId).update({
      lastDiagnosisAt: new Date(),
      diagnosisCount: db.command.inc(1)
    });
    
    return {
      code: 0,
      message: '保存成功',
      data: {
        diagnosisId: saveRes.id,
        createdAt: recordData.createdAt
      }
    };
    
  } catch (error) {
    console.error('保存诊断记录失败:', error);
    return {
      code: 500,
      message: '保存失败: ' + error.message
    };
  }
};
