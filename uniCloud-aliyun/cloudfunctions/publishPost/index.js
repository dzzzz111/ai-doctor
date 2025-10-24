'use strict';

/**
 * 发布帖子云函数
 */
exports.main = async (event, context) => {
  const { userId, username, userAvatar, title, content, category, images } = event;
  
  // 参数验证
  if (!userId || !title || !content || !category) {
    return {
      code: -1,
      message: '参数不完整'
    };
  }
  
  // 内容验证
  if (title.trim().length === 0 || title.length > 100) {
    return {
      code: -1,
      message: '标题不能为空且不超过100字'
    };
  }
  
  if (content.trim().length === 0 || content.length > 5000) {
    return {
      code: -1,
      message: '内容不能为空且不超过5000字'
    };
  }
  
  const db = uniCloud.database();
  const postsCollection = db.collection('community_posts');
  
  try {
    // 准备帖子数据
    const postData = {
      userId,
      username: username || '匿名用户',
      userAvatar: userAvatar || '/static/images/default-avatar.png',
      title: title.trim(),
      content: content.trim(),
      category,
      images: images || [],
      likes: 0,
      comments: 0,
      shares: 0,
      collects: 0,
      views: 0,
      isPublic: true,
      status: 'published',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    // 插入数据库
    const result = await postsCollection.add(postData);
    
    return {
      code: 0,
      message: '发布成功',
      data: {
        postId: result.id
      }
    };
    
  } catch (error) {
    console.error('发布帖子失败:', error);
    return {
      code: -1,
      message: '发布失败',
      error: error.message
    };
  }
};
