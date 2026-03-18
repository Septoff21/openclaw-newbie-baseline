# 🦞 OpenClaw Newbie Baseline

从 **不会用** 到 **能跑起来** 到 **可复刻变现** 的 OpenClaw 参考模板。

> 这不是“安装文档仓库”，这是一个 **可直接访问的参考站点 + 可复制提示词模板库**。

- Live: https://septoff21.github.io/openclaw-newbie-baseline/
- Branch: `gh-pages`
- License: MIT

---

## 这个项目解决什么问题？

很多人装好 OpenClaw 后会卡在这几步：

1. 不知道先做什么
2. 不知道怎么验证 AI 输出靠不靠谱
3. 不知道别人是怎么用、怎么复刻的
4. 不知道后续怎么做成自己的品牌/服务

这个项目就是给你一条清晰路径：

**Beginner → Advance → Extreme**

---

## 用户视角：我能看到什么？

你打开站点后会看到：

- **Home**：角色/级别选择器 + 一键可复制提示词
- **Directory**：已部署 OpenClaw 相关项目卡片流（含可访问 URL）
- **Models**：每日模型快照与路由参考
- **Prompts**：实战提示词模板（可复制）
- **Troubleshooting**：常见故障排查与修复
- **Verification**：防幻觉验证清单
- **Diary**：项目迭代日志
- **Fork**：如何二创自己的版本
- **Shop**：变现路径示例

---

## 开发者视角：如何介绍这个项目？

你可以这样介绍：

> A beginner-first OpenClaw reference site that turns real usage patterns into copy-ready prompts, verified workflows, and forkable templates.

中文：

> 一个面向新手的 OpenClaw 参考站，把真实使用路径做成可复制提示词、可验证流程、可二创模板。

### 目标人群

- 刚接触 OpenClaw 的用户
- 想把“会用”变成“可复刻交付”的开发者
- 想做 Agent 服务/模板变现的人

---

## 快速开始（2 分钟）

1. 打开站点：
   https://septoff21.github.io/openclaw-newbie-baseline/
2. 选择你的级别（Beginner/Advance/Extreme）
3. 复制提示词到任意 LLM 对话
4. 用 Verification 页面做结果校验

---

## Fork / 二创

1. Fork 本仓库
2. 启用 GitHub Pages（`gh-pages`）
3. 修改你的品牌信息（名称、颜色、描述）
4. 更新 `api/claw-directory.json`（你的项目列表）
5. 在 `prompts.html` 放入你的可复制模板

---

## 仓库结构（当前）

```text
api/              # 数据源（目录、模型等）
assets/           # 静态资源（头像、OG 图）
diary/            # 日记内容
docs/             # 文档与操作记录
js/               # 页面脚本
scripts/          # 自动化脚本
site/             # 辅助/历史内容

index.html
directory.html
models.html
prompts.html
troubleshooting.html
verification.html
quickstart.html
fork.html
shop.html
styles.css
sw.js
sitemap.xml
```

---

## 模型与上下文提醒（重要）

不同模型能力与上下文窗口差异很大：

- 长上下文模型不等于更准确
- 免费模型可用，但稳定性可能波动
- 同一提示词在不同模型上结果会不同

建议：

1. 先在 `models.html` 看推荐与上下文信息
2. 关键输出必须走 `verification.html` 的 4-lock 校验

---

## 维护原则

- 先保证可访问，再优化视觉
- 每次改动都要可验收（链接/截图/对比）
- 避免“只看 200 不看体验”

---

## 致谢

By DM 👤 × UHX 🌌

如果你也做了一个 OpenClaw 站点，欢迎提交到 Directory。