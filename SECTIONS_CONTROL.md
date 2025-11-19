# 区块显示控制功能说明

## 🎯 功能介绍

现在你可以通过修改 `config.json` 文件中的 `sections` 配置来控制页面中哪些区块显示或隐藏。

## 📝 使用方法

### 1. 打开配置文件

编辑 `config.json`，找到 `sections` 部分：

```json
{
  "sections": {
    "hero": true,
    "about": true,
    "skills": true,
    "experience": true,
    "projects": true,
    "awards": true,
    "contact": true
  },
  ...
}
```

### 2. 修改显示设置

将你想隐藏的区块设置为 `false`：

```json
{
  "sections": {
    "hero": true,
    "about": true,
    "skills": true,
    "experience": true,
    "projects": false,    // 隐藏项目区块
    "awards": false,      // 隐藏获奖区块
    "contact": true
  },
  ...
}
```

### 3. 保存并刷新

保存文件后，刷新浏览器（`Ctrl+R` 或 `Cmd+R`），你会看到：
- Projects 区块不再显示
- Awards 区块不再显示
- 导航菜单中的 "PROJECTS" 和 "AWARDS" 链接也会自动隐藏

## 🔧 各区块说明

| 配置项 | 对应区块 | 说明 |
|--------|----------|------|
| `hero` | 首页大标题 | 包含问候语、打字效果、按钮和社交链接 |
| `about` | 关于我 | 个人简介、照片和统计数据 |
| `skills` | 技能 | 技能列表和熟练度展示 |
| `experience` | 经历 | 工作经历和教育背景时间线 |
| `projects` | 项目 | 项目展示卡片 |
| `awards` | 获奖 | 获奖和成就列表 |
| `contact` | 联系方式 | 联系表单和联系信息 |

## 💡 使用场景示例

### 场景 1：学生简历（隐藏工作经历）

如果你是学生，还没有工作经历，可以只显示教育背景：

```json
"sections": {
  "hero": true,
  "about": true,
  "skills": true,
  "experience": true,  // 在 experience 数据中只填写教育背景
  "projects": true,
  "awards": true,
  "contact": true
}
```

### 场景 2：极简主页（只显示核心信息）

如果你想要一个极简的主页：

```json
"sections": {
  "hero": true,
  "about": true,
  "skills": false,
  "experience": false,
  "projects": false,
  "awards": false,
  "contact": true
}
```

### 场景 3：作品集网站（突出项目）

如果你想突出展示项目作品：

```json
"sections": {
  "hero": true,
  "about": true,
  "skills": true,
  "experience": false,
  "projects": true,
  "awards": false,
  "contact": true
}
```

### 场景 4：完整展示（默认）

显示所有区块：

```json
"sections": {
  "hero": true,
  "about": true,
  "skills": true,
  "experience": true,
  "projects": true,
  "awards": true,
  "contact": true
}
```

## ⚠️ 注意事项

1. **JSON 格式**：确保 JSON 格式正确，最后一项不要加逗号
2. **布尔值**：只能使用 `true` 或 `false`（小写，不加引号）
3. **导航菜单**：隐藏的区块会自动从导航菜单中移除
4. **刷新页面**：修改后需要刷新浏览器才能看到效果
5. **至少保留一个区块**：建议至少保留 `hero` 和 `contact` 区块

## 🎨 自定义建议

- **首次使用**：先全部设置为 `true`，查看完整效果
- **逐步调整**：根据需要逐个隐藏不需要的区块
- **保持平衡**：建议保留 3-5 个区块，保持页面丰富度
- **定期更新**：随着你的成长，可以逐步开启更多区块

## 🔄 快速切换

你可以准备多个配置文件版本：

- `config-full.json` - 完整版本
- `config-minimal.json` - 极简版本
- `config-portfolio.json` - 作品集版本

需要切换时，只需复制对应版本到 `config.json` 即可。

---

**提示**：修改配置后记得清除浏览器缓存（`Ctrl+Shift+R` 或 `Cmd+Shift+R`）以确保看到最新效果！
