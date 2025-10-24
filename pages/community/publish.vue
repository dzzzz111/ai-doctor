<template>
  <view class="container">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
      <view class="nav-bar" :style="{ paddingRight: navBarPaddingRight + 'px' }">
        <view class="nav-left" @click="goBack">
          <text class="back-icon">←</text>
        </view>
        <text class="nav-title">发布帖子</text>
        <view class="nav-right" @click="publishPost">
          <text class="publish-btn">发布</text>
        </view>
      </view>
    </view>
    
    <!-- 内容区域 -->
    <view class="content" :style="{ paddingTop: (44 + statusBarHeight) + 'px' }">
      <!-- 标题输入 -->
      <view class="input-section">
        <textarea 
          class="title-input" 
          v-model="title" 
          placeholder="请输入标题（必填，不超过100字）"
          maxlength="100"
          :auto-height="true"
        ></textarea>
        <text class="char-count">{{ title.length }}/100</text>
      </view>
      
      <!-- 内容输入 -->
      <view class="input-section">
        <textarea 
          class="content-input" 
          v-model="content" 
          placeholder="分享你的经验和心得..."
          maxlength="5000"
          :auto-height="true"
        ></textarea>
        <text class="char-count">{{ content.length }}/5000</text>
      </view>
      
      <!-- 图片上传 -->
      <view class="image-section">
        <view class="section-title">添加图片（最多9张）</view>
        <view class="image-grid">
          <view 
            class="image-item" 
            v-for="(image, index) in images" 
            :key="index"
          >
            <image :src="image" mode="aspectFill"></image>
            <view class="delete-btn" @click="deleteImage(index)">
              <text class="delete-icon">×</text>
            </view>
          </view>
          <view class="upload-btn" v-if="images.length < 9" @click="chooseImage">
            <text class="upload-icon">📷</text>
            <text class="upload-text">添加图片</text>
          </view>
        </view>
      </view>
      
      <!-- 分类选择 -->
      <view class="category-section">
        <view class="section-title">选择分类</view>
        <view class="category-list">
          <view 
            class="category-item" 
            v-for="cat in categories" 
            :key="cat.id"
            :class="{ active: category === cat.id }"
            @click="selectCategory(cat.id)"
          >
            {{ cat.name }}
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
      statusBarHeight: 0,
      navBarPaddingRight: 95,  // 默认值
      title: '',
      content: '',
      category: 'disease',  // 默认分类
      images: [],
      categories: [
        { id: 'disease', name: '疾病交流' },
        { id: 'treatment', name: '治疗经验' },
        { id: 'medicine', name: '用药咨询' },
        { id: 'rehabilitation', name: '康复分享' },
        { id: 'mental', name: '心理健康' },
        { id: 'nutrition', name: '营养饮食' },
        { id: 'exercise', name: '运动健身' }
      ]
    };
  },
  onLoad() {
    const systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight || 20;
    
    // 计算导航栏右侧padding，避免被胶囊按钮遮挡
    // #ifdef MP-WEIXIN
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    const screenWidth = systemInfo.screenWidth;
    // 胶囊按钮右边到屏幕右边的距离
    const gap = screenWidth - menuButtonInfo.right;
    // 导航栏右侧padding = 胶囊按钮宽度 + 两倍间距
    this.navBarPaddingRight = menuButtonInfo.width + gap * 2 + 10;
    // #endif
  },
  methods: {
    // 选择图片
    chooseImage() {
      const remainCount = 9 - this.images.length;
      
      uni.chooseImage({
        count: remainCount,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.uploadImages(res.tempFilePaths);
        }
      });
    },
    
    // 上传图片到云存储
    async uploadImages(tempFiles) {
      uni.showLoading({ title: '上传中...' });
      
      try {
        for (let filePath of tempFiles) {
          const cloudPath = `community/${Date.now()}_${Math.random().toString(36).substr(2)}.jpg`;
          
          const result = await uniCloud.uploadFile({
            filePath: filePath,
            cloudPath: cloudPath
          });
          
          this.images.push(result.fileID);
        }
        
        uni.hideLoading();
        uni.showToast({
          title: '上传成功',
          icon: 'success'
        });
      } catch (error) {
        uni.hideLoading();
        console.error('上传失败:', error);
        uni.showToast({
          title: '上传失败',
          icon: 'none'
        });
      }
    },
    
    // 删除图片
    deleteImage(index) {
      this.images.splice(index, 1);
    },
    
    // 选择分类
    selectCategory(id) {
      this.category = id;
    },
    
    // 发布帖子
    async publishPost() {
      // 验证输入
      if (!this.title.trim()) {
        uni.showToast({
          title: '请输入标题',
          icon: 'none'
        });
        return;
      }
      
      if (!this.content.trim()) {
        uni.showToast({
          title: '请输入内容',
          icon: 'none'
        });
        return;
      }
      
      // 获取用户信息
      const userInfoStr = uni.getStorageSync('userInfo');
      if (!userInfoStr) {
        uni.showToast({
          title: '请先登录',
          icon: 'none'
        });
        setTimeout(() => {
          uni.navigateTo({
            url: '/pagesB/mine/login'
          });
        }, 1500);
        return;
      }
      
      let userInfo;
      try {
        userInfo = typeof userInfoStr === 'string' ? JSON.parse(userInfoStr) : userInfoStr;
      } catch (e) {
        console.error('解析用户信息失败:', e);
        uni.showToast({
          title: '用户信息错误',
          icon: 'none'
        });
        return;
      }
      
      uni.showLoading({ title: '发布中...' });
      
      try {
        const result = await uniCloud.callFunction({
          name: 'publishPost',
          data: {
            userId: userInfo.userId || userInfo._id,
            username: userInfo.name || userInfo.userName || '匿名用户',
            userAvatar: userInfo.avatar || userInfo.avatarUrl || '',
            title: this.title.trim(),
            content: this.content.trim(),
            category: this.category,
            images: this.images
          }
        });
        
        uni.hideLoading();
        
        if (result.result.code === 0) {
          uni.showToast({
            title: '发布成功',
            icon: 'success'
          });
          
          // 延迟返回
          setTimeout(() => {
            uni.navigateBack();
          }, 1500);
        } else {
          uni.showToast({
            title: result.result.message || '发布失败',
            icon: 'none'
          });
        }
      } catch (error) {
        uni.hideLoading();
        console.error('发布失败:', error);
        uni.showToast({
          title: '发布失败',
          icon: 'none'
        });
      }
    },
    
    goBack() {
      if (this.title || this.content || this.images.length > 0) {
        uni.showModal({
          title: '提示',
          content: '确定放弃编辑吗？',
          success: (res) => {
            if (res.confirm) {
              uni.navigateBack();
            }
          }
        });
      } else {
        uni.navigateBack();
      }
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: #f5f7fa;
}

