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
      
      <!-- 主推功能卡片 -->
      <view class="feature-primary" @click="navigateTo('/pagesA/ai-doctor/index')">
        <view class="primary-left">
          <view class="primary-icon-wrapper">
            <view class="primary-icon">🤖</view>
          </view>
        </view>
        <view class="primary-right">
          <text class="primary-title">AI智能问诊</text>
          <text class="primary-desc">24小时在线医疗咨询</text>
          <text class="primary-subtitle">专业·智能·便捷</text>
        </view>
        <view class="primary-badge">HOT</view>
      </view>
      
      <!-- 次级功能卡片 -->
      <view class="function-grid">
        <view class="function-card" @click="navigateTo('/pagesA/image-diagnose/index')">
          <view class="card-icon-wrapper image-wrapper">
            <view class="card-icon">🔬</view>
          </view>
          <text class="card-title">X光智能诊断</text>
          <text class="card-desc">精准分期分析</text>
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
          image: 'https://mp-aec6565b-c333-4030-8492-6cc423e8ca1a.cdn.bspapp.com/images/news1.png',
        },
        {
          id: 2,
          title: '关节炎患者的运动指南',
          image: '/static/images/news2.png',
        },
        {
          id: 3,
          title: '饮食与骨关节炎的关系',
          image: 'https://mp-aec6565b-c333-4030-8492-6cc423e8ca1a.cdn.bspapp.com/images/news3.png',
        }
      ],
      newsList: [
        {
          id: 1,
          title: '骨关节炎新疗法研究突破',
          description: '科学家发现可能逆转软骨损伤的再生技术',
          image: 'https://mp-aec6565b-c333-4030-8492-6cc423e8ca1a.cdn.bspapp.com/images/news1.png',
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
          image: 'https://mp-aec6565b-c333-4030-8492-6cc423e8ca1a.cdn.bspapp.com/images/news3.png',
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

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 顶部Banner优化 */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: 200% 200%;
  animation: gradientFlow 15s ease infinite;
  height: 260rpx;
  padding-top: 44rpx;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10rpx 40rpx rgba(102, 126, 234, 0.35);
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 移除复杂动画 */

.nav-bar {
  height: 200rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.header-title {
  font-size: 52rpx;
  font-weight: bold;
  text-shadow: 0 4rpx 16rpx rgba(0,0,0,0.3);
  margin-bottom: 12rpx;
  letter-spacing: 3rpx;
  animation: titleFadeIn 0.8s ease-out;
}

@keyframes titleFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20rpx);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-subtitle {
  font-size: 28rpx;
  opacity: 0.95;
  text-shadow: 0 2rpx 8rpx rgba(0,0,0,0.2);
  font-weight: 300;
  letter-spacing: 1rpx;
  animation: subtitleFadeIn 1s ease-out 0.2s both;
}

@keyframes subtitleFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10rpx);
  }
  to {
    opacity: 0.95;
    transform: translateY(0);
  }
}

.header-decoration {
  position: absolute;
  bottom: 20rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 80rpx;
  height: 8rpx;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent);
  border-radius: 4rpx;
  animation: decorationPulse 3s ease-in-out infinite;
}

@keyframes decorationPulse {
  0%, 100% { opacity: 0.6; transform: translateX(-50%) scaleX(1); }
  50% { opacity: 1; transform: translateX(-50%) scaleX(1.2); }
}

/* 装饰性粒子 - 优化版 */
.header-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0.15;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite;
}

.particle-1 {
  width: 100rpx;
  height: 100rpx;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle-2 {
  width: 60rpx;
  height: 60rpx;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.particle-3 {
  width: 80rpx;
  height: 80rpx;
  top: 40%;
  right: 5%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.15;
  }
  50% {
    transform: translateY(-30rpx) rotate(180deg);
    opacity: 0.3;
  }
}

/* 轮播图优化 */
.swiper-section {
  padding: 30rpx 30rpx 20rpx;
  position: relative;
}

.swiper {
  height: 380rpx;
  border-radius: 28rpx;
  overflow: hidden;
  box-shadow: 0 16rpx 48rpx rgba(102, 126, 234, 0.25);
  transform: translateZ(0);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3rpx solid rgba(255, 255, 255, 0.8);
}

.swiper:active {
  transform: translateY(-2rpx) scale(1.01);
  box-shadow: 0 20rpx 64rpx rgba(102, 126, 234, 0.35);
}

.swiper-item {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swiper-image {
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.swiper-item:hover .swiper-image {
  transform: scale(1.05);
}

.swiper-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.3), transparent);
  color: #fff;
  padding: 50rpx 35rpx 35rpx;
  backdrop-filter: blur(12rpx);
}

.swiper-content {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.swiper-title {
  font-size: 36rpx;
  font-weight: bold;
  line-height: 1.5;
  text-shadow: 0 3rpx 12rpx rgba(0,0,0,0.6);
  letter-spacing: 1rpx;
}

.swiper-subtitle {
  font-size: 24rpx;
  opacity: 0.8;
  font-weight: 300;
}

/* 功能区优化 */
.function-area {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 30rpx 40rpx;
  gap: 24rpx;
}

.function-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20rpx);
  border-radius: 28rpx;
  padding: 50rpx 20rpx;
  box-shadow: 0 12rpx 40rpx rgba(102, 126, 234, 0.15);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1rpx solid rgba(255, 255, 255, 0.3);
}

