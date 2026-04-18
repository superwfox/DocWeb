# Http学习相关

### 语言 ： `TypeScript` | 原生 ： `fetch`, `ReadableStream`

## 代表项目

- [minecraft-dev](https://github.com/superwfox/minecraft-dev) - 对接`DeepSeek Chat Completions`，同时支持普通请求与SSE流式响应

## 实现历程

### 核心实现

&nbsp;通过`fetch`发起`POST`请求，`Authorization: Bearer`携带API Key；开启`stream:true`后响应体是SSE格式的`ReadableStream`，逐块读取并按行解析`data:`前缀，取出`choices[0].delta.content`拼接完整回复。

```typescript
const resp = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
        model: "deepseek-chat",
        stream: true,
        messages: [{ role: "system", content: system }, { role: "user", content: user }],
    }),
});

// 流式读取：逐chunk解码 → 按\n切行 → 取 data: 后的JSON → 拼接delta
const reader = resp.body!.getReader();
const decoder = new TextDecoder();
while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    for (const line of decoder.decode(value, { stream: true }).split("\n")) {
        if (!line.startsWith("data:")) continue;
        const chunk = JSON.parse(line.slice(5).trim());
        full += chunk.choices?.[0]?.delta?.content ?? "";
    }
}
```