/* 导航栏 */
.header {
  background: linear-gradient(to right, #3a7bd5, #00d2ff);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.nav-bar {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  /* padding-right 通过内联样式动态设置，避免被胶囊按钮遮挡 */
}

.nav-left {
  width: 60px;
}

.nav-right {
  min-width: 70px;
  display: flex;
  justify-content: flex-end;
}

.back-icon {
  color: #fff;
  font-size: 24px;
}

.nav-title {
  flex: 1;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
}

.publish-btn {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 内容区域 */
.content {
  padding-bottom: 20px;
}

.input-section {
  background: #fff;
  margin-bottom: 10px;
  padding: 15px;
  position: relative;
}

.title-input {
  width: 100%;
  min-height: 50px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
}

.content-input {
  width: 100%;
  min-height: 200px;
  font-size: 15px;
  line-height: 1.6;
}

.char-count {
  position: absolute;
  right: 15px;
  bottom: 10px;
  font-size: 12px;
  color: #999;
}

/* 图片区域 */
.image-section {
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-item {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.image-item image {
  width: 100%;
  height: 100%;
}

.delete-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-icon {
  color: #fff;
  font-size: 18px;
  line-height: 1;
}

.upload-btn {
  width: 100px;
  height: 100px;
  border: 1px dashed #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
}

.upload-icon {
  font-size: 32px;
  margin-bottom: 5px;
}

.upload-text {
  font-size: 12px;
  color: #999;
}

/* 分类选择 */
.category-section {
  background: #fff;
  padding: 15px;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-item {
  padding: 8px 16px;
  background: #f5f7fa;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
  transition: all 0.3s;
}

.category-item.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
}
</style>
