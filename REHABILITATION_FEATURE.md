# 🏋️ 康复训练打卡系统 - 实现说明

## ✅ 已完成功能

### 1. 云函数（3个）

#### createRehabPlan
- **路径**：`uniCloud-aliyun/cloudfunctions/createRehabPlan/index.js`
- **功能**：根据MRI诊断结果自动创建个性化康复训练计划
- **输入**：userId, diagnosisId
- **输出**：planId, stage, weeklyGoal, videoCount

#### getRehabPlan
- **路径**：`uniCloud-aliyun/cloudfunctions/getRehabPlan/index.js`
- **功能**：获取用户当前训练计划和进度
- **输入**：userId
- **输出**：plan, videos, weekCheckIns, todayCheckIns, streak

#### trainingCheckIn
- **路径**：`uniCloud-aliyun/cloudfunctions/trainingCheckIn/index.js`
- **功能**：训练打卡，记录数据并计算连续天数
- **输入**：userId, planId, videoId, duration, feedback
- **输出**：points, streak, achievements

### 2. 前端页面（2个）

#### 康复训练主页
- **路径**：`pagesA/rehabilitation/index.vue`
- **功能**：
  - 显示训练计划进度（当前周次、完成度）
  - 显示统计数据（本周打卡、累计打卡、连续天数）
  - 展示推荐训练视频列表
  - 显示康复目标
  - 标记今日已完成的视频

#### 视频播放器页面
- **路径**：`pagesA/video-player/index.vue`
- **功能**：
  - 视频播放
  - 观看进度追踪
  - 打卡面板（难度评分、疼痛程度、训练笔记）
  - 成就解锁提示
  - 积分奖励

### 3. 配置更新

#### pages.json
- 添加了 `pagesA/rehabilitation/index` 页面路由
- 添加了 `pagesA/video-player/index` 页面路由

#### image-diagnose/index.vue
- 集成康复计划创建功能
- 诊断完成后自动询问是否创建训练计划
- 显示计划详情并引导用户开始训练

## 📋 数据库设计

### rehabilitation_videos（康复视频库）
```javascript
{
  _id: String,
  title: String,              // 视频标题
  description: String,        // 描述
  videoUrl: String,          // 视频URL
  thumbnailUrl: String,      // 缩略图URL
  duration: Number,          // 时长（秒）
  difficulty: String,        // easy/medium/hard
  targetStage: Array,        // 适用分期 ["I", "II"]
  category: String,          // flexibility/strength/balance/aerobic
  precautions: Array,        // 注意事项
  avgRating: Number         // 平均评分
}
```

### rehabilitation_plans（训练计划）
```javascript
{
  userId: String,
  diagnosisStage: String,    // I/II/III/IV
  diagnosisId: String,
  videoIds: Array,           // 推荐视频ID列表
  weeklyGoal: Number,        // 每周目标次数
  currentWeek: Number,       // 当前周次
  totalWeeks: Number,        // 总周数
  totalCheckIns: Number,     // 累计打卡次数
  status: String            // active/paused/completed
}
```

### training_check_ins（打卡记录）
```javascript
{
  userId: String,
  planId: String,
  videoId: String,
  checkInDate: Date,
  duration: Number,          // 训练时长
  feedback: {
    difficulty: Number,      // 1-5
    painLevel: Number,       // 1-5
    notes: String
  },
  points: Number,           // 积分奖励
  images: Array             // 打卡照片（可选）
}
```

### user_rehabilitation_profiles（用户档案）
```javascript
{
  userId: String,
  statistics: {
    totalCheckIns: Number,
    totalTrainingTime: Number,
    currentStreak: Number,    // 连续打卡天数
    longestStreak: Number,    // 最长连续
    totalPoints: Number
  },
  abilities: {
    flexibility: Number,      // 0-100
    strength: Number,
    balance: Number,
    endurance: Number
  }
}
```

## 🎯 核心功能流程

