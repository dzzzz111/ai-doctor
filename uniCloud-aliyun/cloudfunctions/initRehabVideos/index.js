'use strict';

/**
 * 初始化康复训练视频数据
 * 管理员功能：添加、更新、删除康复视频
 */
exports.main = async (event, context) => {
  const { action, videoData } = event;
  
  const db = uniCloud.database();
  const videosCollection = db.collection('rehab_videos');
  
  try {
    // 添加示例视频（首次初始化）
    if (action === 'init') {
      const sampleVideos = [
        {
          title: "膝关节康复训练 - I期基础篇",
          description: "适合I期（早期）患者的基础训练，包括关节活动度训练和轻度力量训练",
          videoUrl: "cloud://your-env.xxxx/rehab-videos/stage1-basic.mp4",  // 云存储路径
          thumbnailUrl: "cloud://your-env.xxxx/thumbnails/stage1-basic.jpg",
          duration: 480,  // 8分钟
          difficulty: 1,  // 1=简单
          category: "strength",  // strength=力量 flexibility=柔韧 balance=平衡
          targetStage: ["I"],
          exercises: ["股四头肌等长收缩", "踝泵运动", "直腿抬高"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "膝关节康复训练 - II期进阶篇",
          description: "适合II期（轻度）患者的进阶训练，增加关节稳定性和肌肉力量",
          videoUrl: "cloud://your-env.xxxx/rehab-videos/stage2-advanced.mp4",
          thumbnailUrl: "cloud://your-env.xxxx/thumbnails/stage2-advanced.jpg",
          duration: 600,  // 10分钟
          difficulty: 2,  // 2=中等
          category: "strength",
          targetStage: ["II"],
          exercises: ["坐姿抬腿", "桥式运动", "靠墙静蹲"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "膝关节柔韧性训练",
          description: "提高关节活动度和柔韧性的拉伸训练，适合所有分期",
          videoUrl: "cloud://your-env.xxxx/rehab-videos/flexibility-all.mp4",
          thumbnailUrl: "cloud://your-env.xxxx/thumbnails/flexibility-all.jpg",
          duration: 360,  // 6分钟
          difficulty: 1,
          category: "flexibility",
          targetStage: ["I", "II", "III"],
          exercises: ["股四头肌拉伸", "腘绳肌拉伸", "小腿拉伸"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        }
      ];
      
      // 批量插入
      await videosCollection.add(sampleVideos);
      
      return {
        code: 0,
        message: '视频初始化成功',
        count: sampleVideos.length
      };
    }
    
    // 添加单个视频
    if (action === 'add') {
      if (!videoData) {
        return { code: 400, message: '缺少视频数据' };
      }
      
      const video = {
        ...videoData,
        createdAt: new Date(),
        views: 0,
        completions: 0,
        isActive: true
      };
      
      const res = await videosCollection.add(video);
      
      return {
        code: 0,
        message: '视频添加成功',
        videoId: res.id
      };
    }
    
    // 获取视频列表
    if (action === 'list') {
      const { stage, category, page = 1, pageSize = 20 } = event;
      
      let query = videosCollection.where({ isActive: true });
      
      // 按分期筛选
      if (stage) {
        query = query.where({
          targetStage: db.command.in([stage])
        });
      }
      
      // 按类别筛选
      if (category) {
        query = query.where({ category });
      }
      
      const countRes = await query.count();
      const total = countRes.total;
      
      const res = await query
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .orderBy('createdAt', 'desc')
        .get();
      
      return {
        code: 0,
        data: {
          videos: res.data,
          total,
          page,
          pageSize,
          hasMore: total > page * pageSize
        }
      };
    }
    
    // 更新视频观看次数
    if (action === 'incrementViews') {
      const { videoId } = event;
      
      await videosCollection.doc(videoId).update({
        views: db.command.inc(1)
      });
      
      return { code: 0, message: '更新成功' };
    }
    
    // 更新视频完成次数
    if (action === 'incrementCompletions') {
      const { videoId } = event;
      
      await videosCollection.doc(videoId).update({
        completions: db.command.inc(1)
      });
      
      return { code: 0, message: '更新成功' };
    }
    
    return {
      code: 400,
      message: '未知操作类型'
    };
    
  } catch (error) {
    console.error('视频管理失败:', error);
    return {
      code: 500,
      message: '操作失败: ' + error.message
    };
  }
};
