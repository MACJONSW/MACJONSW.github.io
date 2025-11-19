# 配置指南 | Configuration Guide

这份指南将帮助你快速配置个人主页的所有内容。只需编辑 `config.json` 文件，即可轻松自定义你的个人信息、项目、技能等。

---

## 📋 配置文件结构

配置文件 `config.json` 包含以下主要部分：

1. **personal** - 个人基本信息
2. **hero** - 首页大标题区域
3. **about** - 关于我区域
4. **skills** - 技能列表
5. **experience** - 工作经历和教育背景
6. **projects** - 项目展示
7. **awards** - 获奖和成就
8. **contact** - 联系方式
9. **footer** - 页脚信息
10. **socialLinks** - 社交媒体链接

---

## 🎯 详细配置说明

### 1. 个人基本信息 (personal)

```json
"personal": {
  "name": "你的名字",
  "title": "网页标题（显示在浏览器标签）",
  "description": "个人简介（用于SEO）",
  "email": "your.email@example.com",
  "github": "https://github.com/你的用户名",
  "linkedin": "https://linkedin.com/in/你的用户名",
  "twitter": "https://twitter.com/你的用户名",
  "photo": "static/assets/img/photo.png"
}
```

**说明：**
- `photo`: 你的头像图片路径，建议使用正方形图片

---

### 2. 首页区域 (hero)

```json
"hero": {
  "greeting": "Hi, I'm",
  "name": "你的名字",
  "typedTexts": [
    "第一个职业/身份",
    "第二个职业/身份",
    "第三个职业/身份",
    "第四个职业/身份"
  ],
  "description": "你的个人格言或简短描述",
  "buttons": [
    {
      "text": "按钮文字",
      "link": "#contact",
      "type": "primary"
    }
  ]
}
```

**说明：**
- `typedTexts`: 会自动循环打字显示的文字列表
- `buttons.type`: 可选 "primary" 或 "secondary"

---

### 3. 关于我区域 (about)

```json
"about": {
  "title": "About Me",
  "subtitle": "Hello! I'm xxx",
  "paragraphs": [
    "第一段自我介绍...",
    "第二段自我介绍..."
  ],
  "stats": [
    {
      "number": "5+",
      "label": "Years Experience"
    }
  ]
}
```

**说明：**
- `paragraphs`: 可以添加多段自我介绍
- `stats`: 统计数据，显示你的成就数字

---

### 4. 技能列表 (skills)

```json
"skills": [
  {
    "name": "Python",
    "icon": "fab fa-python",
    "level": 90
  }
]
```

