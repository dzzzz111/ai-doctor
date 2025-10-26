<template>
  <view class="container">
    <!-- 自定义导航栏 -->
    <view class="navbar" :style="{ paddingTop: statusBarHeight + 'px' }">
      <view class="navbar-inner">
        <view class="back-btn" @click="goBack">
          <text>←</text>
        </view>
        <text class="navbar-title">资讯详情</text>
        <view class="placeholder"></view>
      </view>
    </view>
    
    <!-- 内容区域 -->
    <scroll-view scroll-y class="content">
      <view class="article" v-if="article">
        <!-- 标题 -->
        <view class="article-title">{{ article.title }}</view>
        
        <!-- 元信息 -->
        <view class="article-meta">
          <view class="meta-item">
            <text class="meta-icon">📅</text>
            <text>{{ article.time }}</text>
          </view>
          <view class="meta-item">
            <text class="meta-icon">👁</text>
            <text>{{ article.views }} 阅读</text>
          </view>
          <view class="meta-item">
            <text class="meta-tag">{{ article.category }}</text>
          </view>
        </view>
        
        <!-- 封面图 -->
        <image 
          class="article-cover" 
          :src="article.image" 
          mode="widthFix"
        ></image>
        
        <!-- 摘要 -->
        <view class="article-summary">{{ article.description }}</view>
        
        <!-- 正文 -->
        <view class="article-content">
          <rich-text :nodes="article.content"></rich-text>
        </view>
        
        <!-- 标签 -->
        <view class="article-tags">
          <view class="tag-item" v-for="(tag, index) in article.tags" :key="index">
            #{{ tag }}
          </view>
        </view>
        
        <!-- 互动区域 -->
        <view class="article-actions">
          <view class="action-item" @click="toggleLike">
            <text class="action-icon" :class="{ liked: isLiked }">{{ isLiked ? '❤️' : '🤍' }}</text>
            <text>{{ article.likes }}</text>
          </view>
          <view class="action-item" @click="shareArticle">
            <text class="action-icon">📤</text>
            <text>分享</text>
          </view>
          <view class="action-item" @click="collectArticle">
            <text class="action-icon" :class="{ collected: isCollected }">{{ isCollected ? '⭐' : '☆' }}</text>
            <text>收藏</text>
          </view>
        </view>
      </view>
      
      <!-- 加载中 -->
      <view class="loading" v-else>
        <text>加载中...</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 20,
      articleId: '',
      article: null,
      isLiked: false,
      isCollected: false,
      // 模拟数据
      newsData: {
        1: {
          id: 1,
          title: '骨关节炎新疗法研究突破',
          description: '科学家发现可能逆转软骨损伤的再生技术',
          image: '/static/images/news1.png',
          time: '2024-10-18',
          category: '健康资讯',
          views: 1234,
          likes: 89,
          tags: ['骨关节炎', '新疗法', '科研突破'],
          content: `
            <p style="line-height: 2; font-size: 16px; color: #333;">
              <strong>最新研究发现</strong>：科学家在骨关节炎治疗领域取得重大突破，发现了一种可能逆转软骨损伤的再生技术。
            </p>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              这项研究由国际知名医学研究团队主导，历时3年完成。研究人员发现，通过特定的生物材料和生长因子组合，可以刺激软骨细胞再生。
            </p>
            <h3 style="font-size: 18px; font-weight: bold; margin: 20px 0; color: #667eea;">核心技术</h3>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              • <strong>干细胞诱导技术</strong>：利用患者自身干细胞，在体外培养成软骨细胞<br/>
              • <strong>3D生物支架</strong>：提供软骨细胞生长的立体环境<br/>
              • <strong>生长因子缓释系统</strong>：持续释放促进软骨再生的生长因子
            </p>
            <h3 style="font-size: 18px; font-weight: bold; margin: 20px 0; color: #667eea;">临床试验结果</h3>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              在为期2年的临床试验中，参与者的软骨厚度平均增加了30%，疼痛指数下降了60%，关节活动度显著改善。
            </p>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              专家表示，这项技术有望在未来5年内进入临床应用，为广大骨关节炎患者带来新希望。
            </p>
            <blockquote style="background: #f8f9ff; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0;">
              "这是骨关节炎治疗史上的一个里程碑。" —— 研究负责人 Dr. Smith
            </blockquote>
          `
        },
        2: {
          id: 2,
          title: '关节炎患者的运动指南',
          description: '专家推荐的低冲击运动方式帮助缓解症状',
          image: '/static/images/news2.png',
          time: '2024-10-15',
          category: '健康指南',
          views: 2156,
          likes: 156,
          tags: ['运动康复', '关节保护', '专家建议'],
          content: `
            <p style="line-height: 2; font-size: 16px; color: #333;">
              对于骨关节炎患者来说，适度运动至关重要。正确的运动不仅不会加重病情，反而能有效缓解症状，改善关节功能。
            </p>
            <h3 style="font-size: 18px; font-weight: bold; margin: 20px 0; color: #667eea;">推荐运动方式</h3>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              <strong>1. 游泳和水中运动 🏊</strong><br/>
              水的浮力可以减轻关节负担，同时锻炼全身肌肉。建议每周3-4次，每次30-45分钟。
            </p>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              <strong>2. 骑自行车 🚴</strong><br/>
              低冲击有氧运动，可以增强腿部肌肉力量，改善关节灵活性。
            </p>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              <strong>3. 太极拳 🥋</strong><br/>
              柔和缓慢的动作有助于改善平衡能力和关节柔韧性。
            </p>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              <strong>4. 瑜伽和拉伸 🧘</strong><br/>
              增加关节活动范围，减轻肌肉紧张。
            </p>
            <h3 style="font-size: 18px; font-weight: bold; margin: 20px 0; color: #667eea;">运动注意事项</h3>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              ⚠️ 运动前充分热身<br/>
              ⚠️ 避免高冲击运动（如跑步、跳绳）<br/>
              ⚠️ 循序渐进，逐步增加运动强度<br/>
              ⚠️ 如有疼痛加剧，立即停止运动
            </p>
            <blockquote style="background: #f8f9ff; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0;">
              "运动是良医，但要选对方式。" —— 康复科专家
            </blockquote>
          `
        },
        3: {
          id: 3,
          title: '饮食与骨关节炎的关系',
          description: '最新研究揭示某些食物可能加重或缓解关节炎症状',
          image: '/static/images/news3.png',
          time: '2024-10-12',
          category: '营养健康',
          views: 1876,
          likes: 132,
          tags: ['营养饮食', '抗炎食物', '健康建议'],
          content: `
            <p style="line-height: 2; font-size: 16px; color: #333;">
              越来越多的研究表明，饮食在骨关节炎的预防和治疗中扮演着重要角色。正确的饮食可以减轻炎症，延缓病情进展。
            </p>
            <h3 style="font-size: 18px; font-weight: bold; margin: 20px 0; color: #10b981;">有益食物 ✅</h3>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              <strong>1. 深海鱼类 🐟</strong><br/>
              三文鱼、鲭鱼等富含Omega-3脂肪酸，具有强大的抗炎作用。建议每周食用2-3次。
            </p>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              <strong>2. 浆果类 🫐</strong><br/>
              蓝莓、草莓含有丰富的抗氧化物质，可以减少炎症反应。
            </p>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              <strong>3. 绿叶蔬菜 🥬</strong><br/>
              菠菜、羽衣甘蓝富含维生素K，有助于骨骼健康。
            </p>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              <strong>4. 坚果 🥜</strong><br/>
              核桃、杏仁含有健康脂肪和维生素E，保护关节。
            </p>
            <h3 style="font-size: 18px; font-weight: bold; margin: 20px 0; color: #f5576c;">应避免食物 ❌</h3>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              • 加工肉类（可能增加炎症）<br/>
              • 高糖食品（加重氧化应激）<br/>
              • 油炸食品（含有反式脂肪）<br/>
              • 过量红肉（可能促进炎症）
            </p>
            <h3 style="font-size: 18px; font-weight: bold; margin: 20px 0; color: #667eea;">地中海饮食模式</h3>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              研究发现，遵循地中海饮食模式的人群，骨关节炎发病率显著降低。这种饮食强调：
            </p>
            <p style="line-height: 2; font-size: 16px; color: #333;">
              ✓ 大量新鲜蔬果<br/>
              ✓ 全谷物为主食<br/>
              ✓ 适量鱼类和家禽<br/>
              ✓ 橄榄油作为主要油脂<br/>
              ✓ 适量坚果和豆类
            </p>
            <blockquote style="background: #f8f9ff; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0;">
              "让食物成为你的良药。" —— 营养学专家
            </blockquote>
          `
        }
      }
    };
  },
  onLoad(options) {
    const systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight || 20;
    
    if (options.id) {
      this.articleId = options.id;
      this.loadArticle();
    }
  },
  methods: {
    loadArticle() {
      // 模拟加载
      setTimeout(() => {
        this.article = this.newsData[this.articleId];
        if (this.article) {
          this.article.views += 1;
        }
      }, 300);
    },
    toggleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        this.article.likes += 1;
        uni.showToast({
          title: '点赞成功',
          icon: 'success'
        });
      } else {
        this.article.likes -= 1;
      }
    },
    collectArticle() {
      this.isCollected = !this.isCollected;
      uni.showToast({
        title: this.isCollected ? '收藏成功' : '取消收藏',
        icon: 'success'
      });
    },
    shareArticle() {
      uni.showShareMenu({
        success: () => {
          console.log('分享成功');
        },
        fail: () => {
          uni.showToast({
            title: '分享功能开发中',
            icon: 'none'
          });
        }
      });
    },
    goBack() {
      uni.navigateBack();
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: #f5f7fa;
}

/* 导航栏 */
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.2);
}

.navbar-inner {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.back-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}

.navbar-title {
  flex: 1;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
}

.placeholder {
  width: 40px;
}

/* 内容区域 */
.content {
  height: calc(100vh - 44px);
}

.article {
  background: #fff;
  padding: 20px;
  margin: 15px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.article-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  line-height: 1.5;
  margin-bottom: 15px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: #999;
}

.meta-icon {
  font-size: 14px;
}

.meta-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
}

.article-cover {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
}

.article-summary {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
  padding: 15px;
  background: #f8f9ff;
  border-left: 4px solid #667eea;
  border-radius: 4px;
  margin-bottom: 20px;
}

.article-content {
  font-size: 16px;
  line-height: 2;
  color: #333;
  margin-bottom: 30px;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
}

.tag-item {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 13px;
}

.article-actions {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-top: 1px solid #f0f0f0;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
}

.action-icon {
  font-size: 28px;
  transition: all 0.3s ease;
}

.action-icon.liked,
.action-icon.collected {
  transform: scale(1.2);
}

.loading {
  text-align: center;
  padding: 100px 0;
  color: #999;
}
</style>
