---
layout: home

hero:
  name: 实用功能
  text: 独家生存辅助
  tagline: 让你在种植作物 死亡重生 建筑过程中获得更好体验
  actions:
      - theme: alt
        text: 回到大纲
        link: mc-server-mds/crafts

features:
  - icon:
     src: /images/farm.png
     width: 50px
     height: 50px
    title: 自动播种
    details: 自动种植作物 兼容大多数作物
    link: "#b1"
  - icon: 
     src: /images/Invicon_Dune_Armor_Trim.png
     width: 32px
     height: 32px
    title: 回溯
    details: 保存您在生存世界的位置进度
    link: "#b2"
  - icon: 
     src: /images/Desert_Small_House.png
    title: 建筑之杖
    details: 快速搭建虚影 无视方向打印
    link: "#b3"
  - icon: 📜
    title: 菜单
    details: 使用 Shift + F 快速启用
    link: "#b4"
  - icon: 
     src: /images/luckPotion.png
     width: 38px
     height: 38px
    title: 飞行药水
    details: 获得永久飞行能力
    link: "#b5"
  - icon: 
     src: /images/box.png
     width: 38px
     height: 38px
    title: 手持工具
    details: 快速启用工具
    link: "#b6"
  - icon: 
     src: /images/inf.png
     width: 38px
     height: 38px
    title: 查询你的信息
    details: 使用命令 /inf
    link: "#b7"
  - icon:
     src: /images/slime.png
     width: 38px
     height: 38px
    title: 检查史莱姆区块
    details: 使用命令 /isc
    link: "#b8"
  - icon:
     src: /images/baby.gif
     width: 38px
     height: 38px
    title: 保持幼年状态
    details: 让他一直可爱下去吧！
    link: "#b9"
  - icon:
     src: /images/coral.png
     width: 38px
     height: 38px
    title: 珊瑚保活
    details: 珊瑚不会轻易失活
    link: "#b10"
  - icon:
     src: /images/recipe.png
     width: 38px
     height: 38px
    title: 更多配方
    details: 服务器恢复和新增了配方
    link: "#b11"
  
  
---
{#b1}
## 自动播种
`手持`农作物种子 并 在耕地上`走动`，即可在`5 x 5`范围内自动播下种子
:::info 支持作物 ：
`小麦种子`，`甜菜根种子`，`西瓜种子`，`南瓜种子`，`胡萝卜`，`土豆`，`火把花种子`，`地狱疣`
:::

## 回溯

保存您在生存世界的进度，当你回到主城或者死亡重生时，可以快速回到你离开的地方
{#b2}

{#b3}
## 建筑之杖
内置`罗马柱`，`球体`，`长方体`三种预设，均可做细微调整，帮您快速搭建建筑主体。完成细节时还可以使用您或别人完成的`自制模板`。建筑完成后，您还可以将建筑保存为`建筑码`，分享给其他玩家使用。

打印功能类似于投影打印机，但是你可以快速搭建虚影，完成后背包中存在物品即可无视`方向`和`距离`，快速搭建建筑。

<script setup lang="ts">
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'
const features = [
  {
    icon: '📺',
    title: '详细视频--通过视频快速了解',
    link: 'https://www.bilibili.com/video/BV1aw2ZBcEaT/'
  }
]
</script>
<VPFeatures :features="features" />

## 菜单

使用 Shift + F 快速启用
:::info 【基岩版】
 需要使用命令/chestmenu 或 简写/cm
:::
{#b4}

## 飞行药水

 ### 合成配方：【无序配方】
`3` * `循环命令方块` + `3` * `普通命令方块` + `3` * `链式命令方块`

在服用后，你便可以拥有`永久`的飞行能力。
{#b5}

## 手持工具

手持`受支持的`的工具，蹲下即可快捷启用，省略放置方块步骤。
:::info 支持工具 ：
`工作台`，`末影箱`，`各种潜影盒`，`铁砧`
:::
{#b6}

## 查询你的信息

### 使用命令 `/inf`
&nbsp;这是命令`/information`的简写，他能获取你的
:::info 具体信息
`在线时间(岁 1岁 = 45s)` `天赋点数情况` `VIP身份`

`使用的客户端` `PING` `升级所需经验点数` `床的位置`
:::
{#b7}

## 检查史莱姆区块

### 使用命令 `/isc`
&nbsp;这是命令`/isSlimeChunk`的简写，它能获取当前位置所处的`区块`是否是`史莱姆区块`

{#b8}

## 保持幼年状态

&nbsp;将生物命名为"`M`"，即可保持幼年状态，不会变成成年生物。
:::info
 仅支持存在幼年状态的生物（乐魂），就算是成年状态也可以返老还童
:::
{#b9}

## 珊瑚保活

&nbsp;为了方便珊瑚造景的施工，当`珊瑚`上有任意其他方块，珊瑚不会失活
{#b10}

## 更多配方
{#b11}

&nbsp; 服务器恢复和新增了配方
:::warning 附魔金苹果
 `8` * `金块` + `1` * `苹果`
:::

:::warning 拆解石英块
 你可以将石英块拆解为石英
:::

:::warning 木炭
 `1` * `火把`
:::


