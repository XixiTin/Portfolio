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

## AI Chatbot 配置（可选）

网站右下角有一个 AI 助手，可回答关于作品集的问题。

1. **本地开发**：在项目根目录创建 `.env.local`，添加：
   ```
   VITE_GEMINI_API_KEY=你的_Gemini_API_Key
   ```
   API Key 可在 [Google AI Studio](https://aistudio.google.com/apikey) 免费获取。

2. **生产部署**：若需在 GitHub Pages 上启用 chatbot：
   - 仓库 → **Settings** → **Secrets and variables** → **Actions**
   - 新建 secret：名称为 `GEMINI_API_KEY`，值为你的 API Key
   - 重新推送触发部署后，chatbot 会在线上生效

3. **注意**：API Key 会在构建时嵌入前端代码。建议使用有用量限制的 Key，或仅在需要时启用。

---

## 更新内容

修改代码后执行：

```bash
git add .
git commit -m "更新描述"
git push
```

推送后会自动重新部署，约 1–2 分钟完成。
