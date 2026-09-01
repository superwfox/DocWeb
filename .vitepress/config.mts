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
      { text: '实习成长', link: '/dailyReport/' },
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
      '/dailyReport/': [
        { text: '实习成长记录', items: [
          { text: '成长总览', link: '/dailyReport/' },
        ]},
        { text: '第 1 周 · 初入职场', collapsed: true, items: [
          { text: '7 月 7 日', link: '/dailyReport/7.7' },
          { text: '7 月 8 日', link: '/dailyReport/7.8' },
          { text: '7 月 9 日', link: '/dailyReport/7.9' },
          { text: '7 月 10 日', link: '/dailyReport/7.10' },
        ]},
        { text: '第 2 周 · Agent 与 Web 起步', collapsed: true, items: [
          { text: '7 月 13 日', link: '/dailyReport/7.13' },
          { text: '7 月 14 日', link: '/dailyReport/7.14' },
          { text: '7 月 15 日', link: '/dailyReport/7.15' },
          { text: '7 月 16 日', link: '/dailyReport/7.16' },
          { text: '7 月 17 日', link: '/dailyReport/7.17' },
        ]},
        { text: '第 3 周 · 需求落地', collapsed: true, items: [
          { text: '7 月 20 日', link: '/dailyReport/7.20' },
          { text: '7 月 21 日', link: '/dailyReport/7.21' },
          { text: '7 月 22 日', link: '/dailyReport/7.22' },
          { text: '7 月 23 日', link: '/dailyReport/7.23' },
          { text: '7 月 24 日', link: '/dailyReport/7.24' },
        ]},
        { text: '第 4 周 · 部署与运营', collapsed: true, items: [
          { text: '7 月 27 日', link: '/dailyReport/7.27' },
          { text: '7 月 28 日', link: '/dailyReport/7.28' },
          { text: '7 月 29 日', link: '/dailyReport/7.29' },
          { text: '7 月 30 日', link: '/dailyReport/7.30' },
          { text: '7 月 31 日', link: '/dailyReport/7.31' },
          { text: '8 月 1 日', link: '/dailyReport/8.1' },
        ]},
        { text: '第 5 周 · 设计与自动化', collapsed: true, items: [
          { text: '8 月 3 日', link: '/dailyReport/8.3' },
          { text: '8 月 4 日', link: '/dailyReport/8.4' },
          { text: '8 月 5 日', link: '/dailyReport/8.5' },
          { text: '8 月 6 日', link: '/dailyReport/8.6' },
          { text: '8 月 7 日', link: '/dailyReport/8.7' },
        ]},
        { text: '第 6 周 · CRM 与项目规划', collapsed: true, items: [
          { text: '8 月 10 日', link: '/dailyReport/8.10' },
          { text: '8 月 11 日', link: '/dailyReport/8.11' },
          { text: '8 月 12 日', link: '/dailyReport/8.12' },
          { text: '8 月 13 日', link: '/dailyReport/8.13' },
          { text: '8 月 14 日', link: '/dailyReport/8.14' },
        ]},
        { text: '第 7 周 · 项目启动与本地化', collapsed: true, items: [
          { text: '8 月 16 日', link: '/dailyReport/8.16' },
          { text: '8 月 17 日', link: '/dailyReport/8.17' },
          { text: '8 月 18 日', link: '/dailyReport/8.18' },
          { text: '8 月 19 日', link: '/dailyReport/8.19' },
          { text: '8 月 20 日', link: '/dailyReport/8.20' },
          { text: '8 月 21 日', link: '/dailyReport/8.21' },
        ]},
        { text: '第 8 周 · 智贸产品深化', collapsed: true, items: [
          { text: '8 月 23 日', link: '/dailyReport/8.23' },
          { text: '8 月 24 日', link: '/dailyReport/8.24' },
          { text: '8 月 25 日', link: '/dailyReport/8.25' },
          { text: '8 月 26 日', link: '/dailyReport/8.26' },
          { text: '8 月 27 日', link: '/dailyReport/8.27' },
          { text: '8 月 28 日', link: '/dailyReport/8.28' },
        ]},
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
            { text: '第十章 美人野兽', link: '/NanGuo-mds/pages/p10' },
            { text: '第十一章 御前戏弄', link: '/NanGuo-mds/pages/p11' },
            { text: '第十二章 光影囚廊', link: '/NanGuo-mds/pages/p12' },
            { text: '第十三章 朝堂染血', link: '/NanGuo-mds/pages/p13' },
            { text: '第十四章 雾中重逢', link: '/NanGuo-mds/pages/p14' },
            { text: '第十五章 不省人事', link: '/NanGuo-mds/pages/p15' },
            { text: '第十六章 醉杀流放', link: '/NanGuo-mds/pages/p16' },
            { text: '第十七章 进退两难', link: '/NanGuo-mds/pages/p17' },
            { text: '第十八章 人仰马翻', link: '/NanGuo-mds/pages/p18' },
            { text: '第十九章 全盘皆输', link: '/NanGuo-mds/pages/p19' },
            { text: '第二十章 自以为是', link: '/NanGuo-mds/pages/p20' },
            { text: '第二十一章 鲜血饱腹', link: '/NanGuo-mds/pages/p21' },
            { text: '第二十二章 温暖的陷阱', link: '/NanGuo-mds/pages/p22' },
            { text: '第二十三章 雨过天晴', link: '/NanGuo-mds/pages/p23' },
            { text: '第二十四章 情窦初开', link: '/NanGuo-mds/pages/p24' },
            { text: '第二十五章 感时花溅泪', link: '/NanGuo-mds/pages/p25' },
            { text: '第二十六章 黑云压城', link: '/NanGuo-mds/pages/p26' },
            { text: '第二十七章 蓄势待发', link: '/NanGuo-mds/pages/p27' },
            { text: '第二十八章 破军之师', link: '/NanGuo-mds/pages/p28' },
            { text: '第二十九章 生死难料', link: '/NanGuo-mds/pages/p29' },
            { text: '第三十章 游子身上衣', link: '/NanGuo-mds/pages/p30' },
            { text: '第三十一章 花落故水', link: '/NanGuo-mds/pages/p31' },
            { text: '第三十二章 ', link: '/NanGuo-mds/pages/p32' },
            { text: '第三十三章 ', link: '/NanGuo-mds/pages/p33' },
            { text: '第三十四章 ', link: '/NanGuo-mds/pages/p34' },
            { text: '第三十五章 ', link: '/NanGuo-mds/pages/p35' },
            { text: '第三十六章 ', link: '/NanGuo-mds/pages/p36' },
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
