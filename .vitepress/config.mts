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
        ]}
      ],
      '/titanfall-mds/': [
        { text: '泰坦陨落', items: [
          { text: '首页', link: '/titanfall-mds/' },
        ]}
      ],
      'NanGuo-mds/': [
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
