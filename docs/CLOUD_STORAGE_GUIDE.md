# uniCloud 云存储使用指南

## 🎯 为什么使用云存储？

- ✅ 减小小程序包体积（主包限制1.5M）
- ✅ 图片加载更快（CDN加速）
- ✅ 易于更新图片（无需重新发布小程序）
- ✅ 无限存储空间

---

## 📤 步骤 1：上传图片到云存储

### 方法A：通过 HBuilderX 上传（推荐）

1. **打开云存储目录**
   ```
   项目根目录
   └── uniCloud-aliyun
       └── (右键) → 打开uniCloud web控制台
   ```

2. **在 uniCloud Web 控制台上传**
   - 点击左侧菜单 **云存储**
   - 点击 **新建文件夹**，创建 `images` 目录
   - 点击 **上传文件**
   - 选择以下3个文件上传：
     - `d:\ai-doctor\static\images\ai-avatar.png`
     - `d:\ai-doctor\static\images\news1.png`
     - `d:\ai-doctor\static\images\news3.png`

3. **上传目录建议**
   ```
   云存储根目录
   └── images/
       ├── ai-avatar.png
       ├── news1.png
       └── news3.png
   ```

### 方法B：通过代码上传（进阶）

创建一个临时页面或云函数来上传：

```javascript
// 选择图片
uni.chooseImage({
  count: 1,
  success: (res) => {
    const filePath = res.tempFilePaths[0]
    
    // 上传到云存储
    uniCloud.uploadFile({
      filePath: filePath,
      cloudPath: 'images/' + Date.now() + '.png',
      success: (uploadRes) => {
        console.log('上传成功', uploadRes.fileID)
      }
    })
  }
})
```

---

## 🔗 步骤 2：获取云存储文件 URL

上传成功后，在云存储列表中可以看到文件：

1. **点击文件名** 右侧的 **...（更多）**
2. 选择 **复制文件链接**
3. 你会得到类似这样的URL：
   ```
   https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xxx/abc123.png
   ```

**重要提示**：
- 云存储URL是永久有效的
- URL自带CDN加速
- 可以直接在浏览器访问

---

## ✏️ 步骤 3：修改代码使用云存储 URL

### 示例1：修改首页图片

假设你上传后获得的URL是：
```
news1.png -> https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xxx/images/news1.png
news3.png -> https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xxx/images/news3.png
ai-avatar.png -> https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xxx/images/ai-avatar.png
```

打开 `pages/index/index.vue`，找到 `data` 部分：

**修改前**：
```javascript
data() {
  return {
    bannerList: [
      {
        id: 1,
        title: '骨关节炎新疗法研究突破',
        image: '/static/images/news1.png',  // ❌ 本地路径
      },
      {
        id: 3,
        title: '饮食与骨关节炎的关系',
        image: '/static/images/news3.png',  // ❌ 本地路径
      }
    ],
    newsList: [
      {
        id: 1,
        title: '骨关节炎新疗法研究突破',
        image: '/static/images/news1.png',  // ❌ 本地路径
      },
      {
        id: 3,
        title: '饮食与骨关节炎的关系',
        image: '/static/images/news3.png',  // ❌ 本地路径
      }
    ]
  }
}
```

**修改后**：
```javascript
data() {
  return {
    bannerList: [
      {
        id: 1,
        title: '骨关节炎新疗法研究突破',
        image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xxx/images/news1.png',  // ✅ 云存储URL
      },
      {
        id: 3,
        title: '饮食与骨关节炎的关系',
        image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xxx/images/news3.png',  // ✅ 云存储URL
      }
    ],
    newsList: [
      {
        id: 1,
        title: '骨关节炎新疗法研究突破',
        image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xxx/images/news1.png',  // ✅ 云存储URL
      },
      {
        id: 3,
        title: '饮食与骨关节炎的关系',
        image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xxx/images/news3.png',  // ✅ 云存储URL
      }
    ]
  }
}
```

### 示例2：配置文件管理（推荐）

为了方便管理，可以创建一个配置文件：

**创建** `config/cdn.config.js`：
```javascript
// CDN 云存储配置
const CDN_BASE = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xxx/images/'

export default {
  images: {
    news1: CDN_BASE + 'news1.png',
    news3: CDN_BASE + 'news3.png',
    aiAvatar: CDN_BASE + 'ai-avatar.png',
    defaultAvatar: CDN_BASE + 'default-avatar.png',
  }
}
```

**在页面中使用**：
```javascript
import cdnConfig from '@/config/cdn.config.js'

export default {
  data() {
    return {
      bannerList: [
        {
          id: 1,
          title: '骨关节炎新疗法研究突破',
          image: cdnConfig.images.news1,  // ✅ 使用配置
        },
        {
          id: 3,
          title: '饮食与骨关节炎的关系',
          image: cdnConfig.images.news3,  // ✅ 使用配置
        }
      ]
    }
  }
}
```

这样的好处：
- 统一管理所有云存储URL
- 需要更换URL时只改一个文件
- 代码更清晰易维护

---

## 🗑️ 步骤 4：删除本地大图片（可选）

确认云存储图片显示正常后，可以删除本地文件：

```bash
# 删除或移动到备份文件夹
d:\ai-doctor\static\images\
├── ai-avatar.png    -> 删除
├── news1.png        -> 删除
└── news3.png        -> 删除
```

