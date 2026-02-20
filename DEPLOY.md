# GitHub Pages 部署指南

## 第一步：创建 GitHub 仓库并推送代码

1. 在 [GitHub](https://github.com/new) 创建一个新仓库（例如：`portfolio`）
2. 在终端执行：

```bash
cd "/Users/tince/Desktop/portfolio-test-1 (1)"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

## 第二步：开启 GitHub Pages

1. 打开仓库 → **Settings** → **Pages**
2. 在 **Build and deployment** 下，将 **Source** 设为 **GitHub Actions**
3. 保存后，每次 `git push` 到 `main` 分支会自动构建并部署

## 第三步：等待部署完成

- 打开 **Actions** 标签，查看部署进度
- 部署成功后，访问：`https://你的用户名.github.io/你的仓库名/`

## 注意事项

- **仓库名**会影响网址：`portfolio` → `https://xxx.github.io/portfolio/`
- 如果使用 **用户主页**（`https://用户名.github.io`），需要：
  1. 仓库名改为 `用户名.github.io`
  2. 删除 `vite.config.ts` 中的 `base` 配置，或改为 `base: '/'`
  3. 在 `.github/workflows/deploy.yml` 的 Build 步骤中删除 `env: GITHUB_PAGES_BASE` 那一行

## 更新内容

修改代码后执行：

```bash
git add .
git commit -m "更新描述"
git push
```

推送后会自动重新部署，约 1–2 分钟完成。