.function-item:hover {
  transform: translateY(-8rpx) scale(1.02);
  box-shadow: 0 20rpx 60rpx rgba(102, 126, 234, 0.25);
}

.function-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6rpx;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 28rpx 28rpx 0 0;
}

.ai-function::before {
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.image-function::before {
  background: linear-gradient(90deg, #f093fb, #f5576c);
}

.function-icon-wrapper {
  position: relative;
  margin-bottom: 24rpx;
}

.function-icon {
  width: 140rpx;
  height: 140rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.function-item:hover .function-icon {
  transform: scale(1.1) rotate(5deg);
}

.function-icon image {
  width: 80rpx;
  height: 80rpx;
  filter: drop-shadow(0 4rpx 12rpx rgba(0,0,0,0.2));
}

.icon-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  opacity: 0.2;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.05; }
}

.ai-icon {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.ai-glow {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.image-icon {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.image-glow {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.function-text {
  font-size: 32rpx;
  color: #333;
  font-weight: bold;
  margin-bottom: 12rpx;
  text-align: center;
}

.function-desc {
  font-size: 24rpx;
  color: #666;
  text-align: center;
  opacity: 0.8;
}

/* 康复训练主推荐卡片 */
.rehab-featured {
  margin: 30rpx;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
  border-radius: 28rpx;
  overflow: hidden;
  box-shadow: 0 16rpx 48rpx rgba(16, 185, 129, 0.45);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  border: 3rpx solid rgba(255, 255, 255, 0.3);
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.rehab-featured:active {
  transform: scale(0.97);
  box-shadow: 0 12rpx 36rpx rgba(16, 185, 129, 0.55);
}

.featured-badge {
  position: absolute;
  top: 24rpx;
  left: 24rpx;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(12rpx);
  color: #fff;
  font-size: 24rpx;
  font-weight: bold;
  padding: 12rpx 24rpx;
  border-radius: 40rpx;
  border: 2rpx solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.15);
  animation: badgePulse 3s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.featured-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 70rpx 30rpx 40rpx;
}

.featured-left {
  display: flex;
  align-items: flex-start;
  flex: 1;
}

.featured-icon {
  font-size: 88rpx;
  margin-right: 24rpx;
  filter: drop-shadow(0 6rpx 16rpx rgba(0,0,0,0.35));
  animation: iconBounce 3s ease-in-out infinite;
}

@keyframes iconBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8rpx); }
}

.featured-info {
  display: flex;
  flex-direction: column;
}

.featured-title {
  font-size: 36rpx;
  font-weight: bold;
  color: #fff;
  margin-bottom: 16rpx;
  text-shadow: 0 2rpx 8rpx rgba(0,0,0,0.2);
}

.featured-subtitle {
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 8rpx;
  text-shadow: 0 1rpx 4rpx rgba(0,0,0,0.1);
  line-height: 1.5;
}

.featured-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.start-btn {
  background: rgba(255, 255, 255, 0.98);
  color: #059669;
  font-size: 28rpx;
  font-weight: bold;
  padding: 20rpx 36rpx;
  border-radius: 40rpx;
  margin-bottom: 16rpx;
  box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  animation: btnPulse 2s ease-in-out infinite;
}

@keyframes btnPulse {
  0%, 100% { box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.25); }
  50% { box-shadow: 0 8rpx 28rpx rgba(0, 0, 0, 0.35); }
}

.featured-arrow {
  font-size: 60rpx;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
}

/* 功能区域 */
.function-section {
  margin: 30rpx;
}

.section-title-simple {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 24rpx;
  padding-left: 8rpx;
}

/* 主推功能卡片 */
.feature-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 28rpx;
  padding: 40rpx;
  display: flex;
  align-items: center;
  margin-bottom: 24rpx;
  box-shadow: 0 16rpx 48rpx rgba(102, 126, 234, 0.35);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.feature-primary:active {
  transform: scale(0.98);
  box-shadow: 0 12rpx 36rpx rgba(102, 126, 234, 0.45);
}

.primary-left {
  margin-right: 24rpx;
}

.primary-icon-wrapper {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10rpx);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.15);
}

.primary-icon {
  font-size: 64rpx;
  filter: drop-shadow(0 4rpx 12rpx rgba(0, 0, 0, 0.2));
}

.primary-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.primary-title {
  font-size: 38rpx;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.2);
}

.primary-desc {
  font-size: 28rpx;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.4;
}

.primary-subtitle {
  font-size: 24rpx;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 2rpx;
}

.primary-badge {
  position: absolute;
  top: 20rpx;
  right: 20rpx;
  background: rgba(255, 107, 107, 0.95);
  color: #fff;
  font-size: 22rpx;
  font-weight: bold;
  padding: 6rpx 16rpx;
  border-radius: 20rpx;
  box-shadow: 0 4rpx 12rpx rgba(255, 107, 107, 0.4);
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}

