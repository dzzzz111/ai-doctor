<template>
  <view class="page">
    <!-- 导航栏 -->
    <view class="navbar">
      <view class="navbar-inner">
        <view class="back-btn" @click="goBack">
          <text>←</text>
        </view>
        <text class="title">诊断详情</text>
        <view class="share-btn" @click="shareRecord">
          <text>↗</text>
        </view>
      </view>
    </view>
    
    <view class="content" v-if="!loading && detail">
      <!-- MRI图像 -->
      <view class="image-section">
        <image 
          class="mri-image" 
          :src="detail.imageUrl || '/static/placeholder.png'" 
          mode="aspectFill"
          @click="previewImage"
        ></image>
        <view class="image-tip">点击查看大图</view>
      </view>
      
      <!-- 基本信息 -->
      <view class="info-card">
        <view class="card-title">
          <text class="type">{{ detail.type }}</text>
          <view class="stage-badge" :class="'stage-' + detail.stage">{{ detail.stage }}期</view>
        </view>
        <view class="time">诊断时间: {{ detail.time }}</view>
      </view>
      
      <!-- 诊断结果 -->
      <view class="section">
        <view class="section-title">诊断结果</view>
        <view class="result-list">
          <view class="result-item" v-for="(item, idx) in detail.items" :key="idx">
            <text class="label">{{ item.name }}:</text>
            <text class="value">{{ item.value }}</text>
          </view>
        </view>
      </view>
      
      <!-- 置信度 -->
      <view class="section">
        <view class="section-title">诊断置信度</view>
        <view class="confidence-bar">
          <view class="bar-bg">
            <view class="bar-fill" :style="{ width: (detail.confidence * 100) + '%' }"></view>
          </view>
          <text class="confidence-text">{{ Math.round(detail.confidence * 100) }}%</text>
        </view>
      </view>
      
      <!-- 分析说明 -->
      <view class="section">
        <view class="section-title">分析说明</view>
        <view class="text-content">{{ detail.analysis }}</view>
      </view>
      
      <!-- 医疗建议 -->
      <view class="section">
        <view class="section-title">医疗建议</view>
        <view class="text-content">{{ detail.suggestion }}</view>
      </view>
      
      <!-- 详细评分 -->
      <view class="section" v-if="detail.allCategories && detail.allCategories.length > 0">
        <view class="section-title">详细评分</view>
        <view class="category-list">
          <view class="category-item" v-for="(cat, idx) in detail.allCategories" :key="idx">
            <text class="cat-name">{{ cat.stage }}期</text>
            <view class="cat-bar">
              <view class="cat-fill" :style="{ width: (cat.score * 100) + '%' }"></view>
            </view>
            <text class="cat-score">{{ Math.round(cat.score * 100) }}%</text>
          </view>
        </view>
      </view>
      
      <!-- 康复计划 -->
      <view class="section">
        <view class="section-title">康复计划</view>
        <view class="rehab-card" v-if="detail.hasRehabPlan">
          <text class="rehab-status">✓ 已创建康复训练计划</text>
          <view class="rehab-btn" @click="goToRehab">查看计划</view>
        </view>
        <view class="rehab-card empty" v-else>
          <text class="empty-text">尚未创建康复计划</text>
          <view class="create-btn" @click="createPlan">立即创建</view>
        </view>
      </view>
      
      <!-- 操作按钮 -->
      <view class="actions">
        <view class="action-btn secondary" @click="reDiagnose">
          <text>重新诊断</text>
        </view>
        <view class="action-btn primary" @click="downloadReport">
          <text>下载报告</text>
        </view>
      </view>
    </view>
    
    <!-- 加载中 -->
    <view class="loading" v-if="loading">
      <text>加载中...</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      diagnosisId: '',
      detail: null
    };
  },
  onLoad(options) {
    if (options.id) {
      this.diagnosisId = options.id;
      this.loadDetail();
    } else {
      uni.showToast({ title: '参数错误', icon: 'none' });
      setTimeout(() => uni.navigateBack(), 1500);
    }
  },
  methods: {
    async loadDetail() {
      this.loading = true;
      try {
        // 获取并解析用户信息
        const userInfoStr = uni.getStorageSync('userInfo');
        let userInfo = null;
        
        if (userInfoStr) {
          try {
            userInfo = typeof userInfoStr === 'string' ? JSON.parse(userInfoStr) : userInfoStr;
          } catch (e) {
            console.error('解析用户信息失败:', e);
          }
        }
        
        const res = await uniCloud.callFunction({
          name: 'getDiagnosisDetail',
          data: {
            diagnosisId: this.diagnosisId,
            userId: userInfo?.userId
          }
        });
        
        if (res.result.code === 0) {
          const data = res.result.data;
          this.detail = {
            id: data.id,
            type: data.diagnosisType,
            imageUrl: data.imageUrl,
            time: this.formatTime(data.createdAt),
            stage: data.stage,
            confidence: data.confidence,
            items: data.items,
            analysis: data.analysis,
            suggestion: data.suggestion,
            allCategories: data.allCategories,
            hasRehabPlan: data.hasRehabPlan,
            rehabPlanId: data.rehabPlanId
          };
        } else {
          throw new Error(res.result.message || '加载失败');
        }
      } catch (error) {
        console.error('加载详情失败:', error);
        uni.showToast({ title: error.message || '加载失败', icon: 'none' });
        setTimeout(() => uni.navigateBack(), 1500);
      } finally {
        this.loading = false;
      }
    },
    
    previewImage() {
      if (this.detail.imageUrl) {
        uni.previewImage({
          urls: [this.detail.imageUrl],
          current: 0
        });
      }
    },
    
    shareRecord() {
      uni.showShareMenu({ withShareTicket: true });
    },
    
    goToRehab() {
      uni.navigateTo({ url: '/pagesA/rehabilitation/index' });
    },
    
    async createPlan() {
      uni.showLoading({ title: '创建中...' });
      try {
        // 获取并解析用户信息
        const userInfoStr = uni.getStorageSync('userInfo');
        let userInfo = null;
        
        if (userInfoStr) {
          try {
            userInfo = typeof userInfoStr === 'string' ? JSON.parse(userInfoStr) : userInfoStr;
          } catch (e) {
            console.error('解析用户信息失败:', e);
          }
        }
        
        if (!userInfo || !userInfo.userId) {
          uni.hideLoading();
          uni.showModal({
            title: '需要登录',
            content: '创建康复计划需要登录',
            confirmText: '去登录',
            success: (res) => {
              if (res.confirm) {
                uni.navigateTo({ url: '/pagesB/mine/login' });
              }
            }
          });
          return;
        }
        
        const res = await uniCloud.callFunction({
          name: 'createRehabPlan',
          data: {
            userId: userInfo.userId,
            diagnosisId: this.diagnosisId
          }
        });
        
        uni.hideLoading();
        
        if (res.result.code === 0) {
          uni.showModal({
            title: '创建成功',
            content: `已为您生成${this.detail.stage}期康复训练计划`,
            confirmText: '去训练',
            success: (modalRes) => {
              if (modalRes.confirm) {
                uni.navigateTo({ url: '/pagesA/rehabilitation/index' });
              } else {
                this.loadDetail();
              }
            }
          });
        } else {
          uni.showToast({ title: res.result.message || '创建失败', icon: 'none' });
        }
      } catch (error) {
        uni.hideLoading();
        console.error('创建计划失败:', error);
        uni.showToast({ title: '创建失败', icon: 'none' });
      }
    },
    
    reDiagnose() {
      uni.navigateTo({ url: '/pagesA/image-diagnose/index' });
    },
    
    downloadReport() {
      uni.showToast({ title: '功能开发中', icon: 'none' });
    },
    
    goBack() {
      uni.navigateBack();
    },
    
    formatTime(dateStr) {
      const date = new Date(dateStr);
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      const h = String(date.getHours()).padStart(2, '0');
      const min = String(date.getMinutes()).padStart(2, '0');
      return `${y}-${m}-${d} ${h}:${min}`;
    }
  }
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f5f7fa;
  padding-bottom: 20px;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: var(--status-bar-height);
}

