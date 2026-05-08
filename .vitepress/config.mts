import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OASIS-Sudark",
  description: "这是OASIS服务器文档站|DocWeb for OASIS Server",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '服务器文档', link: '/mc-server-mds/' },
      { text: '个人简历', link: '/resume-mds/' },
      { text: '泰坦陨落', link: '/titanfall-mds/' }
    ],

     sidebar: {
      '/mc-server-mds/': [
        { text: '服务器相关', items: [
          { text: '服务器相关信息总览', link: '/mc-server-mds/' },
          { text:"大纲", link:"/mc-server-mds/crafts"},
          { text:"领地",items:[
            { text:"领地介绍", link:"/mc-server-mds/rentland/"},
            { text:"购置领地", link:"/mc-server-mds/rentland/land-buy"},
            { text:"领地配置", link:"/mc-server-mds/rentland/land-set"},
          ]
          },
          { text:"BOSS大型怪物介绍", link:"/mc-server-mds/boss"},
          { text:"天赋介绍", link:"/mc-server-mds/talent/"},
          { text:"实用功能介绍", link:"/mc-server-mds/functions"},
          { text:"贵宾相关", link:"/mc-server-mds/vip"}
        ]}
      ],
      '/resume-mds/': [
        { text: '个人简历', items: [
          { text: 'WebSocket', link: '/resume-mds/projects/websocket' },
          { text: 'Http', link: '/resume-mds/projects/http' },
          { text: 'LLM工作流', link: '/resume-mds/projects/llm-pipeline' },
          { text: 'SSE流式响应', link: '/resume-mds/projects/sse' },
          { text: 'Serverless', link: '/resume-mds/projects/serverless' },
        ]}
      ],
      '/titanfall-mds/': [
        { text: '泰坦陨落', items: [
          { text: '首页', link: '/titanfall-mds/' },
        ]}
      ],
      '/NanGuo-mds/': [
        { text: '南国那些事', items: [
          { text: '首页', link: '/NanGuo-mds/' },
          { text: '正文', items:[
            { text: '第一章 垓下之围', link: '/NanGuo-mds/pages/p1' },
            { text: '第二章 世外桃源', link: '/NanGuo-mds/pages/p2' },
            { text: '第三章 情窦初开', link: '/NanGuo-mds/pages/p3' },
            { text: '第四章 新王登基', link: '/NanGuo-mds/pages/p4' },
            { text: '第五章 困兽之斗', link: '/NanGuo-mds/pages/p5' },
            { text: '第六章 乌合之众', link: '/NanGuo-mds/pages/p6' },
            { text: '第七章 成也萧何，败也萧何', link: '/NanGuo-mds/pages/p7' },
            { text: '第八章 城下之盟', link: '/NanGuo-mds/pages/p8' },
            { text: '第九章 黑刃出征', link: '/NanGuo-mds/pages/p9' },
            { text: '第十章 月下屠兽', link: '/NanGuo-mds/pages/p10' },
            { text: '第十一章 御前戏弄', link: '/NanGuo-mds/pages/p11' },
            { text: '第十二章 镜中之魔', link: '/NanGuo-mds/pages/p12' },
            { text: '第十三章 朝堂染血', link: '/NanGuo-mds/pages/p13' },
            { text: '第十四章 雾中重逢', link: '/NanGuo-mds/pages/p14' },
            { text: '第十五章 雪中较武', link: '/NanGuo-mds/pages/p15' },
            { text: '第十六章 醉杀流放', link: '/NanGuo-mds/pages/p16' },
            { text: '第十七章 流放前夕', link: '/NanGuo-mds/pages/p17' },
            { text: '第十八章 黑狱诛王', link: '/NanGuo-mds/pages/p18' },
            { text: '第十九章 不死傀儡', link: '/NanGuo-mds/pages/p19' },
            { text: '第二十章 父名榜首', link: '/NanGuo-mds/pages/p20' },
            { text: '第二十一章 腥红朝会', link: '/NanGuo-mds/pages/p21' },
          ]},
        ]}
      ],
    },

    socialLinks: [
    { icon: 'github', link: 'https://github.com/superwfox/DocWeb' }
    ],

    search: {
      provider: 'local'
    }
  }
})