/* 次级功能卡片网格 */
.function-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
}

.function-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
  border-radius: 24rpx;
  padding: 40rpx 28rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10rpx 32rpx rgba(102, 126, 234, 0.15);
  border: 2rpx solid rgba(102, 126, 234, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  min-height: 240rpx;
}

.function-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
  transition: left 0.6s ease;
}

.function-card:active::before {
  left: 100%;
}

.function-card:active {
  transform: scale(0.95) translateY(2rpx);
  box-shadow: 0 6rpx 20rpx rgba(102, 126, 234, 0.25);
}

.card-icon-wrapper {
  width: 110rpx;
  height: 110rpx;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24rpx;
  position: relative;
  box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.function-card:active .card-icon-wrapper {
  transform: scale(0.95);
}

.ai-wrapper {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 8rpx 24rpx rgba(102, 126, 234, 0.4);
}

.image-wrapper {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 8rpx 24rpx rgba(240, 147, 251, 0.4);
}

.history-wrapper {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  box-shadow: 0 8rpx 24rpx rgba(79, 172, 254, 0.4);
}

.community-wrapper {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  box-shadow: 0 8rpx 24rpx rgba(67, 233, 123, 0.4);
}

.card-icon {
  font-size: 56rpx;
  filter: drop-shadow(0 3rpx 10rpx rgba(0,0,0,0.25));
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6rpx); }
}

.card-title {
  font-size: 30rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 10rpx;
  letter-spacing: 0.5rpx;
}

.card-desc {
  font-size: 24rpx;
  color: #999;
  text-align: center;
  opacity: 0.85;
}

/* 资讯区域优化 */
.news-section {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(24rpx);
  margin: 0 30rpx 30rpx;
  border-radius: 28rpx;
  padding: 44rpx 32rpx;
  box-shadow: 0 12rpx 40rpx rgba(102, 126, 234, 0.15);
  border: 2rpx solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}


.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30rpx;
  padding-bottom: 20rpx;
  border-bottom: 2rpx solid rgba(102, 126, 234, 0.1);
}

.section-title-wrapper {
  display: flex;
  align-items: center;
}

.section-icon {
  font-size: 36rpx;
  margin-right: 16rpx;
  filter: drop-shadow(0 2rpx 4rpx rgba(0,0,0,0.1));
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  letter-spacing: 1rpx;
}

.more {
  font-size: 28rpx;
  color: #667eea;
  font-weight: 500;
  padding: 8rpx 16rpx;
  border-radius: 20rpx;
  background: rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
}

.more:hover {
  background: rgba(102, 126, 234, 0.2);
  transform: scale(1.05);
}

/* 资讯区域优化 */
.news-item {
  display: flex;
  padding: 30rpx 24rpx;
  border-bottom: 2rpx solid rgba(102, 126, 234, 0.05);
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(248, 249, 255, 0.6) 100%);
  backdrop-filter: blur(12rpx);
}

.news-item:active {
  background: rgba(102, 126, 234, 0.08);
  transform: scale(0.98);
  box-shadow: 0 6rpx 24rpx rgba(102, 126, 234, 0.15);
}

.news-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.news-image {
  width: 230rpx;
  height: 170rpx;
  border-radius: 20rpx;
  margin-right: 24rpx;
  box-shadow: 0 6rpx 20rpx rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
  border: 2rpx solid rgba(255, 255, 255, 0.8);
}


.news-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.news-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  line-height: 1.5;
  margin-bottom: 14rpx;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  letter-spacing: 0.5rpx;
}

.news-desc {
  font-size: 26rpx;
  color: #666;
  line-height: 1.5;
  margin-bottom: 16rpx;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-tag {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  font-size: 22rpx;
  padding: 6rpx 16rpx;
  border-radius: 16rpx;
  font-weight: 500;
  box-shadow: 0 2rpx 8rpx rgba(102, 126, 234, 0.2);
}

.news-time {
  font-size: 22rpx;
  color: #999;
  font-weight: 400;
}

/* 响应式设计 */
@media screen and (max-width: 750rpx) {
  .function-area {
    flex-direction: column;
    gap: 20rpx;
  }

  .function-item {
    width: 100%;
  }

  .news-image {
    width: 180rpx;
    height: 120rpx;
  }
}

/* 全局动画优化 */
view, text, image, button {
  -webkit-tap-highlight-color: transparent;
}

.container > view {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30rpx);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 为不同元素添加延迟动画 */
.header {
  animation-delay: 0s;
}

.swiper-section {
  animation-delay: 0.1s;
}

.rehab-featured {
  animation-delay: 0.1s;
}

.function-section {
  animation-delay: 0.2s;
}

.news-section {
  animation-delay: 0.3s;
}

/* 滚动条美化 */
::-webkit-scrollbar {
  width: 6rpx;
  height: 6rpx;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3rpx;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 3rpx;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2, #667eea);
}
</style>