### 1. 智能推荐流程
```
MRI诊断 → 获取分期(I-IV) → 查询适合的视频 → 生成训练计划 → 推送给用户
```

### 2. 训练打卡流程
```
选择视频 → 观看训练(≥30%) → 填写反馈 → 提交打卡 → 获得积分 → 更新连续天数 → 检查成就
```

### 3. 分期推荐规则

| 分期 | 难度 | 视频数 | 每周目标 | 训练周期 |
|------|------|--------|----------|----------|
| I期  | easy | 6个    | 5次/周   | 12周     |
| II期 | easy+medium | 8个 | 5次/周 | 12周   |
| III期| easy | 6个    | 3次/周   | 8周      |
| IV期 | easy | 4个    | 3次/周   | 8周      |

## 🎮 成就系统

- **连续打卡7天** - 解锁"坚持不懈"
- **连续打卡30天** - 解锁"康复达人"
- **累计打卡50次** - 解锁"训练勇士"
- **累计打卡100次** - 解锁"康复专家"

每次打卡奖励 **10积分**

## 🚀 部署步骤

### 1. 上传云函数
```bash
右键云函数文件夹 → 上传并部署到云服务空间
```

### 2. 创建数据库集合
在 uniCloud 控制台创建以下集合：
- rehabilitation_videos
- rehabilitation_plans
- training_check_ins
- user_rehabilitation_profiles

### 3. 导入测试数据
参考 `docs/REHABILITATION_SETUP.md` 导入视频数据

### 4. 上传康复视频
将康复训练视频上传到云存储，更新数据库URL

### 5. 测试功能
- 完成MRI诊断
- 创建康复计划
- 观看视频打卡

## 📱 入口位置

### 方式1：诊断后自动创建
1. 进入"图像智能诊断"
2. 上传MRI图像并诊断
3. 点击"保存结果"
4. 系统提示创建康复计划
5. 点击"立即创建" → 跳转到康复训练页面

### 方式2：直接访问
```javascript
uni.navigateTo({
  url: '/pagesA/rehabilitation/index'
})
```

### 建议：在首页添加入口
在 `pages/index/index.vue` 添加康复训练卡片：

```vue
<view class="function-card" @click="goToRehab">
  <image src="/static/icons/rehab-icon.png" class="card-icon"></image>
  <text class="card-title">康复训练</text>
  <text class="card-desc">个性化训练计划</text>
</view>
```

```javascript
goToRehab() {
  uni.navigateTo({
    url: '/pagesA/rehabilitation/index'
  })
}
```

## 🎨 UI特点

- **渐变紫色主题**：延续项目统一风格
- **卡片式设计**：清晰展示训练信息
- **进度可视化**：进度条、统计数据、完成标记
- **交互友好**：评分星级、反馈表单、成就提示

## ⚠️ 注意事项

1. **视频资源**：需要准备实际的康复训练视频
2. **云存储**：视频文件较大，注意云存储容量
3. **用户登录**：功能需要用户登录状态
4. **数据库索引**：为高频查询字段添加索引

## 🔧 后续优化建议

1. **视频缓存**：实现视频离线缓存功能
2. **训练提醒**：集成微信订阅消息推送
3. **数据分析**：生成康复进度报告和数据图表
4. **社交功能**：打卡分享到社区
5. **AI评估**：使用AI分析训练效果

## 📊 数据统计

| 文件类型 | 数量 | 代码行数 |
|---------|------|---------|
| 云函数   | 3    | ~400行  |
| Vue页面 | 2    | ~600行  |
| 文档     | 2    | ~400行  |
| **总计** | **7** | **~1400行** |

## 🎉 完成状态

✅ 所有核心功能已实现  
✅ 代码已通过语法检查  
✅ 配置文件已更新  
✅ 文档已完善  

**系统可以立即部署使用！**

---

**开发时间**：2024-10-23  
**版本**：v1.0.0
