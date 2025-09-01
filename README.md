# Discipline - 交易纪律管理应用

一个基于 React + TypeScript + Vite 构建的现代化交易纪律管理应用，帮助交易者建立和维持良好的交易习惯。

## ✨ 功能特性

- 🌓 **深色模式支持** - 支持浅色、深色和跟随系统主题
- 📱 **响应式设计** - 完美适配各种设备尺寸
- 🎨 **现代化 UI** - 基于 HeroUI 和 Tailwind CSS 的美观界面
- ⚡ **高性能** - 使用 Vite 构建，支持热重载
- 🔧 **TypeScript** - 完整的类型安全支持
- 🔍 **SEO 优化** - 完整的搜索引擎优化支持

## 🚀 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 6
- **样式框架**: Tailwind CSS 4
- **UI 组件**: HeroUI React
- **动画库**: Framer Motion
- **图标**: Iconify React
- **开发语言**: TypeScript

## 🌓 深色模式

应用支持两种手动主题模式和智能系统跟随：

- **浅色模式** - 明亮的界面主题
- **深色模式** - 护眼的深色界面
- **跟随系统** - 自动跟随操作系统主题设置（默认行为）

主题设置会自动保存到本地存储，并在页面刷新后保持。用户可以在浅色和深色之间切换，或随时恢复到跟随系统状态。

## 📋 系统要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

## 🛠️ 开发环境设置

### 1. 克隆项目

```bash
git clone <repository-url>
cd discipline
```

### 2. 安装依赖

```bash
npm install
# 或者使用 yarn
yarn install
```

### 3. 启动开发服务器

```bash
npm run dev
# 或者使用 yarn
yarn dev
```

开发服务器将在 `http://localhost:5173` 启动，支持热重载。

## 📝 可用的脚本命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产构建
- `npm run lint` - 运行 ESLint 检查

## 🏗️ 项目结构

```
discipline/
├── src/
│   ├── components/          # React 组件
│   │   ├── seo.tsx              # SEO 组件
│   │   ├── theme-switcher.tsx   # 主题切换器
│   │   └── trading-discipline-cards.tsx
│   ├── hooks/               # 自定义 Hooks
│   │   └── use-theme.ts     # 主题管理 Hook
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 应用入口点
│   └── index.css            # 全局样式
├── plugins/                  # 自定义 Vite 插件
├── public/                   # 静态资源
│   ├── robots.txt           # 搜索引擎爬虫配置
│   └── sitemap.xml          # 网站地图
├── index.html               # HTML 模板
├── vite.config.ts           # Vite 配置
├── tailwind.config.js       # Tailwind CSS 配置
└── tsconfig.json            # TypeScript 配置
```

## 📱 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 🔍 SEO 优化

项目已全面优化 SEO，包含以下特性：

### Meta 标签优化
- 完整的页面标题和描述
- 关键词优化
- Open Graph 标签（Facebook 分享）
- Twitter Cards 标签
- 移动端优化标签

### 结构化数据
- JSON-LD 结构化数据
- 应用类型标记
- 功能列表描述

### 搜索引擎友好
- `robots.txt` 配置
- `sitemap.xml` 网站地图
- 规范链接（canonical URL）
- 语言标记（zh-CN）

### 性能优化
- 资源预加载
- 安全头部配置
- 移动端 PWA 支持

### 动态 SEO
- 动态页面标题更新
- 动态 meta 标签管理
- 组件化 SEO 管理

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 支持

如有问题或建议，请提交 [Issue](https://github.com/your-username/discipline/issues) 或联系开发团队。