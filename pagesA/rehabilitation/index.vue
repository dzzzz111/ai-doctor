<template>
  <view class="rehabilitation-container">
    <!-- 自定义导航栏 -->
    <view class="custom-navbar">
      <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
      <view class="nav-bar">
        <view class="nav-left" @click="goBack">
          <text class="iconfont">&#xe65c;</text>
        </view>
        <view class="nav-title">康复训练</view>
        <view class="nav-right" @click="viewHistory">
          <text class="iconfont">&#xe60a;</text>
        </view>
      </view>
    </view>

    <!-- 没有训练计划时 -->
    <view class="empty-state" v-if="!hasPlan && !loading">
      <image src="/static/images/empty-plan.png" class="empty-image" mode="aspectFit"></image>
      <text class="empty-text">暂无康复训练计划</text>
      <text class="empty-hint">完成MRI诊断后，系统将为您生成个性化训练方案</text>
      <button class="create-plan-btn" @click="goToDiagnosis">去诊断</button>
    </view>

    <!-- 有训练计划时 -->
    <view class="plan-content" v-else-if="hasPlan">
      <!-- 进度卡片 -->
      <view class="progress-card">
        <view class="card-header">
          <view class="stage-badge" :class="'stage-' + plan.diagnosisStage">
            {{ plan.diagnosisStage }}期康复
          </view>
          <text class="duration-text">第 {{ plan.currentWeek }}/{{ plan.totalWeeks }} 周</text>
        </view>
        
        <view class="progress-bar-container">
          <view class="progress-bar">
            <view class="progress-fill" :style="{ width: progressPercent + '%' }"></view>
          </view>
          <text class="progress-text">{{ progressPercent }}%</text>
        </view>
        
        <view class="stats-row">
          <view class="stat-item">
            <text class="stat-value">{{ weekCheckIns }}</text>
            <text class="stat-label">本周打卡</text>
          </view>
          <view class="stat-divider"></view>
          <view class="stat-item">
            <text class="stat-value">{{ plan.totalCheckIns }}</text>
            <text class="stat-label">累计打卡</text>
          </view>
          <view class="stat-divider"></view>
          <view class="stat-item">
            <text class="stat-value">{{ currentStreak }}</text>
            <text class="stat-label">连续天数</text>
          </view>
        </view>
      </view>

      <!-- 本周训练视频 -->
      <view class="section">
        <view class="section-header">
          <text class="section-title">本周训练</text>
          <text class="section-subtitle">推荐每周训练 {{ plan.weeklyGoal }} 次</text>
        </view>
        
        <view class="video-list">
          <view 
            class="video-card" 
            v-for="video in videos" 
            :key="video._id"
            @click="playVideo(video)">
            
            <!-- 视频缩略图 -->
            <view class="video-thumbnail">
              <image :src="video.thumbnailUrl || '/static/images/video-placeholder.png'" mode="aspectFill"></image>
              <view class="video-duration">{{ formatDuration(video.duration) }}</view>
              
              <!-- 今日已完成标记 -->
              <view class="completed-badge" v-if="isCompletedToday(video._id)">
                <text class="badge-icon">✓</text>
                <text class="badge-text">已完成</text>
              </view>
            </view>
            
            <!-- 视频信息 -->
            <view class="video-info">
              <text class="video-title">{{ video.title }}</text>
              <view class="video-meta">
                <text class="difficulty-tag" :class="'difficulty-' + video.difficulty">
                  {{ getDifficultyText(video.difficulty) }}
                </text>
                <text class="category-tag">{{ getCategoryText(video.category) }}</text>
              </view>
              <text class="video-desc">{{ video.description }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 康复目标 -->
      <view class="section goals-section">
        <view class="section-header">
          <text class="section-title">康复目标</text>
        </view>
        <view class="goals-card">
          <view class="goal-item" v-for="(goal, index) in rehabGoals" :key="index">
            <text class="goal-icon">{{ goal.icon }}</text>
            <text class="goal-text">{{ goal.text }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 加载状态 -->
    <view class="loading-state" v-if="loading">
      <text class="loading-text">加载中...</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 0,
      loading: true,
      hasPlan: false,
      plan: {},
      videos: [],
      weekCheckIns: 0,
      currentStreak: 0,
      todayCheckIns: [],
      rehabGoals: []
    };
  },
  computed: {
    progressPercent() {
      if (!this.plan.totalWeeks) return 0;
      return Math.floor((this.plan.currentWeek / this.plan.totalWeeks) * 100);
    }
  },
  onLoad() {
    // 获取状态栏高度
    const systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight;
    
    this.loadPlan();
  },
  methods: {
    async loadPlan() {
      this.loading = true;
      
      try {
        let userInfo = uni.getStorageSync('userInfo');
        
        // 如果未登录，提供测试模式选项
        if (!userInfo || !userInfo.userId) {
          this.loading = false;
          
          const confirmRes = await new Promise((resolve) => {
            uni.showModal({
              title: '需要登录',
              content: '查看康复训练计划需要登录账号。\n\n是否使用测试模式（仅用于功能演示）？',
              confirmText: '测试模式',
              cancelText: '去登录',
              success: (res) => {
                resolve(res.confirm);
              }
            });
          });
          
          if (!confirmRes) {
            // 用户选择去登录
            uni.navigateTo({
              url: '/pagesB/mine/login'
            });
            return;
          }
          
          // 使用测试用户ID
          userInfo = {
            userId: 'test_user_demo',
            userName: '测试用户',
            isTestMode: true
          };
          
          this.loading = true;
        }
        
        const res = await uniCloud.callFunction({
          name: 'getRehabPlan',
          data: {
            userId: userInfo.userId
          }
        });
        
        console.log('获取计划结果:', res);
        
        if (res.result.code === 0) {
          this.hasPlan = res.result.data.hasPlan;
          
          if (this.hasPlan) {
            this.plan = res.result.data.plan;
            this.videos = res.result.data.videos;
            this.weekCheckIns = res.result.data.weekCheckIns;
            this.currentStreak = res.result.data.streak;
            this.todayCheckIns = res.result.data.todayCheckIns;
            
            // 设置康复目标
            this.setRehabGoals(this.plan.diagnosisStage);
          }
        } else {
          this.hasPlan = false;
        }
        
      } catch (error) {
        console.error('加载计划失败:', error);
        uni.showToast({
          title: '加载失败',
          icon: 'none'
        });
      } finally {
        this.loading = false;
      }
    },
    
    setRehabGoals(stage) {
      const goalsMap = {
        'I': [
          { icon: '🎯', text: '保持关节灵活性' },
          { icon: '💪', text: '增强肌肉力量' },
          { icon: '🛡️', text: '预防病情进展' }
        ],
        'II': [
          { icon: '🎯', text: '改善关节活动度' },
          { icon: '💪', text: '增强膝关节稳定性' },
          { icon: '😊', text: '减轻疼痛症状' },
          { icon: '🚶', text: '恢复日常活动能力' }
        ],
        'III': [
          { icon: '😌', text: '缓解疼痛' },
          { icon: '🎯', text: '维持关节功能' },
          { icon: '🚶', text: '改善步态' },
          { icon: '🌟', text: '提高生活质量' }
        ],
        'IV': [
          { icon: '😌', text: '减轻疼痛' },
          { icon: '🎯', text: '维持基本活动能力' },
          { icon: '🌟', text: '改善生活质量' },
          { icon: '⏸️', text: '延缓病情恶化' }
        ]
      };
      
      this.rehabGoals = goalsMap[stage] || goalsMap['I'];
    },
    
    isCompletedToday(videoId) {
      return this.todayCheckIns.includes(videoId);
    },
    
    formatDuration(seconds) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes}分钟`;
    },
    
    getDifficultyText(difficulty) {
      const map = {
        'easy': '简单',
        'medium': '中等',
        'hard': '困难'
      };
      return map[difficulty] || '简单';
    },
    
    getCategoryText(category) {
      const map = {
        'flexibility': '柔韧性',
        'strength': '力量',
        'balance': '平衡',
        'aerobic': '有氧'
      };
      return map[category] || '训练';
    },
    
    playVideo(video) {
      uni.navigateTo({
        url: `/pagesA/video-player/index?videoId=${video._id}&planId=${this.plan._id}`
      });
    },
    
    goBack() {
      uni.navigateBack();
    },
    
    viewHistory() {
      uni.showToast({
        title: '功能开发中',
        icon: 'none'
      });
    },
    
    goToDiagnosis() {
      uni.navigateTo({
        url: '/pagesA/image-diagnose/index'
      });
    }
  }
};
</script>

<style scoped>
.rehabilitation-container {
  min-height: 100vh;
  background: #f5f7fa;
}

/* 自定义导航栏 */
.custom-navbar {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.nav-bar {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.nav-left, .nav-right {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #333;
}

.nav-title {
  font-size: 17px;
  font-weight: 600;
  color: #333;
}

/* 空状态 */
.empty-state {
  padding: 100px 40px;
  text-align: center;
}

.empty-image {
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
}

.empty-text {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.empty-hint {
  display: block;
  font-size: 14px;
  color: #999;
  line-height: 22px;
  margin-bottom: 30px;
}

.create-plan-btn {
  width: 200px;
  height: 44px;
  line-height: 44px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-radius: 22px;
  border: none;
  font-size: 16px;
}

/* 计划内容 */
.plan-content {
  padding-top: 88px;
  padding-bottom: 20px;
}

/* 进度卡片 */
.progress-card {
  margin: 15px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.stage-badge {
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.duration-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

.progress-bar-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
  margin-right: 10px;
}

.progress-fill {
  height: 100%;
  background: #fff;
  border-radius: 4px;
  transition: width 0.3s;
}

.progress-text {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  min-width: 40px;
}

.stats-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}

.stat-divider {
  width: 1px;
  height: 30px;
  background: rgba(255, 255, 255, 0.3);
}

/* 分区 */
.section {
  margin: 15px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.section-subtitle {
  font-size: 12px;
  color: #999;
}

/* 视频列表 */
.video-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.video-card {
  display: flex;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.video-thumbnail {
  width: 120px;
  height: 120px;
  position: relative;
  flex-shrink: 0;
}

.video-thumbnail image {
  width: 100%;
  height: 100%;
}

.video-duration {
  position: absolute;
  bottom: 8px;
  right: 8px;
  padding: 2px 6px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 11px;
  border-radius: 4px;
}

.completed-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background: rgba(82, 196, 26, 0.9);
  border-radius: 12px;
}

.badge-icon {
  color: #fff;
  font-size: 12px;
  margin-right: 3px;
}

.badge-text {
  color: #fff;
  font-size: 11px;
}

.video-info {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
}

.video-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.video-meta {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
}

.difficulty-tag, .category-tag {
  padding: 2px 8px;
  font-size: 11px;
  border-radius: 10px;
}

.difficulty-tag {
  background: #e6f7ff;
  color: #1890ff;
}

.difficulty-medium {
  background: #fff7e6;
  color: #fa8c16;
}

.difficulty-hard {
  background: #fff1f0;
  color: #f5222d;
}

.category-tag {
  background: #f6ffed;
  color: #52c41a;
}

.video-desc {
  font-size: 12px;
  color: #999;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 康复目标 */
.goals-section {
  margin-bottom: 30px;
}

.goals-card {
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.goal-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.goal-item:last-child {
  border-bottom: none;
}

.goal-icon {
  font-size: 20px;
  margin-right: 12px;
}

.goal-text {
  font-size: 14px;
  color: #666;
}

/* 加载状态 */
.loading-state {
  padding: 100px 0;
  text-align: center;
}

.loading-text {
  color: #999;
  font-size: 14px;
}
</style>