**说明：**
- `icon`: 使用 [Font Awesome](https://fontawesome.com/icons) 图标
- `level`: 技能熟练度 (0-100)

**常用图标：**
- Python: `fab fa-python`
- JavaScript: `fab fa-js`
- React: `fab fa-react`
- Node.js: `fab fa-node-js`
- Java: `fab fa-java`
- Database: `fas fa-database`
- AI/ML: `fas fa-brain`

---

### 5. 工作经历和教育 (experience)

```json
"experience": [
  {
    "type": "work",
    "title": "职位名称",
    "organization": "公司名称",
    "date": "2022 - Present",
    "description": "工作描述...",
    "icon": "fas fa-briefcase"
  },
  {
    "type": "education",
    "title": "学位名称",
    "organization": "学校名称",
    "date": "2019 - 2022",
    "description": "学习经历描述...",
    "icon": "fas fa-graduation-cap"
  }
]
```

**说明：**
- `type`: "work" (工作) 或 "education" (教育)
- `icon`: 
  - 工作: `fas fa-briefcase` 或 `fas fa-code`
  - 教育: `fas fa-graduation-cap`

---

### 6. 项目展示 (projects)

```json
"projects": [
  {
    "title": "项目名称",
    "description": "项目简介...",
    "image": "项目截图URL或路径",
    "tags": ["技术1", "技术2", "技术3"],
    "demoLink": "https://demo.example.com",
    "githubLink": "https://github.com/你的用户名/项目名"
  }
]
```

**说明：**
- `image`: 可以使用本地图片或在线图片URL
- `tags`: 项目使用的技术栈
- `demoLink`: 项目演示链接（可选）
- `githubLink`: GitHub 仓库链接（可选）

**示例图片路径：**
- 本地图片: `static/assets/img/project1.png`
- 在线图片: `https://via.placeholder.com/400x250`

---

### 7. 获奖和成就 (awards)

```json
"awards": [
  {
    "title": "奖项名称",
    "date": "2024",
    "description": "获奖说明...",
    "icon": "fas fa-trophy"
  }
]
```

**图标选择：**
- 🏆 奖杯: `fas fa-trophy`
- 🥇 奖牌: `fas fa-medal`
- 🏅 徽章: `fas fa-award`
- ⭐ 星星: `fas fa-star`
- 👑 皇冠: `fas fa-crown`

---

### 8. 联系方式 (contact)

```json
"contact": {
  "title": "Get In Touch",
  "subtitle": "Let's Connect!",
  "description": "联系说明文字...",
  "info": [
    {
      "icon": "fas fa-envelope",
      "text": "your.email@example.com",
      "link": "mailto:your.email@example.com"
    }
  ]
}
```

---

### 9. 社交媒体链接 (socialLinks)

```json
"socialLinks": [
  {
    "platform": "GitHub",
    "icon": "fab fa-github",
    "url": "https://github.com/你的用户名"
  },
  {
    "platform": "LinkedIn",
    "icon": "fab fa-linkedin",
    "url": "https://linkedin.com/in/你的用户名"
  },
  {
    "platform": "Email",
    "icon": "fas fa-envelope",
    "url": "mailto:your.email@example.com"
  },
  {
    "platform": "Twitter",
    "icon": "fab fa-twitter",
    "url": "https://twitter.com/你的用户名"
  }
]
```

**常用社交平台图标：**
- GitHub: `fab fa-github`
- LinkedIn: `fab fa-linkedin`
- Twitter/X: `fab fa-twitter` 或 `fab fa-x-twitter`
- Email: `fas fa-envelope`
- 微信: `fab fa-weixin`
- 知乎: `fab fa-zhihu`
- Bilibili: (使用自定义图标或emoji)

---

## 🖼️ 图片资源管理

### 上传图片位置

将你的图片放在以下目录：
```
static/assets/img/
├── photo.png          # 你的头像
├── background.jpeg    # 背景图（可选）
├── project1.png       # 项目截图1
├── project2.png       # 项目截图2
└── ...
```

### 图片建议

- **头像**: 正方形，建议 300x300px 或更高
- **项目截图**: 建议 400x250px 或保持 16:10 比例
- **格式**: JPG, PNG, WebP 都可以

---

## 🎨 Font Awesome 图标使用

本项目使用 Font Awesome 6.4.0 图标库。

### 查找图标

1. 访问 [Font Awesome 图标库](https://fontawesome.com/icons)
2. 搜索你需要的图标
3. 复制图标的类名（如 `fas fa-code`）
4. 粘贴到配置文件中

### 图标类别

- `fab` - 品牌图标（GitHub, LinkedIn 等）
- `fas` - 实心图标
- `far` - 空心图标

---

## 🚀 快速开始

### 步骤 1: 编辑配置文件

打开 `config.json`，按照上面的说明修改你的信息。

### 步骤 2: 更新图片

1. 准备你的头像图片
2. 放到 `static/assets/img/photo.png`
3. 准备项目截图（可选）

### 步骤 3: 预览网站

在浏览器中打开 `index.html`，查看效果。

### 步骤 4: 部署到 GitHub Pages

```bash
git add .
git commit -m "Update personal information"
git push
```

---

## ⚠️ 注意事项

1. **JSON 格式**: 确保 JSON 文件格式正确，注意逗号和引号
2. **链接格式**: 
   - 外部链接: `https://example.com`
   - 内部锚点: `#section-name`
   - 邮箱: `mailto:email@example.com`
3. **图标名称**: 必须完整包含前缀（如 `fab fa-github`）
4. **图片路径**: 
   - 本地图片使用相对路径
   - 在线图片使用完整 URL

---

## 🔧 常见问题

### Q: 如何添加更多技能？

在 `skills` 数组中添加新对象：

```json
{
  "name": "新技能",
  "icon": "图标类名",
  "level": 80
}
```

### Q: 如何添加更多项目？

在 `projects` 数组中添加新对象，格式参考上面的说明。

### Q: 如何修改颜色主题？

修改 `styles.css` 文件中的 CSS 变量：

```css
:root {
  --primary-color: #667eea;  /* 主色调 */
  --secondary-color: #764ba2; /* 次要色 */
  /* ... */
}
```

### Q: 配置文件修改后不生效？

1. 清除浏览器缓存（Ctrl+Shift+R 或 Cmd+Shift+R）
2. 检查 JSON 格式是否正确
3. 打开浏览器控制台查看是否有错误

---

## 📝 配置检查清单

- [ ] 更新个人基本信息（姓名、邮箱等）
- [ ] 上传个人头像
- [ ] 修改首页打字效果文字
- [ ] 填写自我介绍
- [ ] 添加技能列表
- [ ] 添加工作经历和教育背景
- [ ] 添加项目（至少3个）
- [ ] 添加获奖信息
- [ ] 更新社交媒体链接
- [ ] 更新联系方式
- [ ] 测试所有链接是否正确

---

## 💡 提示

- 使用真实的信息和链接
- 保持内容简洁有力
- 定期更新项目和经历
- 确保所有图片链接有效
- 检查语法和拼写

---

祝你创建一个精美的个人主页！🎉
