# SSE学习相关

### 语言 ： `TypeScript` | 原生 ： `TransformStream`, `ReadableStream`

## 代表项目

- [minecraft-dev](https://github.com/superwfox/minecraft-dev) - 将DeepSeek流式输出实时转发至浏览器，生成过程逐token可视化

## 实现历程

### 核心实现

&nbsp;后端建立`TransformStream`管道，AI每到一个`delta`就包装成`data: {...}\n\n`写入；前端按行解析SSE事件、更新响应式状态，实现打字机效果以及阶段切换提示（generating / reviewing / reworking）。

```typescript
// 后端：逐chunk推送delta事件
const { readable, writable } = new TransformStream<Uint8Array>();
const writer = writable.getWriter();
await writer.write(encoder.encode(
    `data: ${JSON.stringify({ type: "delta", content: delta })}\n\n`
));

// 前端：按行切分、解析、同步到响应式状态
const lines = buffer.split("\n");
for (const line of lines) {
    if (!line.startsWith("data:")) continue;
    const evt = JSON.parse(line.slice(5).trim());
    if (evt.type === "delta") genTask.streamingContent += evt.content;
}
```
