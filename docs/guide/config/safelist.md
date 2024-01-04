# safelist 

atomcss是通过匹配class进行动态生成css样式,对于动态拼接的class样式,并不会生效

```vue
<template>
  <view>
    <view :class="`p-${size}`"></view> // 这样动态拼接的 class 样式 p-1 并不生效
    
    <view
      v-for="(item, index) in list"
      :key="index"
      :class="item" // 这样的 class 样式并不生效
    >
      {{item}}
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      size: 1,
      list: ['p-1', 'p-2', 'p-3', 'p-4'],
    }
  }
}
```

## 如何使得动态拼接的 class 样式能生效
通过配置`safelist`选项

```js{9-11}
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";

export default defineConfig({
  presets: [
    preset(),
  ],
  safelist: [
    'p-1 p-2 p-3 p-4'.split(' ')
  ]
})
```
下面的 css 一定会被生成
```css
.p-1 { padding: 1rpx; }
.p-2 { padding: 2rpx; }
.p-3 { padding: 3rpx; }
.p-4 { padding: 4rpx; }
```

此时
```vue
    <view :class="`p-${size}`"></view> // 生效
    
    <view
      v-for="(item, index) in list"
      :key="index"
      :class="item" // 生效
    >
      {{item}}
    </view>
```