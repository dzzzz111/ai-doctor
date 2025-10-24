# 康复训练打卡系统 - 部署指南

## 📋 功能概述

这是一个智能康复训练打卡系统，能够根据用户的骨关节炎MRI诊断结果（I-IV期），自动推荐个性化的康复训练视频，并提供打卡、进度跟踪、成就系统等功能。

## 🏗️ 系统架构

### 云函数
- **createRehabPlan** - 根据诊断结果创建康复训练计划
- **getRehabPlan** - 获取用户当前的训练计划和进度
- **trainingCheckIn** - 训练打卡，记录训练数据和反馈

### 数据库集合
- **rehabilitation_videos** - 康复训练视频库
- **rehabilitation_plans** - 用户训练计划
- **training_check_ins** - 训练打卡记录
- **user_rehabilitation_profiles** - 用户康复档案
- **diagnosis_records** - 诊断记录（已有）

### 前端页面
- **pagesA/rehabilitation/index.vue** - 康复训练主页
- **pagesA/video-player/index.vue** - 视频播放和打卡页面

## 🚀 部署步骤

### 1. 上传云函数

在 HBuilderX 中：
1. 右键 `uniCloud-aliyun/cloudfunctions/createRehabPlan` → 上传部署
2. 右键 `uniCloud-aliyun/cloudfunctions/getRehabPlan` → 上传部署
3. 右键 `uniCloud-aliyun/cloudfunctions/trainingCheckIn` → 上传部署

### 2. 创建数据库集合

登录 uniCloud Web 控制台（https://unicloud.dcloud.net.cn），进入你的项目：

#### 创建 rehabilitation_videos 集合

```javascript
// 集合名：rehabilitation_videos
// 在 uniCloud 控制台 → 云数据库 → 新建集合
```

#### 创建 rehabilitation_plans 集合

```javascript
// 集合名：rehabilitation_plans
```

#### 创建 training_check_ins 集合

```javascript
// 集合名：training_check_ins
```

#### 创建 user_rehabilitation_profiles 集合

```javascript
// 集合名：user_rehabilitation_profiles
```

#### 创建 diagnosis_records 集合（如果不存在）

```javascript
// 集合名：diagnosis_records
```

### 3. 导入测试视频数据

在 uniCloud 控制台 → 云数据库 → rehabilitation_videos 集合 → 新增文档，逐个添加以下数据：

#### I期视频数据

```json
{
  "_id": "video_i_001",
  "title": "膝关节温和活动训练",
  "description": "适用于I期早期骨关节炎患者，通过温和的关节活动改善灵活性",
  "videoUrl": "https://example.com/videos/knee-gentle-motion.mp4",
  "thumbnailUrl": "https://example.com/thumbnails/knee-gentle.jpg",
  "duration": 300,
  "difficulty": "easy",
  "targetStage": ["I", "II"],
  "category": "flexibility",
  "instructorName": "李康复师",
  "instructorTitle": "康复科主治医师",
  "targetMuscles": ["股四头肌"],
  "equipment": ["瑜伽垫"],
  "repetitions": 10,
  "sets": 2,
  "restTime": 30,
  "precautions": [
    "动作幅度不宜过大",
    "保持呼吸均匀",
    "如有不适立即停止"
  ],
  "viewCount": 0,
  "completionCount": 0,
  "avgRating": 5.0,
  "tags": ["膝关节", "早期康复", "柔韧性"],
  "createdAt": { "$date": "2024-01-01T00:00:00.000Z" },
  "updatedAt": { "$date": "2024-10-23T00:00:00.000Z" }
}
```

