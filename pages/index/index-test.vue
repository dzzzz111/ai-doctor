<template>
  <view class="container">
    <view class="header">
      <text class="title">医疗助手</text>
      <text class="subtitle">测试页面</text>
    </view>
    
    <view class="content">
      <text>如果你能看到这个页面，说明基础框架正常</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      message: '测试'
    };
  },
  onLoad() {
    console.log('首页加载成功');
  }
}
</script>

<style>
.container {
  padding: 20rpx;
  background: #f5f7fa;
  min-height: 100vh;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 60rpx 30rpx;
  color: #fff;
  text-align: center;
  border-radius: 20rpx;
  margin-bottom: 30rpx;
}

.title {
  font-size: 48rpx;
  font-weight: bold;
  display: block;
  margin-bottom: 10rpx;
}

.subtitle {
  font-size: 28rpx;
  opacity: 0.9;
  display: block;
}

.content {
  background: #fff;
  padding: 40rpx;
  border-radius: 20rpx;
  text-align: center;
}
</style>
