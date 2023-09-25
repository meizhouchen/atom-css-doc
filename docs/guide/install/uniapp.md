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
## 第二步、修改 vue 配置文件
::: code-group
```js [vue2]
// vue.config.js
const { atomcss } = require('@meizhou/atomcss')

module.exports = {
  configureWebpack: {
    plugins: [
      atomcss()
    ]
  }
}
```

```js [vue3]
// vite.config.js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni';
import { atomcss } from "@meizhou/atomcss";

export default defineConfig({
  plugins: [
    atomcss(),
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
    prefix: 'a-', // 前缀 用于避免样式冲突 默认值: '' 没有前缀
    unit: 'px', // 宽高等的单位  默认值: px
    presets: [preset()], //预设 
})
```

## 第四步、使用



```vue
<template>
  <view class="a-p-32 a-m-32 a-c-#2">
    <view class="a-w-100%">页面内容</view>
  </view>
</template>
```
上面的class样式将会自动被编译为：
```css
.a-p-32 { pading: 32px; }
.a-m-32 { magin: 32px; }
.a-c-_2 { color: #222222; }
.a-wh-80 { width: 80px; height: 80px;}
.a-w-100_ { width: 100%; }
```
### 示例
<div class="a-c-white">
  <div class="a-flex a-c-white a-jc-c">
    <div class="a-bg-#2  a-radius-10 a-icon-100 a-mr-10"  style="background-color:#222222">flex</div>
    <div class="a-bg-#9  a-flex  a-jc-c a-ai-c a-w-100 a-radius-30" style="background-color:#999999">flex</div>
  </div>
</div>

对应代码

```vue
<div class="c-white">
  <div class="flex c-white jc-c">
    <div class="bg-#2 radius-10 mr-10 wh-100">flex</div>
    <div class="bg-#9 radius-30 flex jc-c ai-c w-100">flex</div>
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
![](uniapp_files/1.png)
## 交流群
![](uniapp_files/2.jpg)