```json
{
  "_id": "video_i_002",
  "title": "坐姿膝关节屈伸",
  "description": "坐姿下的膝关节屈伸训练，适合I-II期患者",
  "videoUrl": "https://example.com/videos/sitting-knee-flex.mp4",
  "thumbnailUrl": "https://example.com/thumbnails/sitting-flex.jpg",
  "duration": 240,
  "difficulty": "easy",
  "targetStage": ["I", "II"],
  "category": "flexibility",
  "instructorName": "张医生",
  "instructorTitle": "康复科副主任",
  "targetMuscles": ["股四头肌", "腘绳肌"],
  "equipment": [],
  "repetitions": 15,
  "sets": 3,
  "restTime": 45,
  "precautions": [
    "动作缓慢进行",
    "避免突然用力",
    "膝盖对齐脚尖"
  ],
  "viewCount": 0,
  "completionCount": 0,
  "avgRating": 5.0,
  "tags": ["膝关节", "坐姿训练"],
  "createdAt": { "$date": "2024-01-01T00:00:00.000Z" },
  "updatedAt": { "$date": "2024-10-23T00:00:00.000Z" }
}
```

#### II期视频数据

```json
{
  "_id": "video_ii_001",
  "title": "直腿抬高训练",
  "description": "增强股四头肌力量，适用于II期骨关节炎患者",
  "videoUrl": "https://example.com/videos/straight-leg-raise.mp4",
  "thumbnailUrl": "https://example.com/thumbnails/leg-raise.jpg",
  "duration": 360,
  "difficulty": "medium",
  "targetStage": ["II"],
  "category": "strength",
  "instructorName": "王康复师",
  "instructorTitle": "运动康复专家",
  "targetMuscles": ["股四头肌", "髋屈肌"],
  "equipment": ["瑜伽垫"],
  "repetitions": 12,
  "sets": 3,
  "restTime": 60,
  "precautions": [
    "保持膝盖伸直",
    "腰部贴紧地面",
    "动作控制平稳"
  ],
  "viewCount": 0,
  "completionCount": 0,
  "avgRating": 4.8,
  "tags": ["力量训练", "股四头肌"],
  "createdAt": { "$date": "2024-01-01T00:00:00.000Z" },
  "updatedAt": { "$date": "2024-10-23T00:00:00.000Z" }
}
```

```json
{
  "_id": "video_ii_002",
  "title": "平衡训练",
  "description": "单腿站立平衡训练，改善膝关节稳定性",
  "videoUrl": "https://example.com/videos/balance-training.mp4",
  "thumbnailUrl": "https://example.com/thumbnails/balance.jpg",
  "duration": 300,
  "difficulty": "medium",
  "targetStage": ["II"],
  "category": "balance",
  "instructorName": "赵医生",
  "instructorTitle": "运动医学专家",
  "targetMuscles": ["小腿肌群", "核心肌群"],
  "equipment": ["椅子（辅助）"],
  "repetitions": 30,
  "sets": 3,
  "restTime": 30,
  "precautions": [
    "旁边准备椅子支撑",
    "保持核心收紧",
    "目视前方"
  ],
  "viewCount": 0,
  "completionCount": 0,
  "avgRating": 4.9,
  "tags": ["平衡", "稳定性"],
  "createdAt": { "$date": "2024-01-01T00:00:00.000Z" },
  "updatedAt": { "$date": "2024-10-23T00:00:00.000Z" }
}
```

#### III-IV期视频数据

```json
{
  "_id": "video_iii_001",
  "title": "温和关节活动操",
  "description": "适用于III-IV期患者的温和关节活动",
  "videoUrl": "https://example.com/videos/gentle-joint-exercise.mp4",
  "thumbnailUrl": "https://example.com/thumbnails/gentle-exercise.jpg",
  "duration": 180,
  "difficulty": "easy",
  "targetStage": ["III", "IV"],
  "category": "flexibility",
  "instructorName": "孙康复师",
  "instructorTitle": "老年康复专家",
  "targetMuscles": ["关节周围肌群"],
  "equipment": ["椅子"],
  "repetitions": 8,
  "sets": 2,
  "restTime": 60,
  "precautions": [
    "坐位完成所有动作",
    "幅度从小到大",
    "疼痛时立即停止"
  ],
  "viewCount": 0,
  "completionCount": 0,
  "avgRating": 5.0,
  "tags": ["温和训练", "坐位训练"],
  "createdAt": { "$date": "2024-01-01T00:00:00.000Z" },
  "updatedAt": { "$date": "2024-10-23T00:00:00.000Z" }
}
```