.navbar-inner {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.back-btn, .share-btn {
  width: 40px;
  font-size: 24px;
  color: #fff;
}

.title {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
}

.content {
  padding: 15px;
}

.image-section {
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 15px;
}

.mri-image {
  width: 100%;
  height: 100%;
}

.image-tip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: linear-gradient(transparent, rgba(0,0,0,0.6));
  color: #fff;
  text-align: center;
  font-size: 12px;
}

.info-card {
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
}

.card-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.type {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.stage-badge {
  padding: 5px 12px;
  border-radius: 12px;
  font-size: 13px;
  color: #fff;
  font-weight: 600;
}

.stage-badge.stage-I { background: #10b981; }
.stage-badge.stage-II { background: #3b82f6; }
.stage-badge.stage-III { background: #f59e0b; }
.stage-badge.stage-IV { background: #ef4444; }

.time {
  font-size: 12px;
  color: #999;
}

.section {
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.result-list {
  border-left: 3px solid #667eea;
  padding-left: 12px;
}

.result-item {
  margin-bottom: 10px;
}

.label {
  font-size: 12px;
  color: #999;
  display: block;
  margin-bottom: 4px;
}

.value {
  font-size: 14px;
  color: #333;
}

.confidence-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.bar-bg {
  flex: 1;
  height: 10px;
  background: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 5px;
  transition: width 0.5s;
}

.confidence-text {
  font-size: 16px;
  font-weight: 600;
  color: #667eea;
  min-width: 50px;
  text-align: right;
}

.text-content {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cat-name {
  width: 60px;
  font-size: 13px;
  color: #666;
}

.cat-bar {
  flex: 1;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.cat-fill {
  height: 100%;
  background: #667eea;
  border-radius: 4px;
}

.cat-score {
  width: 50px;
  font-size: 12px;
  color: #667eea;
  text-align: right;
}

.rehab-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background: #d1fae5;
}

.rehab-card.empty {
  background: #fef3c7;
}

.rehab-status, .empty-text {
  font-size: 14px;
  color: #059669;
}

.empty-text {
  color: #d97706;
}

.rehab-btn, .create-btn {
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 13px;
  color: #fff;
}

.rehab-btn {
  background: #10b981;
}

.create-btn {
  background: #f59e0b;
}

.actions {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.action-btn {
  flex: 1;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  font-size: 15px;
}

.action-btn.secondary {
  background: #fff;
  color: #667eea;
  border: 2px solid #667eea;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.loading {
  text-align: center;
  padding: 100px 20px;
  color: #999;
  font-size: 14px;
}
</style>
