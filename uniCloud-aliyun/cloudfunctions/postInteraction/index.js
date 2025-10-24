'use strict';

/**
 * 帖子互动云函数
 * 支持：点赞/取消点赞、收藏/取消收藏
 */
exports.main = async (event, context) => {
  const { action, postId, userId } = event;
  
  if (!postId || !userId) {
    return {
      code: -1,
      message: '参数不完整'
    };
  }
  
  const db = uniCloud.database();
  const postsCollection = db.collection('community_posts');
  const likesCollection = db.collection('community_likes');
  const collectsCollection = db.collection('community_collects');
  
  try {
    // 点赞/取消点赞
    if (action === 'like') {
      // 检查是否已点赞
      const likeResult = await likesCollection
        .where({
          postId: postId,
          userId: userId
        })
        .get();
      
      const isLiked = likeResult.data.length > 0;
      
      if (isLiked) {
        // 取消点赞
        await likesCollection.doc(likeResult.data[0]._id).remove();
        
        // 减少帖子点赞数
        await postsCollection.doc(postId).update({
          likes: db.command.inc(-1)
        });
        
        return {
          code: 0,
          message: '已取消点赞',
          data: { isLiked: false }
        };
      } else {
        // 添加点赞
        await likesCollection.add({
          postId: postId,
          userId: userId,
          createdAt: new Date()
        });
        
        // 增加帖子点赞数
        await postsCollection.doc(postId).update({
          likes: db.command.inc(1)
        });
        
        return {
          code: 0,
          message: '点赞成功',
          data: { isLiked: true }
        };
      }
    }
    
    // 收藏/取消收藏
    if (action === 'collect') {
      // 检查是否已收藏
      const collectResult = await collectsCollection
        .where({
          postId: postId,
          userId: userId
        })
        .get();
      
      const isCollected = collectResult.data.length > 0;
      
      if (isCollected) {
        // 取消收藏
        await collectsCollection.doc(collectResult.data[0]._id).remove();
        
        // 减少帖子收藏数
        await postsCollection.doc(postId).update({
          collects: db.command.inc(-1)
        });
        
        return {
          code: 0,
          message: '已取消收藏',
          data: { isCollected: false }
        };
      } else {
        // 添加收藏
        await collectsCollection.add({
          postId: postId,
          userId: userId,
          createdAt: new Date()
        });
        
        // 增加帖子收藏数
        await postsCollection.doc(postId).update({
          collects: db.command.inc(1)
        });
        
        return {
          code: 0,
          message: '收藏成功',
          data: { isCollected: true }
        };
      }
    }
    
    return {
      code: -1,
      message: '未知操作'
    };
    
  } catch (error) {
    console.error('互动操作失败:', error);
    return {
      code: -1,
      message: '操作失败',
      error: error.message
    };
  }
};
