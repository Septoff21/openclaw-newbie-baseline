# UHX-newbie-doc.md

## claw-newbie（普通用户最低标准）

> 目标：给第一次安装 OpenClaw 的用户一个可直接复用的通用基线（不含个性化设定）。

### A. 最低可运行要求
- OpenClaw 安装完成，`openclaw status` 正常
- Gateway 为 `running`
- 至少一个聊天通道可用（如 Telegram）

### B. 插件与限制（新手默认）
- 使用 `plugins.allow` 显式白名单（不要开放自动加载）
- 仅启用必要插件：
  - `telegram`
  - `memory-lancedb-pro`（或你选定的 memory 插件）
  - `acpx`（需要 ACP 才开启）
- 其余插件默认关闭，按需启用

### C. 记忆基线（推荐）
- memory 插件启用且已设为 `plugins.slots.memory`
- 开启：`autoCapture` / `autoRecall` / `smartExtraction`
- 完成一次“写入+召回”验证（必须）

### D. 建议通用技能（General）
- `skill-vetter`：安装/更新任何 skill 前先做安全审查
- `proactive-agent`：流程化执行（计划、进度、阻塞、收尾）
- `proactive-self-improving-agent`：把日常经验沉淀为规则
- `daily-learning-to-skill`（占位）：把每日日志筛选后转成 skill 改进

### E. 标准执行流程
1. 开工前：说明计划与风险
2. 进行中：分阶段汇报（避免长时间静默）
3. 有阻塞：立即说明原因与备选方案
4. 收尾：交付结果、验证方式、变更文件

### F. Context 水位提醒（跨模型通用）
- 70%：黄线提醒（建议收束）
- 85%：橙线提醒（建议分段/新线程）
- 95%：红线提醒（必须收尾或切换会话）

> 不同模型上下文大小不同，统一按“百分比水位”提醒，而不是写死 token 数。

### G. 验收清单
- [ ] 插件是“已启用”而非仅下载
- [ ] 配置已落盘到 `openclaw.json`
- [ ] 重启后服务仍正常
- [ ] 有真实调用证据（如 recall 命中）
- [ ] 有变更日志记录

---

## advance（占位）
- 多 Agent / 多 Scope 隔离
- ACP 线程化与长期会话策略
- 检索调优（rerank、阈值、去噪）
- 安全策略分层（本机 / VPS / 团队）
