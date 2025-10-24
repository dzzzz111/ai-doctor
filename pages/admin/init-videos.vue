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
          <text class="label">云存储路径</text>
          <input 
            v-model="videoForm.videoUrl" 
            placeholder="cloud://xxx.../rehab-videos/xxx.mp4"
          />
          <text class="hint">从云存储复制文件ID粘贴到这里</text>
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
            <label><radio value="1" :checked="videoForm.difficulty === 1"/>简单</label>
            <label><radio value="2" :checked="videoForm.difficulty === 2"/>中等</label>
            <label><radio value="3" :checked="videoForm.difficulty === 3"/>困难</label>
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
      <button class="btn" @click="loadVideos">刷新列表</button>
      
      <view class="video-list" v-if="videos.length > 0">
        <view class="video-item" v-for="video in videos" :key="video._id">
          <text class="video-title">{{ video.title }}</text>
          <text class="video-info">时长：{{ video.duration }}秒 | {{ getDifficultyText(video.difficulty) }}</text>
          <text class="video-stages">适用：{{ video.targetStage.join('、') }}期</text>
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
        thumbnailUrl: '',
        duration: 300,
        difficulty: 1,
        category: 'strength',
        targetStage: ['I']
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
      if (!this.videoForm.title || !this.videoForm.videoUrl) {
        uni.showToast({
          title: '请填写标题和视频路径',
          icon: 'none'
        });
        return;
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
            thumbnailUrl: '',
            duration: 300,
            difficulty: 1,
            category: 'strength',
            targetStage: ['I']
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
    
    difficultyChange(e) {
      this.videoForm.difficulty = parseInt(e.detail.value);
    },
    
    categoryChange(e) {
      this.videoForm.category = e.detail.value;
    },
    
    stageChange(e) {
      this.videoForm.targetStage = e.detail.value;
    },
    
    getDifficultyText(difficulty) {
      const map = { 1: '简单', 2: '中等', 3: '困难' };
      return map[difficulty] || '';
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
</style>
