<template>
  <view class="container">
    <!-- 顶部Banner -->
    <view class="header">
      <view class="status-bar"></view>
      <view class="nav-bar">
        <view class="header-content">
          <text class="header-title">医疗助手</text>
          <text class="header-subtitle">您的健康管家</text>
        </view>
        <view class="header-decoration"></view>
      </view>
      <!-- 添加装饰性元素 -->
      <view class="header-particles">
        <view class="particle particle-1"></view>
        <view class="particle particle-2"></view>
        <view class="particle particle-3"></view>
      </view>
    </view>

    <!-- 轮播图 -->
    <view class="swiper-section">
      <swiper class="swiper" circular autoplay interval="4000" duration="800" indicator-dots indicator-active-color="#667eea">
        <swiper-item v-for="(item, index) in bannerList" :key="index" @click="viewNewsDetail(item)">
          <view class="swiper-item">
            <image :src="item.image" mode="aspectFill" class="swiper-image"></image>
            <view class="swiper-overlay">
              <view class="swiper-content">
                <text class="swiper-title">{{item.title}}</text>
                <text class="swiper-subtitle">点击查看详情</text>
              </view>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>

    <!-- 康复训练主推荐卡片 -->
    <view class="rehab-featured" @click="navigateTo('/pagesA/rehabilitation/index')">
      <view class="featured-badge">🌟 个性化康复训练</view>
      <view class="featured-content">
        <view class="featured-left">
          <view class="featured-icon">🏋️</view>
          <view class="featured-info">
            <text class="featured-title">专业康复训练计划</text>
            <text class="featured-subtitle">• 根据X光诊断定制方案</text>
            <text class="featured-subtitle">• 视频指导科学训练</text>
            <text class="featured-subtitle">• 打卡记录进度跟踪</text>
          </view>
        </view>
        <view class="featured-right">
          <view class="start-btn">立即开始</view>
          <text class="featured-arrow">›</text>
        </view>
      </view>
    </view>
    
    <!-- 功能区 -->
    <view class="function-section">
      <view class="section-title-simple">📱 核心功能</view>
      <view class="function-grid">
        <view class="function-card" @click="navigateTo('/pagesA/ai-doctor/index')">
          <view class="card-icon-wrapper ai-wrapper">
            <view class="card-icon">🤖</view>
          </view>
          <text class="card-title">AI智能问诊</text>
          <text class="card-desc">24小时在线咨询</text>
        </view>
        
        <view class="function-card" @click="navigateTo('/pagesA/image-diagnose/index')">
          <view class="card-icon-wrapper image-wrapper">
            <view class="card-icon">🔬</view>
          </view>
          <text class="card-title">X光智能诊断</text>
          <text class="card-desc">精准分期分析</text>
        </view>
        
        <view class="function-card" @click="navigateTo('/pages/image-diagnose/history')">
          <view class="card-icon-wrapper history-wrapper">
            <view class="card-icon">📋</view>
          </view>
          <text class="card-title">诊断记录</text>
          <text class="card-desc">历史数据查看</text>
        </view>
        
        <view class="function-card" @click="navigateTo('/pages/community/index')">
          <view class="card-icon-wrapper community-wrapper">
            <view class="card-icon">👥</view>
          </view>
          <text class="card-title">健康社区</text>
          <text class="card-desc">经验交流分享</text>
        </view>
      </view>
    </view>

    <!-- 健康资讯 -->
    <view class="news-section">
      <view class="section-header">
        <view class="section-title-wrapper">
          <text class="section-icon">📰</text>
          <text class="title">健康资讯</text>
        </view>
        <text class="more" @click="navigateTo('/pages/news/index')">更多</text>
      </view>
      <view class="news-list">
        <view class="news-item" v-for="(item, index) in newsList" :key="index" @click="viewNewsDetail(item)">
          <image class="news-image" :src="item.image" mode="aspectFill"></image>
          <view class="news-content">
            <text class="news-title">{{item.title}}</text>
            <text class="news-desc">{{item.description}}</text>
            <view class="news-meta">
              <view class="news-tag">健康</view>
              <text class="news-time">{{item.time}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        {
          id: 1,
          title: '骨关节炎新疗法研究突破',
          image: '/static/images/news1.png',
        },
        {
          id: 2,
          title: '关节炎患者的运动指南',
          image: '/static/images/news2.png',
        },
        {
          id: 3,
          title: '饮食与骨关节炎的关系',
          image: '/static/images/news3.png',
        }
      ],
      newsList: [
        {
          id: 1,
          title: '骨关节炎新疗法研究突破',
          description: '科学家发现可能逆转软骨损伤的再生技术',
          image: '/static/images/news1.png',
          time: '2023-10-18'
        },
        {
          id: 2,
          title: '关节炎患者的运动指南',
          description: '专家推荐的低冲击运动方式帮助缓解症状',
          image: '/static/images/news2.png',
          time: '2023-10-15'
        },
        {
          id: 3,
          title: '饮食与骨关节炎的关系',
          description: '最新研究揭示某些食物可能加重或缓解关节炎症状',
          image: '/static/images/news3.png',
          time: '2023-10-12'
        }
      ],
      statusBarHeight: 20 // 默认值
    };
  },
  onLoad() {
    // 获取状态栏高度
    const systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight || 20;
  },
  methods: {
    navigateTo(url) {
      uni.navigateTo({
        url: url
      });
    },
    viewNewsDetail(item) {
      uni.navigateTo({
        url: `/pages/news/detail?id=${item.id}`
      });
    }
  }
}
</script>

<style>
.container {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  position: relative;
  padding-bottom: 30rpx;
}

/* 简化样式，避免复杂CSS导致问题 */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 240rpx;
  padding-top: 44rpx;
  color: #fff;
}

.function-card {
  background: #fff;
  border-radius: 20rpx;
  padding: 32rpx;
  margin: 10rpx;
}
</style>