**注意**：
- 删除前务必确认云存储图片能正常显示
- 建议先备份到其他位置
- 小图标（<50KB）可以保留在本地

---

## 🎨 进阶用法

### 1. 动态获取云存储文件列表

创建云函数 `getCloudImages`：

```javascript
// uniCloud-aliyun/cloudfunctions/getCloudImages/index.js
'use strict';

exports.main = async (event, context) => {
  const uniCloud = require('uni-cloud-router')
  
  // 获取云存储文件列表
  const res = await uniCloud.getTempFileURL({
    fileList: [
      'cloud://images/news1.png',
      'cloud://images/news3.png'
    ]
  })
  
  return {
    code: 0,
    data: res.fileList
  }
}
```

### 2. 图片上传到云存储的完整示例

```javascript
// 选择并上传图片
async uploadImage() {
  uni.chooseImage({
    count: 1,
    success: async (res) => {
      uni.showLoading({ title: '上传中...' })
      
      const filePath = res.tempFilePaths[0]
      const cloudPath = 'images/' + Date.now() + '.png'
      
      try {
        const result = await uniCloud.uploadFile({
          filePath: filePath,
          cloudPath: cloudPath
        })
        
        console.log('上传成功', result.fileID)
        
        // 获取可访问的URL
        const urlRes = await uniCloud.getTempFileURL({
          fileList: [result.fileID]
        })
        
        const imageUrl = urlRes.fileList[0].tempFileURL
        console.log('图片URL:', imageUrl)
        
        uni.hideLoading()
        uni.showToast({ title: '上传成功' })
        
      } catch (e) {
        console.error('上传失败', e)
        uni.hideLoading()
        uni.showToast({ title: '上传失败', icon: 'none' })
      }
    }
  })
}
```

### 3. 云存储图片压缩

在上传前压缩图片：

```javascript
async uploadCompressedImage() {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      const src = res.tempFilePaths[0]
      
      // 压缩图片
      uni.compressImage({
        src: src,
        quality: 80,  // 压缩质量 0-100
        success: async (compressRes) => {
          // 上传压缩后的图片
          const result = await uniCloud.uploadFile({
            filePath: compressRes.tempFilePath,
            cloudPath: 'images/' + Date.now() + '.png'
          })
          
          console.log('上传成功', result.fileID)
        }
      })
    }
  })
}
```

---

## 📋 完整操作清单

针对你的项目，按以下步骤操作：

### ✅ 任务清单

- [ ] **上传图片到云存储**
  - [ ] 打开 uniCloud Web 控制台
  - [ ] 创建 `images` 文件夹
  - [ ] 上传 `ai-avatar.png` (231KB)
  - [ ] 上传 `news1.png` (306KB)
  - [ ] 上传 `news3.png` (251KB)

- [ ] **复制云存储 URL**
  - [ ] 复制 news1.png 的URL
  - [ ] 复制 news3.png 的URL
  - [ ] 复制 ai-avatar.png 的URL（如果使用）

- [ ] **修改代码**
  - [ ] 打开 `pages/index/index.vue`
  - [ ] 替换 bannerList 中的图片路径（2处）
  - [ ] 替换 newsList 中的图片路径（2处）
  - [ ] 保存文件

- [ ] **测试验证**
  - [ ] 重新编译项目
  - [ ] 检查首页轮播图显示正常
  - [ ] 检查健康资讯图片显示正常

- [ ] **清理本地文件**
  - [ ] 备份原图片到其他位置
  - [ ] 删除 `static/images/news1.png`
  - [ ] 删除 `static/images/news3.png`
  - [ ] 删除 `static/images/ai-avatar.png`（如果不再使用）

- [ ] **重新检查代码质量**
  - [ ] 在微信开发者工具查看主包大小
  - [ ] 确认图片资源问题已解决

---

## 🔍 常见问题

### Q1: 云存储URL访问不了？
**A**: 检查以下几点：
- 云存储文件是否上传成功
- URL是否正确复制（包括https://）
- 网络是否正常
- 云存储服务空间是否欠费

### Q2: 图片显示很慢？
**A**: 
- 云存储自带CDN，第一次访问可能慢，后续会很快
- 可以在上传前先压缩图片
- 使用WebP格式会更快

### Q3: 如何批量上传？
**A**: 
- 在云存储控制台可以拖拽多个文件上传
- 或使用官方提供的批量上传工具

### Q4: 云存储收费吗？
**A**: 
- 免费版有一定额度（存储5GB，流量5GB/月）
- 超出额度按量收费，费用很低
- 对于小程序项目，免费额度通常足够

### Q5: 可以删除云存储文件吗？
**A**: 
- 可以在控制台删除
- 也可以通过云函数调用 `deleteFile` API删除
- 删除后URL会失效

---

## 🔗 相关文档

- [uniCloud云存储官方文档](https://uniapp.dcloud.net.cn/uniCloud/storage.html)
- [uploadFile API](https://uniapp.dcloud.net.cn/uniCloud/storage.html#clouduploadfile)
- [getTempFileURL API](https://uniapp.dcloud.net.cn/uniCloud/storage.html#cloudgettempfileurl)
- [云存储Web控制台](https://unicloud.dcloud.net.cn/)

---

**最后更新**：2025-10-26  
**适用项目**：AI Doctor 智能医疗助手  
**需要替换的图片**：3个（news1.png, news3.png, ai-avatar.png）
