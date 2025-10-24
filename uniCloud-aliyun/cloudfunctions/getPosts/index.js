'use strict';

/**
 * 获取帖子列表云函数
 */
exports.main = async (event, context) => {
  const { category = 'all', page = 1, pageSize = 10, userId } = event;
  
  const db = uniCloud.database();
  const postsCollection = db.collection('community_posts');
  const likesCollection = db.collection('community_likes');
  const collectsCollection = db.collection('community_collects');
  
  try {
    // 构建查询条件
    let query = {
      status: 'published',
      isPublic: true
    };
    
    // 分类筛选
    if (category && category !== 'all') {
      query.category = category;
    }
    
    // 分页计算
    const skip = (page - 1) * pageSize;
    
    // 查询帖子列表
    const postsResult = await postsCollection
      .where(query)
      .orderBy('createdAt', 'desc')
      .skip(skip)
      .limit(pageSize)
      .get();
    
    const posts = postsResult.data;
    
    // 如果有用户ID，查询用户的点赞和收藏状态
    let userLikes = [];
    let userCollects = [];
    
    if (userId && posts.length > 0) {
      const postIds = posts.map(post => post._id);
      
      // 查询用户点赞
      const likesResult = await likesCollection
        .where({
          userId: userId,
          postId: db.command.in(postIds)
        })
        .get();
      userLikes = likesResult.data.map(item => item.postId);
      
      // 查询用户收藏
      const collectsResult = await collectsCollection
        .where({
          userId: userId,
          postId: db.command.in(postIds)
        })
        .get();
      userCollects = collectsResult.data.map(item => item.postId);
    }
    
    // 处理帖子数据
    const processedPosts = posts.map(post => {
      // 计算发布时间
      const publishTime = formatTime(post.createdAt);
      
      // 获取分类名称
      const categoryName = getCategoryName(post.category);
      
      return {
        id: post._id,
        userId: post.userId,
        username: post.username,
        userAvatar: post.userAvatar,
        title: post.title,
        content: post.content,
        category: post.category,
        categoryName: categoryName,
        images: post.images || [],
        likes: post.likes || 0,
        comments: post.comments || 0,
        shares: post.shares || 0,
        collects: post.collects || 0,
        views: post.views || 0,
        publishTime: publishTime,
        isLiked: userLikes.includes(post._id),
        isCollected: userCollects.includes(post._id),
        createdAt: post.createdAt
      };
    });
    
    // 判断是否还有更多数据
    const hasMore = posts.length === pageSize;
    
    return {
      code: 0,
      message: '获取成功',
      data: {
        posts: processedPosts,
        hasMore: hasMore,
        page: page,
        pageSize: pageSize
      }
    };
    
  } catch (error) {
    console.error('获取帖子列表失败:', error);
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

// 获取分类名称
function getCategoryName(category) {
  const categoryMap = {
    'disease': '疾病交流',
    'treatment': '治疗经验',
    'medicine': '用药咨询',
    'rehabilitation': '康复分享',
    'mental': '心理健康',
    'nutrition': '营养饮食',
    'exercise': '运动健身'
  };
  return categoryMap[category] || '其他';
}
