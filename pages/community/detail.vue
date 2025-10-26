<template>
  <view class="container">
    <!-- 顶部导航 -->
    <view class="header">
      <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
      <view class="nav-bar">
        <view class="nav-left" @click="goBack">
          <text class="back-icon">←</text>
        </view>
        <text class="nav-title">帖子详情</text>
        <view class="nav-right"></view>
      </view>
    </view>
    
    <!-- 内容区域 -->
    <scroll-view 
      scroll-y 
      class="content" 
      :style="{ 
        paddingTop: (statusBarHeight + 44) + 'px',
        height: 'calc(100vh - ' + (statusBarHeight + 44 + 60) + 'px)'
      }"
      :scroll-top="scrollTop"
    >
      <!-- 帖子内容 -->
      <view class="post-detail" v-if="post">
        <!-- 用户信息 -->
        <view class="user-info">
          <image class="avatar" :src="post.userAvatar" mode="aspectFill"></image>
          <view class="user-meta">
            <text class="username">{{ post.username }}</text>
            <text class="post-time">{{ post.publishTime }}</text>
          </view>
        </view>
        
        <!-- 标题 -->
        <view class="post-title">{{ post.title }}</view>
        
        <!-- 内容 -->
        <view class="post-content">{{ post.content }}</view>
        
        <!-- 图片 -->
        <view class="post-images" v-if="post.images && post.images.length > 0">
          <image 
            v-for="(image, index) in post.images" 
            :key="index"
            class="post-image" 
            :src="image" 
            mode="widthFix"
            @click="previewImage(post.images, index)"
          ></image>
        </view>
        
        <!-- 统计信息 -->
        <view class="post-stats">
          <text class="stat-item">{{ post.views }} 浏览</text>
          <text class="stat-item">{{ post.likes }} 点赞</text>
          <text class="stat-item">{{ post.comments }} 评论</text>
          <text class="stat-item">{{ post.collects }} 收藏</text>
        </view>
        
        <!-- 互动按钮 -->
        <view class="post-actions">
          <view class="action-btn" @click="likePost">
            <text class="action-icon">{{ post.isLiked ? '❤️' : '🤍' }}</text>
            <text class="action-text">{{ post.isLiked ? '已赞' : '点赞' }}</text>
          </view>
          <view class="action-btn" @click="collectPost">
            <text class="action-icon">{{ post.isCollected ? '⭐' : '☆' }}</text>
            <text class="action-text">{{ post.isCollected ? '已收藏' : '收藏' }}</text>
          </view>
          <view class="action-btn" @click="sharePost">
            <text class="action-icon">📤</text>
            <text class="action-text">分享</text>
          </view>
        </view>
      </view>
      
      <!-- 评论区域 -->
      <view class="comments-section">
        <view class="section-title">全部评论 ({{ post ? post.comments : 0 }})</view>
        
        <!-- 评论列表 -->
        <view class="comment-list" v-if="comments.length > 0">
          <view class="comment-item" v-for="comment in comments" :key="comment.id">
            <image class="comment-avatar" :src="comment.userAvatar" mode="aspectFill"></image>
            <view class="comment-content">
              <view class="comment-user">{{ comment.username }}</view>
              <view class="comment-text">
                <text v-if="comment.replyToUser" class="reply-to">回复 @{{ comment.replyToUser }}：</text>
                {{ comment.content }}
              </view>
              <view class="comment-meta">
                <text class="comment-time">{{ comment.publishTime }}</text>
                <view class="comment-actions">
                  <text class="comment-action" @click="replyComment(comment)">回复</text>
                </view>
              </view>
            </view>
          </view>
        </view>
        
        <!-- 暂无评论 -->
        <view class="no-comments" v-else>
          <text class="no-comments-text">暂无评论，快来抢沙发吧~</text>
        </view>
        
        <!-- 加载更多 -->
        <view class="load-more" v-if="hasMoreComments" @click="loadMoreComments">
          <text class="load-more-text">加载更多评论</text>
        </view>
      </view>
    </scroll-view>
    
    <!-- 底部评论输入框 -->
    <view class="comment-input-bar">
      <input 
        class="comment-input" 
        v-model="commentContent"
        :placeholder="replyTo ? `回复 @${replyTo.username}` : '说说你的看法...'"
        @confirm="submitComment"
      />
      <view class="send-btn" @click="submitComment">
        <text>发送</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 0,
      scrollTop: 0,
      postId: '',
      post: null,
      comments: [],
      commentContent: '',
      replyTo: null,  // 回复的评论
      page: 1,
      pageSize: 20,
      hasMoreComments: false
    };
  },
  onLoad(options) {
    const systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight || 20;
    
    if (options.id) {
      this.postId = options.id;
      this.loadPostDetail();
      this.loadComments();
    }
  },
  methods: {
    // 加载帖子详情
    async loadPostDetail() {
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
          name: 'getPostDetail',
          data: {
            postId: this.postId,
            userId: userId
          }
        });
        
        if (result.result.code === 0) {
          this.post = result.result.data;
        }
      } catch (error) {
        console.error('加载帖子详情失败:', error);
        uni.showToast({
          title: '加载失败',
          icon: 'none'
        });
      }
    },
    
    // 加载评论列表
    async loadComments(loadMore = false) {
      if (loadMore) {
        this.page++;
      } else {
        this.page = 1;
        this.comments = [];
      }
      
      try {
        const result = await uniCloud.callFunction({
          name: 'postComments',
          data: {
            action: 'getComments',
            postId: this.postId,
            page: this.page,
            pageSize: this.pageSize
          }
        });
        
        if (result.result.code === 0) {
          const newComments = result.result.data.comments;
          this.comments = loadMore ? [...this.comments, ...newComments] : newComments;
          this.hasMoreComments = result.result.data.hasMore;
        }
      } catch (error) {
        console.error('加载评论失败:', error);
      }
    },
    
    // 加载更多评论
    loadMoreComments() {
      this.loadComments(true);
    },
    
    // 发表评论
    async submitComment() {
      if (!this.commentContent.trim()) {
        uni.showToast({
          title: '请输入评论内容',
          icon: 'none'
        });
        return;
      }
      
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
          name: 'postComments',
          data: {
            action: 'addComment',
            postId: this.postId,
            userId: userInfo.userId || userInfo._id,
            username: userInfo.name || userInfo.userName || '匿名用户',
            userAvatar: userInfo.avatar || userInfo.avatarUrl || '',
            content: this.commentContent.trim(),
            replyTo: this.replyTo ? this.replyTo.id : null,
            replyToUser: this.replyTo ? this.replyTo.username : null
          }
        });
        
        if (result.result.code === 0) {
          uni.showToast({
            title: '评论成功',
            icon: 'success'
          });
          
          // 清空输入框
          this.commentContent = '';
          this.replyTo = null;
          
          // 重新加载评论和帖子详情
          this.loadComments();
          this.loadPostDetail();
        }
      } catch (error) {
        console.error('评论失败:', error);
        uni.showToast({
          title: '评论失败',
          icon: 'none'
        });
      }
    },
    
    // 回复评论
    replyComment(comment) {
      this.replyTo = comment;
    },
    
    // 点赞
    async likePost() {
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
            postId: this.postId,
            userId: userInfo.userId || userInfo._id
          }
        });
        
        if (result.result.code === 0) {
          this.post.isLiked = result.result.data.isLiked;
          this.post.likes += this.post.isLiked ? 1 : -1;
        }
      } catch (error) {
        console.error('点赞失败:', error);
      }
    },
    
    // 收藏
    async collectPost() {
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
            postId: this.postId,
            userId: userInfo.userId || userInfo._id
          }
        });
        
        if (result.result.code === 0) {
          this.post.isCollected = result.result.data.isCollected;
          this.post.collects += this.post.isCollected ? 1 : -1;
        }
      } catch (error) {
        console.error('收藏失败:', error);
      }
    },
    
    // 分享
    sharePost() {
      uni.showToast({
        title: '分享功能开发中',
        icon: 'none'
      });
    },
    
    // 预览图片
    previewImage(images, index) {
      uni.previewImage({
        urls: images,
        current: index
      });
    },
    
    goBack() {
      uni.navigateBack();
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: #f5f7fa;
  padding-bottom: 60px;
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
  padding: 0 15px;
}

