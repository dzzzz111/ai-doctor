<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
    // 检查微信环境
    if (typeof wx !== 'undefined') {
      console.log('微信小程序环境已就绪')
    }
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style>
/* 全局样式 */
page {
  background-color: #f5f7fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
}
</style>
