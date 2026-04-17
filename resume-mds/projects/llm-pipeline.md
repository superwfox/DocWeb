# LLM工作流学习相关

### 语言 ： `TypeScript` | 服务 ： `DeepSeek API`, `Cloudflare Pages Functions`

## 代表项目

- [minecraft-dev](https://github.com/superwfox/minecraft-dev) - AI驱动的Minecraft插件生成器，`Planner`→`FileGen`→`reChecker`三阶段编排

## 实现历程

### 核心实现

&nbsp;将单次大调用拆分为多阶段。`Planner`先产出文件列表与依赖拓扑，`FileGen`按拓扑顺序逐文件生成，每生成完一个立即用`summaryExtract`提取公开API签名作为下一文件的上下文。`reChecker`对产物做JSON格式审查，不通过则进入`rework`循环，最多5次后触发重新规划。

```typescript
// 文件生成循环：独立上下文 + 审查回路
const gen = fileGenPrompt(target.path, target.role, ctx, summaries);
let content = stripFences(await callAIStream(gen.system, gen.user));

for (let i = 0; i < MAX_REWORK; i++) {
    const review = JSON.parse(await callAI(reCheckerPrompt(path, content, summaries).system, ...));
    if (review.is_ok) break;
    // 把reason塞回prompt，让AI做精准修正而非重写
    content = stripFences(await callAIStream(reworkPrompt(path, content, review.reason).system, ...));
}
```
