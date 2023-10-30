# 安装
## 第一步、安装@meizhou/atomcss
::: code-group
```bash [npm]
npm i -D @meizhou/atomcss
```

```bash [pnpm]
pnpm i -D @meizhou/atomcss
```
:::
## 第二步、新增或修改 vue 配置文件
::: code-group
```js [vue2]
// vue.config.js
const { atomcss } = require('@meizhou/atomcss') // 导入插件

module.exports = {
  configureWebpack: {
    plugins: [
      atomcss() // 使用插件
    ]
  }
}
```

```js [vue3]
// vite.config.js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni';
import { atomcss } from "@meizhou/atomcss"; // 导入插件

export default defineConfig({
  plugins: [
    atomcss(), // 使用插件
    uni()
  ]
})
```

:::
## 第三步、增加 atomcss 配置文件
```js
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";

export default defineConfig({
    // prefix: 'a-', // 前缀 用于避免样式冲突 默认值: '' 没有前缀
    unit: 'px', // 宽高等的单位  默认值: px
    presets: [preset()], //预设 
})
```

## 第四步、使用


```vue
<template>
  <view class="p-32 m-32 c-#2">
    <view class="w-100%">页面内容</view>
  </view>
</template>
```
上面的p-32、m-32、c-#2、w-100%将会自动生成下面 css 样式,不需要写css
```css
.p-32 { pading: 32px; }
.m-32 { magin: 32px; }
.c-_2 { color: #222222; }
.wh-80 { width: 80px; height: 80px;}
.w-100_ { width: 100%; }
```
### 示例
<div class="a-c-white">
  <div class="a-flex a-c-white a-jc-c">
    <div class="a-bg-#2b9939  a-radius-8 a-wh-50 a-mr-10 a-flex a-jc-c a-ai-c a-fs-40"  style="background-color:#2b9939">A</div>
    <div class="a-bg-#9  a-flex  a-jc-c a-ai-c a-w-100 a-radius-30 a-mr-10" style="background-color:#999999">atomcss</div>
  </div>
</div>

对应代码

```vue
<div class="c-white">
  <div class="flex c-white jc-c">
    <div class="bg-#2b9939 radius-8 mr-10 wh-100 flex jc-c ai-c fs-40">A</div>
    <div class="bg-#9 radius-30 flex jc-c ai-c w-100">atomcss</div>
  </div>
</div>
```
## 代码提示
- ✅ class 代码提示
- ✅ 悬浮class，查看对应的css样式
- ❌ 直接写style，生成对应class
- ❌ 根据主题，切换提示样式的颜色
[HBuilderX插件地址](https://ext.dcloud.net.cn/plugin?id=14737)

## 项目结构示例
<img class="a-w-400" src="/1.png" style="background-color:#999999"> 

## 交流群
<div class="a-flex c-white a-jc-sa">
<img class="a-w-200" src="/1.jpg" style="background-color:#999999">
<img class="a-w-200" src="/2.jpg" style="background-color:#999999"> 
</div>

<script setup>
import { withBase, useData } from 'vitepress'

</script>
