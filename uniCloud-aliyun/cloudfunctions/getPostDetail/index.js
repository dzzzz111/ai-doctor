'use strict';

/**
 * 获取帖子详情云函数
 */
exports.main = async (event, context) => {
  const { postId, userId } = event;
  
  if (!postId) {
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
    // 获取帖子信息
    const postResult = await postsCollection.doc(postId).get();
    
    if (!postResult.data || postResult.data.length === 0) {
      return {
        code: -1,
        message: '帖子不存在'
      };
    }
    
    const post = postResult.data[0];
    
    // 增加浏览量
    await postsCollection.doc(postId).update({
      views: db.command.inc(1)
    });
    
    // 检查用户点赞和收藏状态
    let isLiked = false;
    let isCollected = false;
    
    if (userId) {
      // 检查点赞
      const likeResult = await likesCollection
        .where({
          userId: userId,
          postId: postId
        })
        .get();
      isLiked = likeResult.data.length > 0;
      
      // 检查收藏
      const collectResult = await collectsCollection
        .where({
          userId: userId,
          postId: postId
        })
        .get();
      isCollected = collectResult.data.length > 0;
    }
    
    // 格式化返回数据
    const postData = {
      id: post._id,
      userId: post.userId,
      username: post.username,
      userAvatar: post.userAvatar,
      title: post.title,
      content: post.content,
      category: post.category,
      images: post.images || [],
      likes: post.likes || 0,
      comments: post.comments || 0,
      shares: post.shares || 0,
      collects: post.collects || 0,
      views: (post.views || 0) + 1,
      publishTime: formatTime(post.createdAt),
      isLiked: isLiked,
      isCollected: isCollected,
      createdAt: post.createdAt
    };
    
    return {
      code: 0,
      message: '获取成功',
      data: postData
    };
    
  } catch (error) {
    console.error('获取帖子详情失败:', error);
    return {
      code: -1,
      message: '获取失败',
      error: error.message
    };
  }
};

// 格式化时间
function formatTime(date) {
  const now = new Date();
  const postDate = new Date(date);
  const diff = now - postDate;
  
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
    const year = postDate.getFullYear();
    const month = postDate.getMonth() + 1;
    const day = postDate.getDate();
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }
}
