<template>
  <view class="player-container">
    <!-- 视频播放器 -->
    <video 
      id="rehabVideo"
      :src="videoUrl" 
      class="video-player"
      controls
      :show-center-play-btn="true"
      :enable-progress-gesture="true"
      @timeupdate="onTimeUpdate"
      @ended="onVideoEnd"
      @error="onVideoError">
    </video>

    <!-- 视频信息 -->
    <view class="video-info-section">
      <text class="video-title">{{ videoInfo.title }}</text>
      <view class="video-tags">
        <text class="tag difficulty-tag" :class="'difficulty-' + videoInfo.difficulty">
          {{ getDifficultyText(videoInfo.difficulty) }}
        </text>
        <text class="tag category-tag">{{ getCategoryText(videoInfo.category) }}</text>
      </view>
      <text class="video-description">{{ videoInfo.description }}</text>
      
      <!-- 注意事项 -->
      <view class="precautions" v-if="videoInfo.precautions && videoInfo.precautions.length > 0">
        <view class="precautions-header">
          <text class="precautions-icon">⚠️</text>
          <text class="precautions-title">注意事项</text>
        </view>
        <view class="precaution-item" v-for="(item, index) in videoInfo.precautions" :key="index">
          <text class="precaution-text">{{ index + 1 }}. {{ item }}</text>
        </view>
      </view>
    </view>

    <!-- 打卡面板 -->
    <view class="check-in-panel" v-if="showCheckIn">
      <view class="panel-header">
        <text class="panel-title">完成训练打卡</text>
        <text class="panel-subtitle">记录您的训练感受</text>
      </view>
      
      <view class="feedback-section">
        <view class="feedback-item">
          <text class="feedback-label">难度感受</text>
          <view class="rating-stars">
            <text 
              class="star"
              v-for="i in 5" 
              :key="'d'+i"
              @click="difficulty = i"
              :class="{ active: i <= difficulty }">
              ★
            </text>
          </view>
          <text class="rating-desc">{{ getDifficultyDesc(difficulty) }}</text>
        </view>
        
        <view class="feedback-item">
          <text class="feedback-label">疼痛程度</text>
          <view class="rating-stars">
            <text 
              class="star"
              v-for="i in 5" 
              :key="'p'+i"
              @click="painLevel = i"
              :class="{ active: i <= painLevel, pain: true }">
              ★
            </text>
          </view>
          <text class="rating-desc">{{ getPainDesc(painLevel) }}</text>
        </view>
      </view>
      
      <view class="notes-section">
        <text class="notes-label">训练笔记（选填）</text>
        <textarea 
          v-model="notes" 
          placeholder="记录训练感受、身体状态等..."
          class="notes-input"
          maxlength="200">
        </textarea>
        <text class="char-count">{{ notes.length }}/200</text>
      </view>
      
      <view class="action-buttons">
        <button class="cancel-btn" @click="cancelCheckIn">取消</button>
        <button class="check-in-btn" @click="checkIn" :disabled="checking">
          <text v-if="!checking">完成打卡 +10积分</text>
          <text v-else>打卡中...</text>
        </button>
      </view>
    </view>

    <!-- 底部操作栏 -->
    <view class="bottom-actions" v-if="!showCheckIn">
      <button class="action-btn primary" @click="showCheckInPanel">
        <text class="btn-icon">✓</text>
        <text>完成打卡</text>
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoId: '',
      planId: '',
      videoUrl: '',
      videoInfo: {},
      watchedDuration: 0,
      totalDuration: 0,
      showCheckIn: false,
      difficulty: 3,
      painLevel: 2,
      notes: '',
      checking: false
    };
  },
  onLoad(options) {
    this.videoId = options.videoId;
    this.planId = options.planId;
    
    if (!this.videoId || !this.planId) {
      uni.showToast({
        title: '参数错误',
        icon: 'none'
      });
      setTimeout(() => {
        uni.navigateBack();
      }, 1500);
      return;
    }
    
    this.loadVideo();
  },
  methods: {
    async loadVideo() {
      uni.showLoading({ title: '加载中...' });
      
      try {
        // 通过云函数获取视频详情（避免权限问题）
        const res = await uniCloud.callFunction({
          name: 'initRehabVideos',
          data: {
            action: 'getVideo',
            videoId: this.videoId
          }
        });
        
        if (res.result.code === 0 && res.result.data) {
          this.videoInfo = res.result.data;
          this.videoUrl = this.videoInfo.videoUrl;
          this.totalDuration = this.videoInfo.duration;
        } else {
          throw new Error('视频不存在');
        }
        
      } catch (error) {
        console.error('加载视频失败:', error);
        uni.showToast({
          title: '加载失败',
          icon: 'none'
        });
        setTimeout(() => {
          uni.navigateBack();
        }, 1500);
      } finally {
        uni.hideLoading();
      }
    },
    
    onTimeUpdate(e) {
      this.watchedDuration = Math.floor(e.detail.currentTime);
    },
    
    onVideoEnd() {
      // 视频播放完成，自动显示打卡面板
      this.showCheckInPanel();
    },
    
    onVideoError(e) {
      console.error('视频播放错误:', e);
      uni.showToast({
        title: '视频加载失败',
        icon: 'none'
      });
    },
    
    showCheckInPanel() {
      // 检查是否已观看至少30%
      if (this.watchedDuration < this.totalDuration * 0.3) {
        uni.showModal({
          title: '提示',
          content: '请至少完成30%的训练再打卡',
          showCancel: false
        });
        return;
      }
      
      this.showCheckIn = true;
    },
    
    cancelCheckIn() {
      this.showCheckIn = false;
    },
    
    async checkIn() {
      if (this.checking) return;
      
      this.checking = true;
      uni.showLoading({ title: '打卡中...' });
      
      try {
        // 获取并正确解析用户信息
        const userInfoStr = uni.getStorageSync('userInfo');
        let userInfo = null;
        
        if (userInfoStr) {
          try {
            userInfo = typeof userInfoStr === 'string' ? JSON.parse(userInfoStr) : userInfoStr;
          } catch (e) {
            console.error('解析用户信息失败:', e);
          }
        }
        
        // 如果未登录，提供测试模式
        if (!userInfo || !userInfo.userId) {
          uni.hideLoading();
          this.checking = false;
          
          const confirmRes = await new Promise((resolve) => {
            uni.showModal({
              title: '需要登录',
              content: '训练打卡需要登录账号。\n\n是否使用测试模式？',
              confirmText: '测试模式',
              cancelText: '去登录',
              success: (res) => {
                resolve(res.confirm);
              }
            });
          });
          
          if (!confirmRes) {
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
          
          this.checking = true;
          uni.showLoading({ title: '打卡中...' });
        }
        
        const res = await uniCloud.callFunction({
          name: 'trainingCheckIn',
          data: {
            userId: userInfo.userId,
            planId: this.planId,
            videoId: this.videoId,
            duration: this.watchedDuration,
            feedback: {
              difficulty: this.difficulty,
              painLevel: this.painLevel,
              notes: this.notes
            }
          }
        });
        
        uni.hideLoading();
        
        if (res.result.code === 0) {
          const data = res.result.data;
          let message = `打卡成功！+${data.points}积分`;
          
          if (data.streak > 1) {
            message += `\n连续打卡${data.streak}天`;
          }
          
          if (data.achievements && data.achievements.length > 0) {
            message += `\n🎉 解锁成就：${data.achievements.join('、')}`;
          }
          
          uni.showModal({
            title: '打卡成功',
            content: message,
            showCancel: false,
            success: () => {
              uni.navigateBack();
            }
          });
        } else {
          uni.showToast({
            title: res.result.message || '打卡失败',
            icon: 'none'
          });
        }
        
      } catch (error) {
        uni.hideLoading();
        console.error('打卡失败:', error);
        uni.showToast({
          title: error.message || '打卡失败',
          icon: 'none'
        });
      } finally {
        this.checking = false;
      }
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
    
    getDifficultyDesc(level) {
      const desc = ['', '很轻松', '较轻松', '适中', '较困难', '很困难'];
      return desc[level] || '';
    },
    
    getPainDesc(level) {
      const desc = ['', '无痛', '轻微', '中等', '较重', '严重'];
      return desc[level] || '';
    }
  }
};
</script>

<style scoped>
.player-container {
  min-height: 100vh;
  background: #f5f7fa;
  padding-bottom: 80px;
}

/* 视频播放器 */
.video-player {
  width: 100%;
  height: 210px;
  background: #000;
}

/* 视频信息 */
.video-info-section {
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
}

.video-title {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.video-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.tag {
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 12px;
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

.video-description {
  display: block;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}

/* 注意事项 */
.precautions {
  margin-top: 15px;
  padding: 12px;
  background: #fffbe6;
  border-radius: 8px;
  border-left: 3px solid #faad14;
}

.precautions-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.precautions-icon {
  font-size: 16px;
  margin-right: 6px;
}

.precautions-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.precaution-item {
  margin-top: 6px;
}

.precaution-text {
  font-size: 13px;
  color: #666;
  line-height: 20px;
}

/* 打卡面板 */
.check-in-panel {
  background: #fff;
  padding: 20px 15px;
  border-radius: 12px 12px 0 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 -2px 12px rgba(0,0,0,0.1);
  z-index: 100;
}

.panel-header {
  text-align: center;
  margin-bottom: 20px;
}

.panel-title {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.panel-subtitle {
  display: block;
  font-size: 13px;
  color: #999;
}

/* 反馈区域 */
.feedback-section {
  margin-bottom: 20px;
}

.feedback-item {
  margin-bottom: 15px;
}

.feedback-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.rating-stars {
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
}

.star {
  font-size: 28px;
  color: #ddd;
  transition: color 0.2s;
}

.star.active {
  color: #faad14;
}

.star.pain.active {
  color: #f5222d;
}

.rating-desc {
  display: block;
  font-size: 12px;
  color: #999;
  margin-left: 5px;
}

/* 笔记区域 */
.notes-section {
  margin-bottom: 20px;
}

.notes-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.notes-input {
  width: 100%;
  min-height: 80px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
}

.char-count {
  display: block;
  text-align: right;
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  gap: 10px;
}

.cancel-btn, .check-in-btn {
  flex: 1;
  height: 44px;
  line-height: 44px;
  border-radius: 22px;
  font-size: 15px;
  border: none;
}

.cancel-btn {
  background: #f5f5f5;
  color: #666;
}

.check-in-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.check-in-btn[disabled] {
  opacity: 0.6;
}

/* 底部操作栏 */
.bottom-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 15px;
  background: #fff;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.05);
  z-index: 99;
}

.action-btn {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  font-size: 15px;
  border: none;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.btn-icon {
  margin-right: 5px;
  font-size: 16px;
}
</style>