.nav-left, .nav-right {
  width: 60px;
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

/* 内容区域 */
.content {
  /* padding-top 和 height 通过内联样式动态设置 */
}

/* 帖子详情 */
.post-detail {
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 15px;
  font-weight: 600;
  color: #333;
  margin-bottom: 3px;
}

.post-time {
  font-size: 12px;
  color: #999;
}

.post-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  line-height: 1.5;
  margin-bottom: 10px;
}

.post-content {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
}

.post-images {
  margin-bottom: 15px;
}

.post-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.post-stats {
  padding: 10px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 15px;
  display: flex;
  gap: 15px;
}

.stat-item {
  font-size: 13px;
  color: #999;
}

.post-actions {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.action-icon {
  font-size: 24px;
}

.action-text {
  font-size: 12px;
  color: #666;
}

/* 评论区域 */
.comments-section {
  background: #fff;
  padding: 15px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.comment-list {
  margin-bottom: 15px;
}

.comment-item {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #f5f7fa;
}

.comment-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0;
}

.comment-content {
  flex: 1;
}

.comment-user {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.comment-text {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 8px;
}

.reply-to {
  color: #3a7bd5;
}

.comment-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-time {
  font-size: 12px;
  color: #999;
}

.comment-action {
  font-size: 13px;
  color: #666;
  padding: 0 10px;
}

.no-comments {
  padding: 40px 0;
  text-align: center;
}

.no-comments-text {
  font-size: 14px;
  color: #999;
}

.load-more {
  text-align: center;
  padding: 10px 0;
}

.load-more-text {
  font-size: 14px;
  color: #3a7bd5;
}

/* 底部评论输入 */
.comment-input-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 10px 15px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.comment-input {
  flex: 1;
  height: 36px;
  background: #f5f7fa;
  border-radius: 18px;
  padding: 0 15px;
  font-size: 14px;
}

.send-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  padding: 8px 20px;
  border-radius: 18px;
  font-size: 14px;
}
</style>
