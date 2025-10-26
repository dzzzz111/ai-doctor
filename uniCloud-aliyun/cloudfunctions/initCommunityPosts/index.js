'use strict';

/**
 * 初始化社区帖子数据
 * 用于测试和演示
 */
exports.main = async (event, context) => {
  const { action = 'init' } = event;
  
  const db = uniCloud.database();
  const postsCollection = db.collection('community_posts');
  
  try {
    // 清空现有帖子（仅测试用）
    if (action === 'clear') {
      await postsCollection.where({}).remove();
      return {
        code: 0,
        message: '已清空所有帖子'
      };
    }
    
    // 初始化示例帖子
    if (action === 'init') {
      const samplePosts = [
        // 康复分享类
        {
          userId: 'user_001',
          username: '康复达人',
          userAvatar: '/static/images/user-avatar.png',
          title: '膝关节术后3个月康复经验分享',
          content: '我是去年12月做的膝关节镜手术，现在已经3个月了。分享一下我的康复经验：\n\n1️⃣ 术后第1周：主要是踝泵运动和股四头肌等长收缩，每天做6-8组\n2️⃣ 术后第2-4周：开始直腿抬高训练，配合冰敷消肿\n3️⃣ 术后第5-8周：增加坐姿膝伸直和桥式运动\n4️⃣ 术后第9-12周：开始靠墙静蹲和单腿平衡训练\n\n现在走路已经不痛了，能上下楼梯。坚持康复训练真的很重要！',
          category: 'rehabilitation',
          images: [],
          likes: 158,
          comments: 32,
          shares: 15,
          collects: 67,
          views: 892,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),  // 2天前
          updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
        },
        {
          userId: 'user_002',
          username: '运动爱好者小李',
          userAvatar: '/static/images/user-avatar.png',
          title: '跑步膝预防指南 - 跑者必看！',
          content: '作为一个跑了5年的跑步爱好者，我想分享一些预防跑步膝的经验：\n\n✅ 跑前充分热身，特别是膝关节周围肌肉\n✅ 选择合适的跑鞋，定期更换（500公里一换）\n✅ 控制跑量，循序渐进，不要突然增加距离\n✅ 加强力量训练，特别是股四头肌和臀肌\n✅ 跑后拉伸和冰敷\n\n记住：膝盖是跑者的生命线，一定要保护好！',
          category: 'exercise',
          images: [],
          likes: 234,
          comments: 45,
          shares: 28,
          collects: 112,
          views: 1456,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),  // 5小时前
          updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000)
        },
        
        // 疾病交流类
        {
          userId: 'user_003',
          username: '张医生',
          userAvatar: '/static/images/ai-avatar.png',
          title: '骨关节炎的早期症状，你中了几条？',
          content: '作为骨科医生，我接诊过很多膝关节炎患者。这里总结一下早期症状：\n\n1. 晨起膝关节僵硬，活动后缓解\n2. 上下楼梯时膝盖疼痛\n3. 久坐后起身时膝盖不适\n4. 膝关节偶尔肿胀\n5. 活动时有摩擦音或弹响\n\n如果有2条以上，建议及时就医检查。早发现早治疗，可以延缓病情发展！',
          category: 'disease',
          images: [],
          likes: 445,
          comments: 89,
          shares: 67,
          collects: 234,
          views: 2341,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),  // 1天前
          updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
        },
        {
          userId: 'user_004',
          username: '膝盖守护者',
          userAvatar: '/static/images/user-avatar.png',
          title: '关于半月板损伤，你需要知道的事',
          content: '半月板是膝关节内的纤维软骨，起到缓冲和稳定作用。\n\n常见症状：\n- 膝关节疼痛，特别是蹲起时\n- 关节交锁感\n- 膝关节肿胀\n- 上下楼梯困难\n\n保守治疗：\n轻度损伤可以通过休息、物理治疗、肌力训练恢复\n\n手术治疗：\n严重撕裂需要关节镜手术修复或切除\n\n预防建议：避免突然扭转动作，加强腿部肌肉力量！',
          category: 'disease',
          images: [],
          likes: 312,
          comments: 56,
          shares: 34,
          collects: 156,
          views: 1789,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),  // 8小时前
          updatedAt: new Date(Date.now() - 8 * 60 * 60 * 1000)
        },
        
        // 治疗经验类
        {
          userId: 'user_005',
          username: '中医世家',
          userAvatar: '/static/images/ai-avatar.png',
          title: '艾灸+针灸治疗膝关节炎的效果分享',
          content: '我家三代中医，专治骨关节疾病。分享一下中医疗法：\n\n🔥 艾灸穴位：\n- 足三里：增强免疫力\n- 膝眼：消肿止痛\n- 阳陵泉：舒筋活络\n\n💉 针灸治疗：\n每周2-3次，配合电针刺激\n\n⏰ 疗程：\n一般需要4-6周见效\n\n⚠️ 注意事项：\n1. 要找正规中医\n2. 配合西医治疗效果更好\n3. 急性期不适合艾灸\n\n中西医结合才是最佳选择！',
          category: 'treatment',
          images: [],
          likes: 278,
          comments: 42,
          shares: 23,
          collects: 98,
          views: 1234,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000),  // 12小时前
          updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000)
        },
        {
          userId: 'user_006',
          username: '物理治疗师王老师',
          userAvatar: '/static/images/user-avatar.png',
          title: 'PRP注射治疗膝关节炎的真实体验',
          content: '我妈妈今年65岁，膝关节炎II期。上个月做了PRP（富血小板血浆）注射治疗，分享一下效果：\n\n💉 治疗过程：\n抽取自身血液→离心分离→注射到膝关节\n整个过程约30分钟，轻微疼痛\n\n📊 治疗效果（1个月后）：\n- 疼痛减轻60%\n- 上下楼梯明显改善\n- 肿胀基本消失\n- 活动度增加\n\n💰 费用：单次3000元左右\n\n建议：中轻度关节炎可以尝试，重度需要手术',
          category: 'treatment',
          images: [],
          likes: 189,
          comments: 38,
          shares: 12,
          collects: 73,
          views: 956,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),  // 3天前
          updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
        },
        
        // 用药咨询类
        {
          userId: 'user_007',
          username: '药师小陈',
          userAvatar: '/static/images/ai-avatar.png',
          title: '膝关节炎常用药物全解析',
          content: '作为执业药师，给大家科普一下膝关节炎常用药：\n\n💊 止痛药：\n- 布洛芬：消炎止痛\n- 塞来昔布：副作用小\n⚠️ 注意：不要长期服用，伤胃\n\n💉 关节腔注射：\n- 玻璃酸钠：润滑关节\n- 糖皮质激素：快速消炎\n\n🔬 软骨保护剂：\n- 氨基葡萄糖：营养软骨\n- 硫酸软骨素：减缓退化\n\n‼️ 重要提醒：\n所有药物必须在医生指导下使用！',
          category: 'medicine',
          images: [],
          likes: 367,
          comments: 71,
          shares: 45,
          collects: 189,
          views: 1678,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),  // 6小时前
          updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000)
        },
        
        // 营养饮食类
        {
          userId: 'user_008',
          username: '营养师Linda',
          userAvatar: '/static/images/user-avatar.png',
          title: '保护关节的10种超级食物',
          content: '饮食对关节健康很重要！推荐这些食物：\n\n🐟 深海鱼：三文鱼、沙丁鱼\n富含Omega-3，抗炎\n\n🥦 深色蔬菜：西兰花、菠菜\n含维生素K，强化骨骼\n\n🍊 柑橘类水果：橙子、柠檬\n富含维生素C，促进胶原蛋白合成\n\n🥜 坚果：核桃、杏仁\n提供优质脂肪酸\n\n🫐 浆果：蓝莓、草莓\n抗氧化，减少炎症\n\n⚠️ 避免：油炸食品、高糖食品、过量红肉',
          category: 'nutrition',
          images: [],
          likes: 423,
          comments: 67,
          shares: 89,
          collects: 267,
          views: 2145,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000),  // 10小时前
          updatedAt: new Date(Date.now() - 10 * 60 * 60 * 1000)
        },
        {
          userId: 'user_009',
          username: '健康饮食达人',
          userAvatar: '/static/images/user-avatar.png',
          title: '膝关节炎患者的一日三餐食谱',
          content: '给大家分享我的抗炎饮食食谱：\n\n🌅 早餐：\n燕麦片 + 蓝莓 + 核桃\n豆浆/牛奶\n\n🌞 午餐：\n糙米饭\n三文鱼（清蒸）\n西兰花炒虾仁\n紫菜蛋花汤\n\n🌙 晚餐：\n全麦面包\n鸡胸肉沙拉\n番茄豆腐汤\n\n🍎 加餐：\n橙子、苹果、酸奶\n\n💡 原则：\n低盐、低糖、高蛋白、多蔬果\n\n坚持3个月，膝盖明显不那么疼了！',
          category: 'nutrition',
          images: [],
          likes: 298,
          comments: 54,
          shares: 41,
          collects: 178,
          views: 1432,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 15 * 60 * 60 * 1000),  // 15小时前
          updatedAt: new Date(Date.now() - 15 * 60 * 60 * 1000)
        },
        
        // 心理健康类
        {
          userId: 'user_010',
          username: '心理咨询师刘老师',
          userAvatar: '/static/images/ai-avatar.png',
          title: '慢性疼痛如何影响心理健康？',
          content: '长期膝关节疼痛不仅影响身体，也会影响心理：\n\n😔 常见心理问题：\n- 焦虑：担心病情恶化\n- 抑郁：活动受限，生活质量下降\n- 失眠：疼痛影响睡眠\n- 社交退缩：不愿出门\n\n💚 应对方法：\n1. 接受现状，积极治疗\n2. 保持社交，多与朋友交流\n3. 培养兴趣爱好\n4. 学习放松技巧（冥想、深呼吸）\n5. 必要时寻求专业心理咨询\n\n记住：身心健康同样重要！',
          category: 'mental',
          images: [],
          likes: 267,
          comments: 48,
          shares: 32,
          collects: 134,
          views: 1123,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000),  // 18小时前
          updatedAt: new Date(Date.now() - 18 * 60 * 60 * 1000)
        },
        
        // 运动健身类
        {
          userId: 'user_011',
          username: '健身教练阿强',
          userAvatar: '/static/images/user-avatar.png',
          title: '膝关节友好的5个力量训练动作',
          content: '膝盖不好也能练！推荐这些低冲击动作：\n\n1️⃣ 靠墙静蹲\n强化股四头肌，膝盖弯曲不超过90度\n\n2️⃣ 臀桥\n锻炼臀肌和腘绳肌，保护膝关节\n\n3️⃣ 侧卧抬腿\n强化髋外展肌，提高膝关节稳定性\n\n4️⃣ 坐姿膝伸展\n安全锻炼股四头肌\n\n5️⃣ 弹力带训练\n低冲击，可调节强度\n\n💡 要点：\n动作标准 > 重量大小\n循序渐进，量力而行',
          category: 'exercise',
          images: [],
          likes: 334,
          comments: 62,
          shares: 38,
          collects: 198,
          views: 1567,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),  // 4天前
          updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
        },
        {
          userId: 'user_012',
          username: '瑜伽教练小美',
          userAvatar: '/static/images/user-avatar.png',
          title: '瑜伽缓解膝关节不适的6个体式',
          content: '瑜伽对膝关节很友好，分享6个有效体式：\n\n🧘‍♀️ 1. 猫牛式\n温和活动脊柱和关节\n\n🧘‍♀️ 2. 半鸽式\n拉伸髋部，减轻膝盖压力\n\n🧘‍♀️ 3. 桥式\n强化臀肌和大腿后侧\n\n🧘‍♀️ 4. 仰卧扭转\n放松下背和髋部\n\n🧘‍♀️ 5. 婴儿式\n放松全身，特别是膝关节\n\n🧘‍♀️ 6. 束角式\n打开髋部，改善关节灵活性\n\n✨ 建议：每天15-20分钟，持之以恒',
          category: 'exercise',
          images: [],
          likes: 289,
          comments: 51,
          shares: 29,
          collects: 145,
          views: 1289,
          isPublic: true,
          status: 'published',
          createdAt: new Date(Date.now() - 20 * 60 * 60 * 1000),  // 20小时前
          updatedAt: new Date(Date.now() - 20 * 60 * 60 * 1000)
        }
      ];
      
      // 批量插入数据
      for (const post of samplePosts) {
        await postsCollection.add(post);
      }
      
      return {
        code: 0,
        message: `成功初始化 ${samplePosts.length} 篇帖子`,
        data: {
          count: samplePosts.length
        }
      };
    }
    
    return {
      code: -1,
      message: '未知操作'
    };
    
  } catch (error) {
    console.error('操作失败:', error);
    return {
      code: -1,
      message: '操作失败',
      error: error.message
    };
  }
};
