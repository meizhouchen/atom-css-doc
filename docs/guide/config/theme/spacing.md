# spacing
::: tip 生效属性
####  width、height、padding、margin
:::
## 编写规则
```js{9-19}
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";

export default defineConfig({
  presets: [
    preset(),
  ],
  theme: {
    对于`width`,`height`,`padding`,`margin`属性生效
    spacing: {
      '字母名称': '对应值',
      'xs': '6',
      'sm': '10',
      'md': '16',
      'lg': '20',
      'xl': '26',
    },
  }
})
```

## 使用示例

### 一个值
```js
<view class="p-md"></view> // 生成： .p-md{padding:16rpx;}
```
### 指定方向
```js
<view class="pt-md"></view> // 生成： .pt-md{padding-top:16rpx;}
<view class="ptb-md"></view> // 生成： .ptb-md{padding-top:16rpx;padding-bottom:16rpx;}
```

### 两个值
```js
<view class="p-lg-xl"></view> // 生成： .p-lg-xl{padding:20rpx 26rpx;}
```

### 四个值
```js
<view class="p-xs-s-l-xl"></view> // 生成： .p-xs-s-l-xl{padding:6rpx 10rpx 20rpx 26rpx;}
```