<template>
  <view class="container">
    <!-- 顶部标题 -->
    <view class="header">
      <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
      <view class="nav-bar">
        <text class="header-title">健康社区</text>
        <view class="header-actions">
          <view class="action-btn" @click="showSearch">
            <text class="iconfont">🔍</text>
          </view>
          <view class="action-btn" @click="showPublish">
            <text class="iconfont">✏️</text>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 分类标签 -->
    <view class="category-tabs" :style="{ top: (statusBarHeight + 44) + 'px' }">
      <scroll-view scroll-x class="tabs-scroll" show-scrollbar="false">
        <view class="tab-item" 
          v-for="(category, index) in categories" 
          :key="index"
          :class="{ active: currentCategory === category.id }"
          @click="switchCategory(category.id)"
        >
          {{ category.name }}
        </view>
      </scroll-view>
    </view>
    
    <!-- 帖子列表 -->
    <scroll-view 
      scroll-y 
      class="post-list" 
      :style="{ 
        marginTop: (statusBarHeight + 44 + 70) + 'px',
        height: 'calc(100vh - ' + (statusBarHeight + 44 + 70) + 'px)'
      }"
      @scrolltolower="loadMorePosts"
    >
      <view class="post-item" v-for="post in filteredPosts" :key="post.id" @click="viewPostDetail(post)">
        <!-- 用户信息 -->
        <view class="user-info">
          <image class="avatar" :src="post.userAvatar" mode="aspectFill"></image>
          <view class="user-meta">
            <text class="username">{{ post.username }}</text>
            <text class="post-time">{{ post.publishTime }}</text>
          </view>
          <view class="post-category" :style="{ backgroundColor: getCategoryColor(post.category) }">
            {{ post.categoryName }}
          </view>
        </view>
        
        <!-- 帖子内容 -->
        <view class="post-content">
          <text class="post-title">{{ post.title }}</text>
          <text class="post-text">{{ post.content }}</text>
        </view>
        
        <!-- 帖子图片 -->
        <view class="post-images" v-if="post.images && post.images.length > 0">
          <image 
            v-for="(image, index) in post.images.slice(0, 3)" 
            :key="index"
            class="post-image" 
            :src="image" 
            mode="aspectFill"
            @click.stop="previewImage(post.images, index)"
          ></image>
          <view class="more-images" v-if="post.images.length > 3" @click.stop="previewImage(post.images, 0)">
            <text class="more-text">+{{ post.images.length - 3 }}</text>
          </view>
        </view>
        
        <!-- 互动区域 -->
        <view class="post-actions">
          <view class="action-item" @click.stop="likePost(post)">
            <text class="action-icon">{{ post.isLiked ? '❤️' : '🤍' }}</text>
            <text class="action-count">{{ post.likes }}</text>
          </view>
          <view class="action-item" @click.stop="commentPost(post)">
            <text class="action-icon">💬</text>
            <text class="action-count">{{ post.comments }}</text>
          </view>
          <view class="action-item" @click.stop="sharePost(post)">
            <text class="action-icon">📤</text>
            <text class="action-count">{{ post.shares }}</text>
          </view>
          <view class="action-item" @click.stop="collectPost(post)">
            <text class="action-icon">{{ post.isCollected ? '⭐' : '☆' }}</text>
            <text class="action-count">{{ post.collects }}</text>
          </view>
        </view>
      </view>
      
      <!-- 加载更多 -->
      <view class="loading-more" v-if="isLoading">
        <text class="loading-text">加载中...</text>
      </view>
      
      <!-- 没有更多数据 -->
      <view class="no-more" v-if="!hasMore && filteredPosts.length > 0">
        <text class="no-more-text">没有更多帖子了</text>
      </view>
    </scroll-view>
    
    <!-- 发布按钮 -->
    <view class="publish-btn" @click="showPublish">
      <text class="publish-icon">✏️</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 20,
      currentCategory: 'all',
      isLoading: false,
      hasMore: true,
      page: 1,
      pageSize: 10,
      categories: [
        { id: 'all', name: '全部' },
        { id: 'disease', name: '疾病交流' },
        { id: 'treatment', name: '治疗经验' },
        { id: 'medicine', name: '用药咨询' },
        { id: 'rehabilitation', name: '康复分享' },
        { id: 'mental', name: '心理健康' },
        { id: 'nutrition', name: '营养饮食' },
        { id: 'exercise', name: '运动健身' }
      ],
      posts: []  // 从云函数加载数据

    };
  },
  computed: {
    filteredPosts() {
      if (this.currentCategory === 'all') {
        return this.posts;
      }
      return this.posts.filter(post => post.category === this.currentCategory);
    }
  },
  onLoad() {
    const systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight || 20;
    
    // 加载帖子列表
    this.loadPosts();
  },
  onShow() {
    // 页面显示时刷新列表
    this.refreshPosts();
  },
  methods: {
    // 加载帖子列表
    async loadPosts(loadMore = false) {
      if (this.isLoading) return;
      
      this.isLoading = true;
      
      if (!loadMore) {
        this.page = 1;
        this.posts = [];
      } else {
        this.page++;
      }
      
      // 获取用户信息
      const userInfoStr = uni.getStorageSync('userInfo');
      let userId = '';
      
      if (userInfoStr) {
        try {
          const userInfo = typeof userInfoStr === 'string' ? JSON.parse(userInfoStr) : userInfoStr;
          userId = userInfo.userId || userInfo._id || '';
        } catch (e) {
          console.error('解析用户信息失败:', e);
        }
      }
      
      try {
        const result = await uniCloud.callFunction({
          name: 'getPosts',
          data: {
            category: this.currentCategory,
            page: this.page,
            pageSize: this.pageSize,
            userId: userId
          }
        });
        
        if (result.result.code === 0) {
          const newPosts = result.result.data.posts;
          this.posts = loadMore ? [...this.posts, ...newPosts] : newPosts;
          this.hasMore = result.result.data.hasMore;
        }
      } catch (error) {
        console.error('加载帖子失败:', error);
        uni.showToast({
          title: '加载失败',
          icon: 'none'
        });
      } finally {
        this.isLoading = false;
      }
    },
    
    // 刷新帖子列表
    refreshPosts() {
      this.loadPosts(false);
    },
    
    // 加载更多
    loadMorePosts() {
      if (this.hasMore && !this.isLoading) {
        this.loadPosts(true);
      }
    },
    
    // 切换分类
    switchCategory(categoryId) {
      this.currentCategory = categoryId;
      this.loadPosts(false);
    },
    
    getCategoryColor(category) {
      const colors = {
        'disease': '#ff6b6b',
        'treatment': '#4ecdc4',
        'medicine': '#45b7d1',
        'rehabilitation': '#96ceb4',
        'mental': '#ffeaa7',
        'nutrition': '#fd79a8',
        'exercise': '#fdcb6e'
      };
      return colors[category] || '#ddd';
    },
    
    // 点赞帖子
    async likePost(post) {
      const userInfoStr = uni.getStorageSync('userInfo');
      if (!userInfoStr) {
        uni.showToast({
          title: '请先登录',
          icon: 'none'
        });
        return;
      }
      
      let userInfo;
      try {
        userInfo = typeof userInfoStr === 'string' ? JSON.parse(userInfoStr) : userInfoStr;
      } catch (e) {
        console.error('解析用户信息失败:', e);
        return;
      }
      
      try {
        const result = await uniCloud.callFunction({
          name: 'postInteraction',
          data: {
            action: 'like',
            postId: post.id,
            userId: userInfo.userId || userInfo._id
          }
        });
        
        if (result.result.code === 0) {
          post.isLiked = result.result.data.isLiked;
          post.likes += post.isLiked ? 1 : -1;
        }
      } catch (error) {
        console.error('点赞失败:', error);
      }
    },
    
    // 收藏帖子
    async collectPost(post) {
      const userInfoStr = uni.getStorageSync('userInfo');
      if (!userInfoStr) {
        uni.showToast({
          title: '请先登录',
          icon: 'none'
        });
        return;
      }
      
      let userInfo;
      try {
        userInfo = typeof userInfoStr === 'string' ? JSON.parse(userInfoStr) : userInfoStr;
      } catch (e) {
        console.error('解析用户信息失败:', e);
        return;
      }
      
      try {
        const result = await uniCloud.callFunction({
          name: 'postInteraction',
          data: {
            action: 'collect',
            postId: post.id,
            userId: userInfo.userId || userInfo._id
          }
        });
        
        if (result.result.code === 0) {
          post.isCollected = result.result.data.isCollected;
          post.collects += post.isCollected ? 1 : -1;
          
          uni.showToast({
            title: post.isCollected ? '收藏成功' : '取消收藏',
            icon: 'success'
          });
        }
      } catch (error) {
        console.error('收藏失败:', error);
      }
    },
    
    // 跳转到评论（详情页）
    commentPost(post) {
      uni.navigateTo({
        url: `/pages/community/detail?id=${post.id}`
      });
    },
    
    sharePost(post) {
      uni.showActionSheet({
        itemList: ['分享给好友', '复制链接', '生成海报'],
        success: (res) => {
          const actions = ['分享给好友', '复制链接', '生成海报'];
          uni.showToast({
            title: `${actions[res.tapIndex]}功能开发中`,
            icon: 'none'
          });
        }
      });
    },
    
    collectPost(post) {
      post.isCollected = !post.isCollected;
      post.collects += post.isCollected ? 1 : -1;
      
      uni.showToast({
        title: post.isCollected ? '收藏成功' : '取消收藏',
        icon: 'success'
      });
    },
    
    // 查看帖子详情
    viewPostDetail(post) {
      uni.navigateTo({
        url: `/pages/community/detail?id=${post.id}`
      });
    },
    
    // 预览图片
    previewImage(images, current) {
      uni.previewImage({
        urls: images,
        current: current
      });
    },
    
    // 搜索功能
    showSearch() {
      uni.showToast({
        title: '搜索功能开发中',
        icon: 'none'
      });
    },
    
    // 跳转到发布页面
    showPublish() {
      // 检查登录状态
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
      
      uni.navigateTo({
        url: '/pages/community/publish'
      });
    }
  }
}
</script>

