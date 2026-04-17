# Serverless学习相关

### 平台 ： `Cloudflare Pages Functions` | 存储 ： `Cloudflare KV`

## 代表项目

- [minecraft-dev](https://github.com/superwfox/minecraft-dev) - 无服务器后端，用KV持久化任务状态跨越独立函数实例

## 实现历程

### 核心实现

&nbsp;文件路径即路由（`functions/api/generate/plan.ts` → `/api/generate/plan`），无需配置`Express`式路由表。每次请求是独立短生命周期实例，用`KV`存放`taskId`对应的生成状态，绕开单函数执行时长上限，让前端主导多步流程的节奏。

```typescript
// functions/api/generate/plan.ts
export const onRequestPost: PagesFunction<Env> = async (ctx) => {
    const { userPrompt } = await ctx.request.json();
    const taskId = crypto.randomUUID();
    const state = { taskId, plan, currentFileIndex: 0, generatedFiles: [] };
    // KV跨请求持久化，TTL 1小时
    await ctx.env.TASKS.put(taskId, JSON.stringify(state), { expirationTtl: 3600 });
    return Response.json({ taskId, plan });
};
```