### 4. 上传康复视频到云存储

如果你有实际的康复训练视频：

1. 在 HBuilderX 中，右键 `uniCloud-aliyun` → 云存储管理
2. 上传视频文件到 `videos/rehabilitation/` 目录
3. 上传缩略图到 `thumbnails/rehabilitation/` 目录
4. 复制文件的 CDN URL
5. 更新数据库中的 `videoUrl` 和 `thumbnailUrl` 字段

**临时方案**：如果暂时没有视频，可以使用占位URL，前端会显示占位图片。

### 5. 配置测试用户

确保你的测试账号已登录，可以在 `users` 集合中查看用户ID。

### 6. 测试流程

1. **诊断测试**：
   - 进入图像诊断页面
   - 上传膝关节MRI图像
   - 点击"开始诊断"
   - 查看诊断结果（会显示分期：I、II、III或IV）
   
2. **创建康复计划**：
   - 诊断完成后，点击"保存结果"
   - 系统会提示"是否创建康复训练计划"
   - 点击"立即创建"
   
3. **查看训练计划**：
   - 自动跳转到康复训练页面
   - 可以看到根据分期推荐的训练视频
   - 查看本周打卡进度和连续天数
   
4. **观看视频并打卡**：
   - 点击任意视频进入播放页面
   - 观看训练视频（至少观看30%）
   - 点击"完成打卡"
   - 填写难度、疼痛程度、训练笔记
   - 提交打卡，获得积分和成就

## 🎨 自定义配置

### 修改分期视频推荐规则

编辑 `createRehabPlan/index.js`：

```javascript
const stageConfig = {
  'I': { difficulties: ['easy'], maxVideos: 6 },
  'II': { difficulties: ['easy', 'medium'], maxVideos: 8 },
  'III': { difficulties: ['easy'], maxVideos: 6 },
  'IV': { difficulties: ['easy'], maxVideos: 4 }
};
```

### 修改每周训练目标

在 `createRehabPlan/index.js` 中：

```javascript
const weeklyGoal = (stage === 'I' || stage === 'II') ? 5 : 3;
```

### 修改积分奖励

在 `trainingCheckIn/index.js` 中：

```javascript
points: 10  // 修改为你想要的积分值
```

## 📊 数据库索引建议

为提高查询性能，建议在 uniCloud 控制台添加以下索引：

### rehabilitation_plans 集合
- `userId` (升序)
- `status` (升序)
- `createdAt` (降序)

### training_check_ins 集合
- `userId` (升序)
- `checkInDate` (降序)
- `planId` + `videoId` (组合索引)

### rehabilitation_videos 集合
- `targetStage` (升序)
- `difficulty` (升序)
- `avgRating` (降序)

## ⚠️ 注意事项

1. **视频文件大小**：建议每个视频文件不超过50MB，以保证加载速度
2. **用户权限**：确保已登录用户才能访问康复训练功能
3. **数据备份**：定期备份用户训练数据
4. **视频版权**：使用的康复训练视频需要有合法授权

## 🔧 故障排查

### 问题1：无法创建训练计划
- 检查是否已完成MRI诊断
- 确认云函数 `createRehabPlan` 已上传
- 查看云函数日志排查错误

### 问题2：视频无法播放
- 检查视频URL是否正确
- 确认云存储文件是否上传成功
- 查看视频格式是否兼容（推荐 MP4）

### 问题3：打卡失败
- 确认是否已观看至少30%视频
- 检查是否今日已打卡该视频
- 查看云函数 `trainingCheckIn` 日志

## 📞 技术支持

如遇到问题，请查看：
1. HBuilderX 控制台日志
2. uniCloud 云函数运行日志
3. 浏览器开发者工具 Console

## 🎉 功能扩展建议

1. **视频收藏**：允许用户收藏喜欢的训练视频
2. **训练提醒**：定时推送训练提醒通知
3. **进度报告**：生成每周/每月康复进度报告
4. **社区分享**：将打卡记录分享到社区
5. **AI教练**：集成AI分析用户训练效果
