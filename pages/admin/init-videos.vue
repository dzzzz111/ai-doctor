<template>
  <view class="container">
    <view class="header">
      <text class="title">视频管理</text>
    </view>
    
    <!-- 初始化按钮 -->
    <view class="section">
      <view class="section-title">快速初始化</view>
      <button class="btn primary" @click="initVideos">初始化示例视频数据</button>
      <text class="hint">将创建3个示例康复训练视频记录</text>
    </view>
    
    <!-- 添加单个视频 -->
    <view class="section">
      <view class="section-title">添加抖音视频</view>
      <text class="hint-info">💡 支持直接使用抖音视频链接或上传到云存储</text>
      
      <view class="form">
        <view class="form-item">
          <text class="label">视频标题</text>
          <input 
            v-model="videoForm.title" 
            placeholder="例如：膝关节康复训练 - 基础篇"
          />
        </view>
        
        <view class="form-item">
          <text class="label">视频描述</text>
          <textarea 
            v-model="videoForm.description" 
            placeholder="简要描述视频内容"
            maxlength="200"
          ></textarea>
        </view>
        
        <view class="form-item">
          <text class="label">视频来源</text>
          <radio-group @change="sourceTypeChange">
            <label><radio value="cloud" :checked="videoForm.sourceType === 'cloud'"/>云存储</label>
            <label><radio value="douyin" :checked="videoForm.sourceType === 'douyin'"/>抖音链接</label>
            <label><radio value="url" :checked="videoForm.sourceType === 'url'"/>其他URL</label>
          </radio-group>
        </view>
        
        <view class="form-item" v-if="videoForm.sourceType === 'cloud'">
          <text class="label">云存储路径</text>
          <input 
            v-model="videoForm.videoUrl" 
            placeholder="cloud://xxx.../rehab-videos/xxx.mp4"
          />
          <text class="hint">从云存储复制文件ID粘贴到这里</text>
        </view>
        
        <view class="form-item" v-if="videoForm.sourceType === 'douyin'">
          <text class="label">抖音视频链接</text>
          <input 
            v-model="videoForm.douyinUrl" 
            placeholder="粘贴抖音分享链接"
          />
          <text class="hint">打开抖音→分享→复制链接，粘贴到这里</text>
          <text class="hint warning">⚠️ 注意：需要确保视频可公开访问</text>
        </view>
        
        <view class="form-item" v-if="videoForm.sourceType === 'url'">
          <text class="label">视频URL</text>
          <input 
            v-model="videoForm.videoUrl" 
            placeholder="https://example.com/video.mp4"
          />
          <text class="hint">输入完整的视频URL地址</text>
        </view>
        
        <view class="form-item">
          <text class="label">缩略图路径（可选）</text>
          <input 
            v-model="videoForm.thumbnailUrl" 
            placeholder="cloud://xxx.../thumbnails/xxx.jpg"
          />
        </view>
        
        <view class="form-item">
          <text class="label">视频时长（秒）</text>
          <input 
            v-model.number="videoForm.duration" 
            type="number"
            placeholder="例如：300"
          />
        </view>
        
        <view class="form-item">
          <text class="label">难度等级</text>
          <radio-group @change="difficultyChange">
            <label><radio value="easy" :checked="videoForm.difficulty === 'easy'"/>简单</label>
            <label><radio value="medium" :checked="videoForm.difficulty === 'medium'"/>中等</label>
            <label><radio value="hard" :checked="videoForm.difficulty === 'hard'"/>困难</label>
          </radio-group>
        </view>
        
        <view class="form-item">
          <text class="label">训练类别</text>
          <radio-group @change="categoryChange">
            <label><radio value="strength" :checked="videoForm.category === 'strength'"/>力量训练</label>
            <label><radio value="flexibility" :checked="videoForm.category === 'flexibility'"/>柔韧性</label>
            <label><radio value="balance" :checked="videoForm.category === 'balance'"/>平衡训练</label>
          </radio-group>
        </view>
        
        <view class="form-item">
          <text class="label">适用分期</text>
          <checkbox-group @change="stageChange">
            <label><checkbox value="I"/>I期</label>
            <label><checkbox value="II"/>II期</label>
            <label><checkbox value="III"/>III期</label>
            <label><checkbox value="IV"/>IV期</label>
          </checkbox-group>
        </view>
        
        <button class="btn success" @click="addVideo">添加视频</button>
      </view>
    </view>
    
    <!-- 视频列表 -->
    <view class="section">
      <view class="section-title">已添加的视频</view>
      <view class="button-group">
        <button class="btn" @click="loadVideos">刷新列表</button>
        <button class="btn danger" @click="clearTestVideos">清空测试视频</button>
      </view>
      
      <view class="video-list" v-if="videos.length > 0">
        <view class="video-item" v-for="video in videos" :key="video._id">
          <view class="video-header">
            <text class="video-title">{{ video.title }}</text>
            <text class="video-url-type" v-if="isTestVideo(video.videoUrl)">🧪 测试</text>
          </view>
          <text class="video-info">时长：{{ video.duration }}秒 | {{ getDifficultyText(video.difficulty) }}</text>
          <text class="video-stages">适用：{{ video.targetStage.join('、') }}期</text>
          <text class="video-url">链接：{{ video.videoUrl }}</text>
        </view>
      </view>
      
      <view class="empty" v-else>
        <text>暂无视频数据</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      videoForm: {
        title: '',
        description: '',
        videoUrl: '',
        douyinUrl: '',
        thumbnailUrl: '',
        duration: 300,
        difficulty: 'easy',
        category: 'flexibility',
        targetStage: ['I'],
        sourceType: 'douyin',
        precautions: []
      },
      videos: []
    };
  },
  onLoad() {
    this.loadVideos();
  },
  methods: {
    async initVideos() {
      uni.showLoading({ title: '初始化中...' });
      
      try {
        const res = await uniCloud.callFunction({
          name: 'initRehabVideos',
          data: {
            action: 'init'
          }
        });
        
        uni.hideLoading();
        
        if (res.result.code === 0) {
          uni.showToast({
            title: '初始化成功',
            icon: 'success'
          });
          this.loadVideos();
        } else {
          uni.showToast({
            title: res.result.message,
            icon: 'none'
          });
        }
      } catch (error) {
        uni.hideLoading();
        console.error('初始化失败:', error);
        uni.showToast({
          title: '初始化失败',
          icon: 'none'
        });
      }
    },
    
    async addVideo() {
      // 验证必填字段
      if (!this.videoForm.title) {
        uni.showToast({
          title: '请填写视频标题',
          icon: 'none'
        });
        return;
      }
      
      // 根据来源类型验证URL
      if (this.videoForm.sourceType === 'douyin' && !this.videoForm.douyinUrl) {
        uni.showToast({
          title: '请填写抖音视频链接',
          icon: 'none'
        });
        return;
      }
      
      if ((this.videoForm.sourceType === 'cloud' || this.videoForm.sourceType === 'url') && !this.videoForm.videoUrl) {
        uni.showToast({
          title: '请填写视频路径',
          icon: 'none'
        });
        return;
      }
      
      // 如果是抖音链接，将其赋值给videoUrl字段
      if (this.videoForm.sourceType === 'douyin') {
        this.videoForm.videoUrl = this.videoForm.douyinUrl;
      }
      
      uni.showLoading({ title: '添加中...' });
      
      try {
        const res = await uniCloud.callFunction({
          name: 'initRehabVideos',
          data: {
            action: 'add',
            videoData: this.videoForm
          }
        });
        
        uni.hideLoading();
        
        if (res.result.code === 0) {
          uni.showToast({
            title: '添加成功',
            icon: 'success'
          });
          
          // 重置表单
          this.videoForm = {
            title: '',
            description: '',
            videoUrl: '',
            douyinUrl: '',
            thumbnailUrl: '',
            duration: 300,
            difficulty: 'easy',
            category: 'flexibility',
            targetStage: ['I'],
            sourceType: 'douyin',
            precautions: []
          };
          
          this.loadVideos();
        } else {
          uni.showToast({
            title: res.result.message,
            icon: 'none'
          });
        }
      } catch (error) {
        uni.hideLoading();
        console.error('添加失败:', error);
        uni.showToast({
          title: '添加失败',
          icon: 'none'
        });
      }
    },
    
    async loadVideos() {
      try {
        const res = await uniCloud.callFunction({
          name: 'initRehabVideos',
          data: {
            action: 'list',
            page: 1,
            pageSize: 50
          }
        });
        
        if (res.result.code === 0) {
          this.videos = res.result.data.videos;
        }
      } catch (error) {
        console.error('加载失败:', error);
      }
    },
    
    sourceTypeChange(e) {
      this.videoForm.sourceType = e.detail.value;
      // 切换来源类型时清空URL
      this.videoForm.videoUrl = '';
      this.videoForm.douyinUrl = '';
    },
    
    difficultyChange(e) {
      this.videoForm.difficulty = e.detail.value;
    },
    
    categoryChange(e) {
      this.videoForm.category = e.detail.value;
    },
    
    stageChange(e) {
      this.videoForm.targetStage = e.detail.value;
    },
    
    getDifficultyText(difficulty) {
      const map = { 
        'easy': '简单', 
        'medium': '中等', 
        'hard': '困难',
        1: '简单', 
        2: '中等', 
        3: '困难'
      };
      return map[difficulty] || '简单';
    },
    
    isTestVideo(url) {
      const testUrls = [
        'https://media.w3.org/2010/05/sintel/trailer.mp4',
        'https://media.w3.org/2010/05/bunny/trailer.mp4',
        'https://media.w3.org/2010/05/video/movie_300.mp4'
      ];
      return testUrls.includes(url);
    },
    
    async clearTestVideos() {
      uni.showModal({
        title: '确认清空',
        content: '将删除所有测试视频数据，此操作不可恢复，确定继续？',
        success: async (res) => {
          if (res.confirm) {
            uni.showLoading({ title: '清空中...' });
            
            try {
              const result = await uniCloud.callFunction({
                name: 'initRehabVideos',
                data: {
                  action: 'clearTestVideos'
                }
              });
              
              uni.hideLoading();
              
              if (result.result.code === 0) {
                uni.showToast({
                  title: '清空成功',
                  icon: 'success'
                });
                this.loadVideos();
              } else {
                uni.showToast({
                  title: result.result.message,
                  icon: 'none'
                });
              }
            } catch (error) {
              uni.hideLoading();
              console.error('清空失败:', error);
              uni.showToast({
                title: '清空失败',
                icon: 'none'
              });
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  background: #f5f7fa;
  min-height: 100vh;
}

.header {
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.section {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.btn {
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  border-radius: 8px;
  font-size: 15px;
  border: none;
}

.btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.btn.success {
  background: #10b981;
  color: #fff;
  margin-top: 20px;
}

.hint {
  display: block;
  font-size: 12px;
  color: #999;
  margin-top: 8px;
}

.hint.warning {
  color: #f59e0b;
  font-weight: 500;
}

.hint-info {
  display: block;
  font-size: 13px;
  color: #667eea;
  margin-bottom: 15px;
  padding: 10px;
  background: #f0f4ff;
  border-radius: 6px;
  border-left: 3px solid #667eea;
}

.form {
  margin-top: 15px;
}

.form-item {
  margin-bottom: 20px;
}

.label {
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
}

textarea {
  min-height: 80px;
}

radio-group label,
checkbox-group label {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 10px;
  font-size: 14px;
}

.video-list {
  margin-top: 15px;
}

.video-item {
  padding: 15px;
  background: #f9fafb;
  border-radius: 8px;
  margin-bottom: 10px;
}

.video-title {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.video-info,
.video-stages {
  display: block;
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.empty {
  text-align: center;
  padding: 40px 20px;
  color: #999;
  font-size: 14px;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.button-group .btn {
  flex: 1;
  margin-bottom: 0;
}

.btn.danger {
  background: #ef4444;
  color: #fff;
}

.video-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.video-url-type {
  font-size: 12px;
  padding: 2px 8px;
  background: #fef3c7;
  color: #f59e0b;
  border-radius: 4px;
}

.video-url {
  display: block;
  font-size: 11px;
  color: #6b7280;
  margin-top: 4px;
  word-break: break-all;
}
</style>
