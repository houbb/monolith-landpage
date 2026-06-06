# Monolith Landing Page

Monolith 官方落地页 - 黑金知识系统入口。

本地优先、AI 增强、插件化扩展的个人知识库。

## 技术栈

- Vue 3 + TypeScript
- Vite
- Tailwind CSS
- Vue Router 4
- vue-i18n 9（中英文国际化）
- Lucide Icons

## 本地开发

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动后访问 http://localhost:5173/monolith-landpage/

### 构建生产版本

```bash
npm run build
```

构建产物在 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

### 类型检查

```bash
npm run check
```

## 项目结构

```
src/
  assets/styles/     # 主题样式、动画
  config/            # 站点配置（URL、联系方式、下载信息）
  i18n/              # 国际化（zh-CN / en）
  components/
    common/          # 通用组件（GoldButton、GoldCard 等）
    layout/          # 布局组件（Header、Footer）
    home/            # 首页模块
    download/        # 下载页模块
    contact/         # 联系页模块
  pages/             # 页面组件
  router/            # 路由配置
  composables/       # 组合式函数
```

## 页面路由

| 路由 | 页面 |
|------|------|
| `/` | 首页 |
| `/download` | 下载页 |
| `/contact` | 联系作者 |

## 部署

项目使用 GitHub Pages 部署，push 到 `main` 分支会自动触发 GitHub Actions 构建 and 部署。

## 待补充资源

以下二维码图片需要手动添加到 `public/contact/` 目录：

- `wechat-group.png` - 微信群二维码
- `qq-group.png` - QQ 群二维码
- `author-wechat.png` - 作者微信二维码