<style>
.container {
  background-color: #f5f7fa;
  min-height: 100vh;
}

/* 顶部标题 */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4rpx 20rpx rgba(102, 126, 234, 0.3);
}

.status-bar {
  width: 100%;
}

.nav-bar {
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30rpx;
}

.header-title {
  font-size: 38rpx;
  font-weight: bold;
  text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
}

.header-actions {
  display: flex;
  gap: 20rpx;
}

.action-btn {
  width: 70rpx;
  height: 70rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  backdrop-filter: blur(10rpx);
  transition: all 0.3s ease;
}

.action-btn:active {
  transform: scale(0.95);
  background-color: rgba(255, 255, 255, 0.35);
}

.action-btn text {
  font-size: 30rpx;
}

/* 分类标签 */
.category-tabs {
  background: linear-gradient(to bottom, #fff, #f8f9ff);
  padding: 25rpx 0;
  position: fixed;
  /* top 通过内联样式动态设置 */
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.08);
  border-bottom: 1rpx solid rgba(102, 126, 234, 0.1);
}

.tabs-scroll {
  white-space: nowrap;
  padding: 0 30rpx;
}

.tab-item {
  display: inline-block;
  padding: 12rpx 35rpx;
  margin-right: 20rpx;
  border-radius: 35rpx;
  font-size: 26rpx;
  color: #666;
  background: linear-gradient(135deg, #f8f9ff, #e8ecff);
  border: 2rpx solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.tab-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 35rpx;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.tab-item.active {
  color: #fff;
  border-color: rgba(102, 126, 234, 0.3);
  transform: translateY(-2rpx);
  box-shadow: 0 8rpx 25rpx rgba(102, 126, 234, 0.4);
}

.tab-item.active::before {
  opacity: 1;
}

.tab-item:active {
  transform: scale(0.98);
}

/* 帖子列表 */
.post-list {
  /* margin-top 和 height 通过内联样式动态设置 */
  padding: 20rpx;
}

.post-item {
  background: linear-gradient(135deg, #fff, #f8f9ff);
  margin-bottom: 25rpx;
  padding: 35rpx;
  border-radius: 20rpx;
  box-shadow: 0 8rpx 30rpx rgba(0, 0, 0, 0.06);
  border: 1rpx solid rgba(102, 126, 234, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.post-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4rpx;
  background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.post-item:active {
  transform: translateY(2rpx);
  box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.04);
}

.post-item:active::before {
  opacity: 1;
}

/* 用户信息 */
.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 25rpx;
  padding-bottom: 20rpx;
  border-bottom: 1rpx solid rgba(102, 126, 234, 0.1);
}

.avatar {
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
  margin-right: 25rpx;
  border: 3rpx solid #fff;
  box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.avatar:active {
  transform: scale(1.1);
}

.user-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 30rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 6rpx;
  text-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.05);
}

.post-time {
  font-size: 24rpx;
  color: #888;
  background: linear-gradient(135deg, #f8f9ff, #e8ecff);
  padding: 4rpx 12rpx;
  border-radius: 15rpx;
  display: inline-block;
}

.post-category {
  padding: 8rpx 16rpx;
  border-radius: 25rpx;
  font-size: 22rpx;
  color: #fff;
  font-weight: 500;
  box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.15);
  text-shadow: 0 1rpx 2rpx rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.post-category:active {
  transform: scale(0.95);
}

/* 帖子内容 */
.post-content {
  margin-bottom: 25rpx;
}

.post-title {
  font-size: 34rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 15rpx;
  display: block;
  line-height: 1.4;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2rpx 4rpx rgba(102, 126, 234, 0.1);
}

.post-text {
  font-size: 29rpx;
  color: #555;
  line-height: 1.7;
  display: block;
  background: linear-gradient(135deg, #555, #777);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 帖子图片 */
.post-images {
  display: flex;
  gap: 15rpx;
  margin-bottom: 25rpx;
  flex-wrap: wrap;
}

.post-image {
  width: 210rpx;
  height: 210rpx;
  border-radius: 15rpx;
  box-shadow: 0 8rpx 25rpx rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2rpx solid rgba(255, 255, 255, 0.8);
}

.post-image:active {
  transform: scale(1.05);
  box-shadow: 0 12rpx 35rpx rgba(0, 0, 0, 0.25);
}

.more-images {
  width: 210rpx;
  height: 210rpx;
  border-radius: 15rpx;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8rpx 25rpx rgba(102, 126, 234, 0.4);
  border: 2rpx solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.more-images:active {
  transform: scale(1.05);
}

.more-text {
  color: #fff;
  font-size: 32rpx;
  font-weight: bold;
  text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.3);
}

/* 互动区域 */
.post-actions {
  display: flex;
  justify-content: space-around;
  padding-top: 25rpx;
  border-top: 1rpx solid rgba(102, 126, 234, 0.15);
  margin-top: 20rpx;
}

.action-item {
  display: flex;
  align-items: center;
  gap: 12rpx;
  padding: 12rpx 25rpx;
  border-radius: 30rpx;
  background: linear-gradient(135deg, #f8f9ff, #e8ecff);
  border: 1rpx solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 120rpx;
  justify-content: center;
}

.action-item:active {
  transform: translateY(2rpx) scale(0.98);
  background: linear-gradient(135deg, #e8ecff, #d8e2ff);
  box-shadow: 0 4rpx 15rpx rgba(102, 126, 234, 0.2);
}

.action-icon {
  font-size: 30rpx;
  filter: drop-shadow(0 1rpx 2rpx rgba(0, 0, 0, 0.1));
}

.action-count {
  font-size: 26rpx;
  color: #666;
  font-weight: 500;
}

/* 发布按钮 */
.publish-btn {
  position: fixed;
  bottom: 120rpx;
  right: 40rpx;
  width: 110rpx;
  height: 110rpx;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12rpx 40rpx rgba(102, 126, 234, 0.5);
  z-index: 1001;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3rpx solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10rpx);
}

.publish-btn:active {
  transform: translateY(4rpx) scale(0.95);
  box-shadow: 0 6rpx 20rpx rgba(102, 126, 234, 0.4);
}

.publish-icon {
  font-size: 44rpx;
  color: #fff;
  text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6rpx);
  }
}

/* 加载状态 */
.loading-more {
  text-align: center;
  padding: 50rpx;
  background: linear-gradient(135deg, #fff, #f8f9ff);
  border-radius: 20rpx;
  margin: 20rpx;
  box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.05);
}

.loading-text {
  font-size: 26rpx;
  color: #888;
  font-weight: 500;
}

.no-more {
  text-align: center;
  padding: 50rpx;
  background: linear-gradient(135deg, #fff, #f8f9ff);
  border-radius: 20rpx;
  margin: 20rpx;
  box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.05);
}

.no-more-text {
  font-size: 26rpx;
  color: #888;
  font-weight: 500;
}

/* 背景装饰 */
.container::before {
  content: '';
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.03) 0%, transparent 70%);
  z-index: -1;
  animation: rotate 60s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>