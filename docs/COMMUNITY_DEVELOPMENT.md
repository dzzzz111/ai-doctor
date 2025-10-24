# 🏥 健康社区功能开发指南

## 📌 功能需求

### 核心功能
1. **发布帖子** - 用户可以发布图文帖子
2. **浏览帖子** - 查看所有用户发布的帖子列表
3. **帖子详情** - 查看单个帖子的完整内容
4. **评论功能** - 对帖子进行评论和回复
5. **互动功能** - 点赞、收藏、分享

---

## 🗄️ 数据库设计

### 1. community_posts（帖子表）

```json
{
  "_id": "post_id",
  "userId": "发布者ID",
  "username": "发布者昵称",
  "userAvatar": "发布者头像URL",
  "title": "帖子标题",
  "content": "帖子内容",
  "category": "分类ID（disease/treatment/medicine/rehabilitation等）",
  "images": ["图片URL数组"],
  "likes": 0,
  "comments": 0,
  "shares": 0,
  "collects": 0,
  "views": 0,
  "isPublic": true,
  "status": "published",
  "createdAt": Date,
  "updatedAt": Date
}
```

**索引**：
- userId（查询用户的帖子）
- category（分类查询）
- createdAt（按时间排序）

### 2. community_comments（评论表）

```json
{
  "_id": "comment_id",
  "postId": "帖子ID",
  "userId": "评论者ID",
  "username": "评论者昵称",
  "userAvatar": "评论者头像URL",
  "content": "评论内容",
  "replyTo": "回复的评论ID（可选）",
  "replyToUser": "回复的用户名（可选）",
  "likes": 0,
  "createdAt": Date
}
```

**索引**：
- postId（查询帖子的评论）
- userId（查询用户的评论）

### 3. community_likes（点赞表）

```json
{
  "_id": "like_id",
  "postId": "帖子ID",
  "userId": "点赞用户ID",
  "createdAt": Date
}
```

**索引**：
- postId + userId（联合唯一索引，防止重复点赞）

### 4. community_collects（收藏表）

```json
{
  "_id": "collect_id",
  "postId": "帖子ID",
  "userId": "收藏用户ID",
  "createdAt": Date
}
```

**索引**：
- postId + userId（联合唯一索引）
- userId（查询用户收藏）

---

## ☁️ 云函数开发

### 1. publishPost（发布帖子）

**功能**：发布新帖子  
**参数**：
```javascript
{
  userId: string,
  username: string,
  userAvatar: string,
  title: string,
  content: string,
  category: string,
  images: array
}
```

**返回**：
```javascript
{
  code: 0,
  message: "发布成功",
  data: { postId: "xxx" }
}
```

### 2. getPosts（获取帖子列表）

**功能**：分页获取帖子列表  
**参数**：
```javascript
{
  category: string,  // 'all' 或具体分类
  page: number,
  pageSize: number,
  userId: string     // 当前用户ID（用于判断点赞收藏状态）
}
```

**返回**：
```javascript
{
  code: 0,
  data: {
    posts: [...],
    hasMore: boolean
  }
}
```

### 3. getPostDetail（获取帖子详情）

**功能**：获取单个帖子的详细信息  
**参数**：
```javascript
{
  postId: string,
  userId: string  // 当前用户ID
}
```

### 4. getComments（获取评论列表）

**功能**：获取帖子的评论  
**参数**：
```javascript
{
  postId: string,
  page: number,
  pageSize: number
}
```

### 5. addComment（发表评论）

**功能**：对帖子发表评论  
**参数**：
```javascript
{
  postId: string,
  userId: string,
  username: string,
  userAvatar: string,
  content: string,
  replyTo: string,      // 可选
  replyToUser: string   // 可选
}
```

### 6. likePost（点赞/取消点赞）

**功能**：切换点赞状态  
**参数**：
```javascript
{
  postId: string,
  userId: string
}
```

### 7. collectPost（收藏/取消收藏）

