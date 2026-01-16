# WebScoket学习相关

### 语言 ： `Java` | 库 ： `org.java-websocket 1.5.7`, `net.sf.json 2.4.0`

## 代表项目

- [Courier](https://github.com/superwfox/Courier) - 对接`LLOB-QQNT`，实现游戏与QQ群聊互通
- [MornsixBot](https://github.com/superwfox/MornsixBot) - 基于Paper的群聊管理机器人，同样对接`LLOB-QQNT`

## 实现历程

### 核心实现

&nbsp;对收到的消息Json序列化后，根据消息类型进行具体逻辑处理
```java
public class OneBotWebsocket extends WebSocketClient {
    @Override
    public void onMessage(String s) {
      // 进行Json解析 初步处理消息
      JSONObject json = JSONObject.fromObject(s);
         //或者是 Gson 解析 这里需要更小包体积 所以选择 net.sf.json
      // 进一步做具体逻辑
      switch / if / () logic();
    }
}
```

