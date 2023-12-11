# colors

::: tip 生效属性
#### color、background-color、border-color
:::
## 编写规则
```js{9-24}
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";

export default defineConfig({
  presets: [
    preset(),
  ],
  theme: {
    // 对于 `color`,`background-color`,`border-color` 属性生效
    colors: {
      '字母名称': '对应值',
      brand: '#ff0000', // 使用示例：字体颜色class="c-brand" 背景颜色class="bg-brand" 边框颜色class="border-brand"
      brandLine: '#aadcf4', // 使用示例：字体颜色class="c-brandLine" 背景颜色class="bg-brandLine" 边框颜色class="border-brandLine"
      brandBg: '#f6faff',
      // 对象形式
      warning: {
        DEFAULT:'#fab938', // 使用示例：字体颜色class="c-warning" 背景颜色class="bg-warning" 边框颜色class="border-warning"
        line: '#fcdb9b', // 使用示例：字体颜色class="c-warningLine" 背景颜色class="bg-warningLine" 边框颜色class="border-warningLine"
        bg: '#fff8ed'
      }
      ...
    },
  }
})
```

## 使用示例


## 文字颜色color
```js
<view class="c-brand"></view> // 生成： .c-brand{color:#ff0000;}
<view class="c-brandLine"></view> // 生成： .c-brandLine{color:#aadcf4;}
<view class="c-warning"></view> // 生成： .c-warning{color:#fab938;}
<view class="c-warningLine"></view> // 生成： .c-warningLine{color:#fcdb9b;}


```
## 背景颜色background-color
```js
<view class="bg-brand"></view> // 生成： .bg-brand{background-color:#ff0000;}
<view class="bg-brandLine"></view> // 生成： .bg-brandLine{background-color:#aadcf4;}
<view class="bg-warning"></view> // 生成： .bg-warning{background-color:#fab938;}
<view class="bg-warningLine"></view> // 生成： .bg-warningLine{background-color:#fcdb9b;}
```

## 边框颜色border-color
```js
<view class="border-brand"></view> // 生成： .border-brand{border: 1rpx soild #ff0000;}
<view class="border-brandLine"></view> // 生成： .border-brandLine{border: 1rpx soild #aadcf4;}
<view class="border-warning"></view> // 生成： .border-warning{border: 1rpx soild #fab938;}
<view class="border-warningLine"></view> // 生成： .border-warningLine{border: 1rpx soild #fcdb9b;}


```