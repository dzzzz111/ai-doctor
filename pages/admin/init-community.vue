<template>
  <view class="container">
    <view class="header">
      <text class="title">社区数据管理</text>
    </view>
    
    <view class="section">
      <view class="section-title">📊 当前统计</view>
      <view class="stats">
        <view class="stat-item">
          <text class="stat-value">{{ postCount }}</text>
          <text class="stat-label">帖子总数</text>
        </view>
      </view>
    </view>
    
    <view class="section">
      <view class="section-title">🛠️ 数据操作</view>
      <view class="button-group">
        <button class="btn primary" @click="initPosts">初始化示例帖子</button>
        <button class="btn" @click="refreshCount">刷新统计</button>
        <button class="btn danger" @click="clearPosts">清空所有帖子</button>
      </view>
    </view>
    
    <view class="section">
      <view class="section-title">📝 说明</view>
      <view class="desc">
        <text class="desc-text">• 初始化示例帖子：添加12篇精心编写的测试帖子</text>
        <text class="desc-text">• 包含7个分类的内容</text>
        <text class="desc-text">• 每篇帖子都有真实的点赞、评论、收藏数据</text>
        <text class="desc-text">• 部分帖子带有精美配图</text>
      </view>
    </view>
    
    <view class="section" v-if="logs.length > 0">
      <view class="section-title">📋 操作日志</view>
      <view class="logs">
        <view class="log-item" v-for="(log, index) in logs" :key="index">
          <text class="log-time">{{ log.time }}</text>
          <text class="log-message">{{ log.message }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      postCount: 0,
      logs: []
    };
  },
  onLoad() {
    this.refreshCount();
  },
  methods: {
    async refreshCount() {
      try {
        const db = uniCloud.database();
        const result = await db.collection('community_posts').count();
        this.postCount = result.total;
      } catch (error) {
        console.error('获取统计失败:', error);
      }
    },
    
    async initPosts() {
      uni.showModal({
        title: '初始化帖子',
        content: '将添加12篇示例帖子到社区，确定继续？',
        success: async (res) => {
          if (res.confirm) {
            uni.showLoading({ title: '初始化中...' });
            
            try {
              const result = await uniCloud.callFunction({
                name: 'initCommunityPosts',
                data: {
                  action: 'init'
                }
              });
              
              uni.hideLoading();
              
              if (result.result.code === 0) {
                this.addLog('✅ ' + result.result.message);
                uni.showToast({
                  title: '初始化成功',
                  icon: 'success'
                });
                this.refreshCount();
              } else {
                this.addLog('❌ ' + result.result.message);
                uni.showToast({
                  title: result.result.message,
                  icon: 'none'
                });
              }
            } catch (error) {
              uni.hideLoading();
              console.error('初始化失败:', error);
              this.addLog('❌ 初始化失败: ' + error.message);
              uni.showToast({
                title: '初始化失败',
                icon: 'none'
              });
            }
          }
        }
      });
    },
    
    async clearPosts() {
      uni.showModal({
        title: '危险操作',
        content: '将删除所有帖子数据，此操作不可恢复，确定继续？',
        confirmColor: '#f44336',
        success: async (res) => {
          if (res.confirm) {
            uni.showLoading({ title: '清空中...' });
            
            try {
              const result = await uniCloud.callFunction({
                name: 'initCommunityPosts',
                data: {
                  action: 'clear'
                }
              });
              
              uni.hideLoading();
              
              if (result.result.code === 0) {
                this.addLog('🗑️ ' + result.result.message);
                uni.showToast({
                  title: '清空成功',
                  icon: 'success'
                });
                this.refreshCount();
              } else {
                this.addLog('❌ ' + result.result.message);
                uni.showToast({
                  title: result.result.message,
                  icon: 'none'
                });
              }
            } catch (error) {
              uni.hideLoading();
              console.error('清空失败:', error);
              this.addLog('❌ 清空失败: ' + error.message);
              uni.showToast({
                title: '清空失败',
                icon: 'none'
              });
            }
          }
        }
      });
    },
    
    addLog(message) {
      const now = new Date();
      const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      this.logs.unshift({ time, message });
      if (this.logs.length > 10) {
        this.logs.pop();
      }
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: #f5f7fa;
  padding: 20rpx;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40rpx 30rpx;
  border-radius: 16rpx;
  margin-bottom: 30rpx;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #fff;
}

.section {
  background: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
}

.stats {
  display: flex;
  justify-content: space-around;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 48rpx;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 10rpx;
}

.stat-label {
  font-size: 24rpx;
  color: #999;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.btn {
  height: 88rpx;
  line-height: 88rpx;
  border-radius: 12rpx;
  font-size: 28rpx;
  font-weight: 500;
  border: none;
  background: #f0f0f0;
  color: #333;
}

.btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.btn.danger {
  background: #fff;
  color: #f44336;
  border: 2rpx solid #f44336;
}

.desc {
  display: flex;
  flex-direction: column;
  gap: 15rpx;
}

.desc-text {
  font-size: 26rpx;
  color: #666;
  line-height: 1.6;
}

.logs {
  max-height: 400rpx;
  overflow-y: auto;
}

.log-item {
  display: flex;
  padding: 15rpx 0;
  border-bottom: 1rpx solid #f0f0f0;
}

.log-time {
  font-size: 22rpx;
  color: #999;
  width: 120rpx;
  flex-shrink: 0;
}

.log-message {
  font-size: 24rpx;
  color: #333;
  flex: 1;
}
</style>
