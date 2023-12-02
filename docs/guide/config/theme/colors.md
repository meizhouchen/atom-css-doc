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
      brand: '#ff0000', // 使用示例：字体颜色class="c-brand" 背景颜色class="bg-brand" 边框颜色class="bc-brand"
      brandLine: '#aadcf4', // 使用示例：字体颜色class="c-brand-line" 背景颜色class="bg-brand-line" 边框颜色class="bc-brand-line"
      brandBg: '#f6faff',
      // 对象形式
      warning: {
        DEFAULT:'#fab938', // 使用示例：字体颜色class="c-warning" 背景颜色class="bg-warning" 边框颜色class="bc-warning"
        line: '#fcdb9b', // 使用示例：字体颜色class="c-warning-line" 背景颜色class="bg-warning-line" 边框颜色class="bc-warning-line"
        bg: '#fff8ed'
      }
      ...
    },
  }
})
```

## 使用示例
::: warning
brandLine会被转为brand-line
:::


## 文字颜色color
```js
<view class="c-brand"></view> // 生成： .c-brand{color:#ff0000;}

// brandLine会被转为brand-line
<view class="c-brand-line"></view> // 生成： .c-brand-line{color:#aadcf4;}
<view class="c-warning"></view> // 生成： .c-warning{color:#fab938;}
<view class="c-warning-line"></view> // 生成： .c-warning-line{color:#fcdb9b;}


```
## 背景颜色background-color
```js
<view class="bg-brand"></view> // 生成： .bg-brand{background-color:#ff0000;}

// brandLine会被转为brand-line
<view class="bg-brand-line"></view> // 生成： .bg-brand-line{background-color:#aadcf4;}
<view class="bg-warning"></view> // 生成： .bg-warning{background-color:#fab938;}
<view class="bg-warning-line"></view> // 生成： .bg-warning-line{background-color:#fcdb9b;}


```

## 边框颜色border-color
```js
<view class="bc-brand"></view> // 生成： .bc-brand{border-color:#ff0000;}

// brandLine会被转为brand-line
<view class="bc-brand-line"></view> // 生成： .bc-brand-line{border-color:#aadcf4;}
<view class="bc-warning"></view> // 生成： .bc-warning{border-color:#fab938;}
<view class="bc-warning-line"></view> // 生成： .bc-warning-line{border-color:#fcdb9b;}


```