**功能**：切换收藏状态  
**参数**：
```javascript
{
  postId: string,
  userId: string
}
```

---

## 📱 前端页面开发

### 1. 发布页面（新建）

**路径**：`/pages/community/publish.vue`

**功能**：
- 输入标题和内容
- 选择分类
- 上传图片（最多9张）
- 发布按钮

**组件**：
- 文本输入框
- 富文本编辑器（可选）
- 图片上传组件
- 分类选择器

### 2. 详情页面（新建）

**路径**：`/pages/community/detail.vue`

**功能**：
- 显示帖子完整内容
- 评论列表
- 发表评论
- 点赞、收藏、分享

**组件**：
- 帖子内容展示
- 评论列表组件
- 评论输入框
- 互动按钮组

### 3. 列表页面（修改现有）

**路径**：`/pages/community/index.vue`

**修改点**：
- 从云函数获取真实数据
- 实现下拉刷新
- 实现上拉加载更多
- 实现分类筛选

---

## 🔧 开发步骤

### Step 1: 创建数据库表
1. 在 uniCloud 控制台创建表
2. 设置表结构和索引

### Step 2: 开发云函数
1. publishPost
2. getPosts
3. getPostDetail
4. getComments
5. addComment
6. likePost
7. collectPost

### Step 3: 开发前端页面
1. 发布页面
2. 详情页面
3. 修改列表页面

### Step 4: 测试
1. 发布帖子测试
2. 浏览帖子测试
3. 评论功能测试
4. 互动功能测试

---

## 🎯 实现顺序（推荐）

### 第一阶段：基础功能
1. ✅ 数据库表创建
2. ✅ publishPost 云函数
3. ✅ 发布页面
4. ✅ getPosts 云函数
5. ✅ 修改列表页面

### 第二阶段：详情与评论
6. ✅ getPostDetail 云函数
7. ✅ 详情页面
8. ✅ getComments 云函数
9. ✅ addComment 云函数
10. ✅ 评论功能

### 第三阶段：互动功能
11. ✅ likePost 云函数
12. ✅ collectPost 云函数
13. ✅ 点赞收藏功能

---

## 📸 图片上传方案

### 方案1：uniCloud云存储（推荐）

```javascript
// 上传图片到云存储
uni.chooseImage({
  count: 9,
  success: async (res) => {
    for (let file of res.tempFilePaths) {
      const result = await uniCloud.uploadFile({
        filePath: file,
        cloudPath: `community/${Date.now()}_${Math.random()}.jpg`
      });
      imageUrls.push(result.fileID);
    }
  }
});
```

### 方案2：第三方图床

- 七牛云
- 阿里云 OSS
- 腾讯云 COS

---

## 🔒 权限控制

### 发布权限
- 必须登录
- 检查用户状态

### 评论权限
- 必须登录
- 检查用户状态

### 编辑删除权限
- 仅作者本人
- 管理员

---

## 🎨 UI设计建议

### 配色方案
- 主色：#3a7bd5（蓝色）
- 辅色：#00d2ff（青色）
- 成功：#4caf50（绿色）
- 警告：#ff9800（橙色）
- 错误：#f44336（红色）

### 图标使用
- 点赞：❤️ / 🤍
- 评论：💬
- 收藏：⭐ / ☆
- 分享：📤
- 发布：✏️

---

## 📊 数据统计（可选）

### 用户维度
- 发帖数量
- 获赞数量
- 评论数量

### 帖子维度
- 浏览量
- 点赞数
- 评论数
- 收藏数

---

## 🚀 性能优化

### 1. 列表优化
- 分页加载
- 虚拟列表（长列表）
- 图片懒加载

### 2. 缓存优化
- 帖子列表缓存
- 用户信息缓存

### 3. 数据库优化
- 合理使用索引
- 控制查询字段

---

**开发时间估算**：3-5天  
**文档版本**：v1.0  
**更新时间**：2025-10-25
