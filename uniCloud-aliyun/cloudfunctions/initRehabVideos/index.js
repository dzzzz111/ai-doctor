'use strict';

/**
 * 初始化康复训练视频数据
 * 管理员功能：添加、更新、删除康复视频
 */
exports.main = async (event, context) => {
  const { action, videoData } = event;
  
  const db = uniCloud.database();
  const videosCollection = db.collection('rehabilitation_videos');
  
  try {
    // 添加示例视频（首次初始化）
    if (action === 'init') {
      const sampleVideos = [
        // I期视频（早期/轻度）- 简单难度
        {
          title: "股四头肌等长收缩训练 - I期基础",
          description: "平躺后腿部伸直，膝部下压抵住床铺，足背弓起，使大腿前侧肌肉紧绷。这是最基础的膝关节康复训练，适合早期患者。",
          videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 300,  // 5分钟
          difficulty: "easy",
          category: "strength",
          targetStage: ["I"],
          exercises: ["股四头肌等长收缩", "膝关节稳定性训练"],
          precautions: ["维持5秒后放松", "重复20次", "避免憋气", "用力时吐气，放松时吸气"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "直腿抬高运动 - I期力量训练",
          description: "平躺后先将脚板翘起，然后膝盖伸直并抬高，大腿前侧肌肉用力鼓起。增强股四头肌力量，改善膝关节稳定性。",
          videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 360,  // 6分钟
          difficulty: "easy",
          category: "strength",
          targetStage: ["I"],
          exercises: ["直腿抬高", "股四头肌强化"],
          precautions: ["膝盖保持伸直", "维持5秒", "缓缓放下", "如有疼痛立即停止"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "踝泵运动 - I期循环促进",
          description: "通过踝关节的屈伸运动，促进下肢血液循环，预防血栓形成，适合术后早期或卧床患者。",
          videoUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 240,  // 4分钟
          difficulty: "easy",
          category: "flexibility",
          targetStage: ["I", "II"],
          exercises: ["踝泵运动", "足部屈伸"],
          precautions: ["动作轻柔", "频率适中", "每小时可重复"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "腘绳肌拉伸 - I期柔韧性训练",
          description: "平躺后用床单环绕足部，借助床单将直腿向上拉伸。改善膝关节后侧柔韧性，增加关节活动度。",
          videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 420,  // 7分钟
          difficulty: "easy",
          category: "flexibility",
          targetStage: ["I", "II"],
          exercises: ["腘绳肌拉伸", "下肢柔韧性训练"],
          precautions: ["保持静态拉伸", "不要弹震", "维持20秒", "感到轻微拉伸感即可"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "小腿拉伸 - I期灵活性训练",
          description: "站立扶椅，一腿在前弯曲，一腿在后伸直，后脚跟向下压。拉伸小腿肌肉，改善踝关节灵活性。",
          videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 300,  // 5分钟
          difficulty: "easy",
          category: "flexibility",
          targetStage: ["I", "II", "III"],
          exercises: ["小腿拉伸", "跟腱伸展"],
          precautions: ["后膝保持伸直", "维持20秒", "重复2次后换腿"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "坐姿踝关节运动 - I期基础活动",
          description: "坐在椅子上进行踝关节的屈伸和旋转运动，促进下肢血液循环，维持关节灵活性。",
          videoUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 300,  // 5分钟
          difficulty: "easy",
          category: "flexibility",
          targetStage: ["I"],
          exercises: ["踝关节屈伸", "踝关节旋转"],
          precautions: ["动作轻柔", "幅度逐渐增加", "避免疼痛"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },

        // II期视频（中度）- 简单至中等难度
        {
          title: "坐姿膝伸直运动 - II期进阶训练",
          description: "坐于床沿或椅子，大腿前侧肌肉用力使膝盖伸直。可在脚踝绑重物以加强训练强度。",
          videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 480,  // 8分钟
          difficulty: "medium",
          category: "strength",
          targetStage: ["II"],
          exercises: ["坐姿膝伸展", "股四头肌抗阻训练"],
          precautions: ["膝盖完全伸直", "重量由轻到重", "循序渐进", "重复20次"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "桥式运动 - II期臀部强化",
          description: "平躺双膝弯曲，臀部抬起离开地面，保持身体成一条直线。强化臀部和大腿后侧肌肉。",
          videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 420,  // 7分钟
          difficulty: "medium",
          category: "strength",
          targetStage: ["II"],
          exercises: ["桥式运动", "臀肌激活", "核心稳定"],
          precautions: ["保持核心收紧", "维持5秒", "缓慢放下", "不要过度拱背"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "靠墙静蹲 - II期力量与耐力",
          description: "背靠墙壁，双脚向前，慢慢下蹲至大腿与地面平行。增强股四头肌力量和耐力。",
          videoUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 360,  // 6分钟
          difficulty: "medium",
          category: "strength",
          targetStage: ["II"],
          exercises: ["靠墙静蹲", "等长力量训练"],
          precautions: ["膝盖不超过脚尖", "维持30-60秒", "感到疲劳时停止"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "侧卧抬腿 - II期髋外展训练",
          description: "侧卧位，保持腿部伸直，缓慢向上抬起上侧腿。强化臀中肌，改善髋关节稳定性。",
          videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 360,  // 6分钟
          difficulty: "medium",
          category: "strength",
          targetStage: ["II"],
          exercises: ["侧卧抬腿", "臀中肌强化", "髋外展"],
          precautions: ["腿部保持伸直", "维持3秒", "缓慢放下", "每组10次"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "坐立行进 - II期髋屈曲训练",
          description: "坐在椅子上，交替抬高双腿，膝盖弯曲。强化髋屈肌和股四头肌，改善日常活动能力。",
          videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 300,  // 5分钟
          difficulty: "easy",
          category: "strength",
          targetStage: ["II"],
          exercises: ["坐姿抬腿", "髋屈肌训练"],
          precautions: ["保持上身挺直", "维持3秒", "交替进行", "可用手辅助"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "枕头夹膝 - II期内收肌训练",
          description: "平躺或坐姿，双膝间夹枕头，用力夹紧。强化大腿内侧肌肉，增加膝关节稳定性。",
          videoUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 300,  // 5分钟
          difficulty: "easy",
          category: "strength",
          targetStage: ["II"],
          exercises: ["内收肌强化", "枕头夹膝"],
          precautions: ["维持5秒", "重复10次", "可坐姿或卧姿进行"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "单腿平衡训练 - II期稳定性强化",
          description: "扶椅单腿站立，保持平衡。训练本体感觉和膝关节稳定性，预防跌倒。",
          videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 360,  // 6分钟
          difficulty: "medium",
          category: "balance",
          targetStage: ["II"],
          exercises: ["单腿平衡", "本体感觉训练"],
          precautions: ["扶椅保持安全", "逐渐减少扶持", "维持30秒", "循序渐进"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "提踵运动 - II期小腿力量",
          description: "站立扶椅，双脚脚跟抬起，用脚尖支撑。强化小腿肌肉，改善踝关节稳定性。",
          videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 300,  // 5分钟
          difficulty: "easy",
          category: "strength",
          targetStage: ["II", "III"],
          exercises: ["提踵运动", "小腿强化"],
          precautions: ["维持3秒", "缓慢放下", "重复10次", "坐姿也可进行"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },

        // III期视频（中重度）- 简单温和
        {
          title: "温和关节活动 - III期维持训练",
          description: "轻柔的膝关节屈伸运动，维持关节活动度，减少僵硬。适合中重度患者。",
          videoUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 360,  // 6分钟
          difficulty: "easy",
          category: "flexibility",
          targetStage: ["III", "IV"],
          exercises: ["温和关节活动", "被动运动"],
          precautions: ["动作非常轻柔", "在无痛范围内活动", "可由他人辅助"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "坐站练习 - III期功能训练",
          description: "从椅子上站起和坐下的练习。改善日常生活能力，增强腿部力量。",
          videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 300,  // 5分钟
          difficulty: "easy",
          category: "strength",
          targetStage: ["III"],
          exercises: ["坐站转换", "功能性训练"],
          precautions: ["使用椅子扶手", "动作缓慢", "膝盖不超过脚尖", "可加高椅子"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "轻度步行训练 - III期有氧运动",
          description: "平地缓慢步行，适合中重度患者的低强度有氧运动。改善心肺功能和关节灵活性。",
          videoUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 600,  // 10分钟
          difficulty: "easy",
          category: "flexibility",
          targetStage: ["III"],
          exercises: ["步行训练", "低强度有氧"],
          precautions: ["选择平坦路面", "穿舒适鞋子", "从5分钟开始", "可使用助行器"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },

        // IV期视频（重度）- 非常轻柔
        {
          title: "床上被动活动 - IV期基础维持",
          description: "卧床状态下的轻柔关节活动，由他人辅助或自行缓慢进行。维持基本关节活动度。",
          videoUrl: "https://media.w3.org/2010/05/video/movie_300.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 300,  // 5分钟
          difficulty: "easy",
          category: "flexibility",
          targetStage: ["IV"],
          exercises: ["被动关节活动", "维持活动度"],
          precautions: ["动作极其轻柔", "避免任何疼痛", "可由家人辅助"],
          createdAt: new Date(),
          views: 0,
          completions: 0,
          isActive: true
        },
        {
          title: "椅上轻柔运动 - IV期安全训练",
          description: "坐在椅子上进行的轻柔运动，包括膝关节缓慢屈伸。适合重度患者的安全训练。",
          videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",  // 请替换为实际视频链接
          thumbnailUrl: "",
          duration: 240,  // 4分钟
          difficulty: "easy",
          category: "flexibility",
          targetStage: ["IV"],
          exercises: ["坐姿轻柔运动", "安全训练"],
          precautions: ["全程坐姿", "动作幅度小", "频率低", "注意安全"],
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
    
    // 获取单个视频详情
    if (action === 'getVideo') {
      const { videoId } = event;
      
      if (!videoId) {
        return { code: 400, message: '缺少视频ID' };
      }
      
      const res = await videosCollection.doc(videoId).get();
      
      if (res.data && res.data.length > 0) {
        return {
          code: 0,
          data: res.data[0]
        };
      } else {
        return {
          code: 404,
          message: '视频不存在'
        };
      }
    }
    
    // 更新视频URL（批量更新）
    if (action === 'updateVideoUrl') {
      const { videoId, newUrl } = event;
      
      if (!videoId || !newUrl) {
        return { code: 400, message: '缺少必要参数' };
      }
      
      await videosCollection.doc(videoId).update({
        videoUrl: newUrl
      });
      
      return {
        code: 0,
        message: '视频链接更新成功'
      };
    }
    
    // 批量为现有视频生成封面
    if (action === 'generateCovers') {
      // 封面生成函数
      const getCoverUrl = (category, index) => {
        const coverMap = {
          'strength': [
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=640&h=360&fit=crop',
            'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=640&h=360&fit=crop',
            'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=640&h=360&fit=crop'
          ],
          'flexibility': [
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=640&h=360&fit=crop',
            'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=640&h=360&fit=crop',
            'https://images.unsplash.com/photo-1599447292023-2c38a6e5f068?w=640&h=360&fit=crop'
          ],
          'balance': [
            'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=640&h=360&fit=crop',
            'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=640&h=360&fit=crop'
          ]
        };
        
        const covers = coverMap[category] || coverMap['strength'];
        return covers[index % covers.length];
      };
      
      // 获取所有视频
      const res = await videosCollection.get();
      const videos = res.data;
      
      let updatedCount = 0;
      const categoryIndexMap = {}; // 记录每个类别的索引
      
      // 为每个视频生成封面
      for (const video of videos) {
        // 跳过已有封面的视频
        if (video.thumbnailUrl && video.thumbnailUrl.trim() !== '') {
          continue;
        }
        
        const category = video.category || 'strength';
        
        // 获取该类别的当前索引
        if (!categoryIndexMap[category]) {
          categoryIndexMap[category] = 0;
        }
        
        const coverUrl = getCoverUrl(category, categoryIndexMap[category]);
        categoryIndexMap[category]++;
        
        // 更新视频封面
        await videosCollection.doc(video._id).update({
          thumbnailUrl: coverUrl
        });
        
        updatedCount++;
      }
      
      return {
        code: 0,
        message: `成功为 ${updatedCount} 个视频生成封面`,
        data: {
          total: videos.length,
          updated: updatedCount
        }
      };
    }
    
    // 删除所有测试视频（清空数据）
    if (action === 'clearTestVideos') {
      // 删除所有包含测试链接的视频
      const testUrls = [
        'https://media.w3.org/2010/05/sintel/trailer.mp4',
        'https://media.w3.org/2010/05/bunny/trailer.mp4',
        'https://media.w3.org/2010/05/video/movie_300.mp4'
      ];
      
      for (const url of testUrls) {
        await videosCollection.where({
          videoUrl: url
        }).remove();
      }
      
      return {
        code: 0,
        message: '测试视频已清空'
      };
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
