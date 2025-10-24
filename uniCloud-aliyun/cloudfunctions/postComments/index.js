'use strict';

/**
 * 帖子评论相关云函数
 * 支持：获取评论列表、发表评论
 */
exports.main = async (event, context) => {
  const { action } = event;
  
  const db = uniCloud.database();
  const commentsCollection = db.collection('community_comments');
  const postsCollection = db.collection('community_posts');
  
  try {
    // 获取评论列表
    if (action === 'getComments') {
      const { postId, page = 1, pageSize = 20 } = event;
      
      if (!postId) {
        return {
          code: -1,
          message: '参数不完整'
        };
      }
      
      const skip = (page - 1) * pageSize;
      
      // 查询评论
      const result = await commentsCollection
        .where({ postId: postId })
        .orderBy('createdAt', 'desc')
        .skip(skip)
        .limit(pageSize)
        .get();
      
      const comments = result.data.map(comment => ({
        id: comment._id,
        postId: comment.postId,
        userId: comment.userId,
        username: comment.username,
        userAvatar: comment.userAvatar,
        content: comment.content,
        replyTo: comment.replyTo,
        replyToUser: comment.replyToUser,
        likes: comment.likes || 0,
        publishTime: formatTime(comment.createdAt),
        createdAt: comment.createdAt
      }));
      
      const hasMore = comments.length === pageSize;
      
      return {
        code: 0,
        message: '获取成功',
        data: {
          comments: comments,
          hasMore: hasMore
        }
      };
    }
    
    // 发表评论
    if (action === 'addComment') {
      const { postId, userId, username, userAvatar, content, replyTo, replyToUser } = event;
      
      if (!postId || !userId || !content) {
        return {
          code: -1,
          message: '参数不完整'
        };
      }
      
      if (content.trim().length === 0 || content.length > 500) {
        return {
          code: -1,
          message: '评论内容不能为空且不超过500字'
        };
      }
      
      // 准备评论数据
      const commentData = {
        postId,
        userId,
        username: username || '匿名用户',
        userAvatar: userAvatar || '/static/images/default-avatar.png',
        content: content.trim(),
        replyTo: replyTo || null,
        replyToUser: replyToUser || null,
        likes: 0,
        createdAt: new Date()
      };
      
      // 插入评论
      const commentResult = await commentsCollection.add(commentData);
      
      // 更新帖子评论数
      await postsCollection.doc(postId).update({
        comments: db.command.inc(1)
      });
      
      return {
        code: 0,
        message: '评论成功',
        data: {
          commentId: commentResult.id
        }
      };
    }
    
    return {
      code: -1,
      message: '未知操作'
    };
    
  } catch (error) {
    console.error('评论操作失败:', error);
    return {
      code: -1,
      message: '操作失败',
      error: error.message
    };
  }
};

// 格式化时间
function formatTime(date) {
  const now = new Date();
  const commentDate = new Date(date);
  const diff = now - commentDate;
  
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  
  if (diff < minute) {
    return '刚刚';
  } else if (diff < hour) {
    return Math.floor(diff / minute) + '分钟前';
  } else if (diff < day) {
    return Math.floor(diff / hour) + '小时前';
  } else if (diff < 7 * day) {
    return Math.floor(diff / day) + '天前';
  } else {
    const year = commentDate.getFullYear();
    const month = commentDate.getMonth() + 1;
    const day = commentDate.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }
}
