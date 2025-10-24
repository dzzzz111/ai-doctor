<template>
  <view class="page">
    <!-- 导航栏 -->
    <view class="navbar">
      <view class="navbar-inner">
        <view class="back-btn" @click="goBack">
          <text>←</text>
        </view>
        <text class="title">图像诊断记录</text>
        <view class="placeholder"></view>
      </view>
    </view>
    
    <!-- 筛选器 -->
    <view class="filter-bar">
      <view 
        class="filter-item" 
        :class="{ active: currentFilter === item.value }"
        v-for="item in filters" 
        :key="item.value"
        @click="changeFilter(item.value)"
      >
        {{ item.label }}
      </view>
    </view>
    
    <!-- 记录列表 -->
    <view class="list-container">
      <view class="record-card" v-for="record in displayRecords" :key="record.id" @click="viewDetail(record)">
        <view class="card-header">
          <view class="stage-tag" :class="'stage-' + record.stage">{{ record.stage }}期</view>
          <text class="time">{{ record.time }}</text>
        </view>
        
        <view class="card-body">
          <image class="thumb" :src="record.imageUrl || '/static/placeholder.png'" mode="aspectFill"></image>
          <view class="info">
            <view class="result">{{ record.mainResult }}</view>
            <view class="type">{{ record.type }}</view>
            <view class="confidence">可信度: {{ Math.round(record.confidence * 100) }}%</view>
          </view>
        </view>
        
        <view class="card-footer" v-if="record.hasRehabPlan">
          <text class="plan-tag">✓ 已创建康复计划</text>
        </view>
      </view>
      
      <!-- 空状态 -->
      <view class="empty" v-if="displayRecords.length === 0 && !loading">
        <text class="empty-text">暂无诊断记录</text>
        <view class="empty-btn" @click="goToDiagnose">去诊断</view>
      </view>
      
      <!-- 加载中 -->
      <view class="loading" v-if="loading">
        <text>加载中...</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      records: [],
      currentFilter: 'all',
      filters: [
        { label: '全部', value: 'all' },
        { label: 'I期', value: 'I' },
        { label: 'II期', value: 'II' },
        { label: 'III期', value: 'III' },
        { label: 'IV期', value: 'IV' }
      ]
    };
  },
  computed: {
    displayRecords() {
      if (this.currentFilter === 'all') {
        return this.records;
      }
      return this.records.filter(r => r.stage === this.currentFilter);
    }
  },
  onLoad() {
    this.loadRecords();
  },
  methods: {
    async loadRecords() {
      this.loading = true;
      try {
        // 获取用户信息（需要解析JSON字符串）
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
          uni.showModal({
            title: '提示',
            content: '请先登录',
            success: (res) => {
              if (res.confirm) {
                uni.navigateTo({ url: '/pagesB/mine/login' });
              }
            }
          });
          return;
        }
        
        const res = await uniCloud.callFunction({
          name: 'getDiagnosisHistory',
          data: {
            userId: userInfo.userId,
            pageSize: 50,
            pageNum: 1
          }
        });
        
        if (res.result.code === 0) {
          this.records = res.result.data.records.map(r => ({
            id: r.id,
            type: r.diagnosisType,
            imageUrl: r.imageUrl,
            mainResult: r.mainResult,
            time: this.formatTime(r.createdAt),
            confidence: r.confidence,
            stage: r.stage,
            hasRehabPlan: r.hasRehabPlan
          }));
        }
      } catch (error) {
        console.error('加载失败:', error);
        uni.showToast({ title: '加载失败', icon: 'none' });
      } finally {
        this.loading = false;
      }
    },
    
    changeFilter(value) {
      this.currentFilter = value;
    },
    
    viewDetail(record) {
      uni.navigateTo({
        url: `/pages/image-diagnose/detail?id=${record.id}`
      });
    },
    
    goToDiagnose() {
      uni.navigateTo({ url: '/pagesA/image-diagnose/index' });
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

.back-btn, .placeholder {
  width: 40px;
}

.back-btn {
  font-size: 24px;
  color: #fff;
}

.title {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
}

.filter-bar {
  display: flex;
  background: #fff;
  padding: 10px 15px;
  gap: 10px;
}

.filter-item {
  flex: 1;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: #f5f7fa;
  border-radius: 16px;
  font-size: 14px;
  color: #666;
}

.filter-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.list-container {
  padding: 15px;
}

.record-card {
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.stage-tag {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: #fff;
  font-weight: 600;
}

.stage-tag.stage-I { background: #10b981; }
.stage-tag.stage-II { background: #3b82f6; }
.stage-tag.stage-III { background: #f59e0b; }
.stage-tag.stage-IV { background: #ef4444; }

.time {
  font-size: 12px;
  color: #999;
}

.card-body {
  display: flex;
  gap: 12px;
}

.thumb {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  flex-shrink: 0;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.result {
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.type {
  font-size: 13px;
  color: #7c3aed;
}

.confidence {
  font-size: 12px;
  color: #2563eb;
}

.card-footer {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #f0f0f0;
}

.plan-tag {
  font-size: 12px;
  color: #059669;
  background: #d1fae5;
  padding: 3px 10px;
  border-radius: 10px;
}

.empty {
  text-align: center;
  padding: 80px 20px;
}

.empty-text {
  font-size: 14px;
  color: #999;
  display: block;
  margin-bottom: 20px;
}

.empty-btn {
  display: inline-block;
  padding: 10px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #999;
  font-size: 14px;
}
</style>
