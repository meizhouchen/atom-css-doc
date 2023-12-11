# rules 规则

```js{9-34}
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";

export default defineConfig({
  presets: [
    preset(),
  ],
  // 自定义规则
  rules: [
    // 数组形式
    ['flex', 'display:flex;'],
    // 对象形式
    {
      'jc-c': 'justify-content: center;',
      
      'border-main': 'border:2rpx solid #FB7302;',
      'border-E6': 'border:2rpx solid #E6E6E6;',
      
      'c-white': 'color:#FFFFFF;',
    },
    
    // [正则表达式, (正则匹配内容, { unit }) => { return '对应生成的值'}],
    [ /^m-(\d+)$/, (match, { unit }) => `margin: ${match[1]}${unit};` ],
   
  ]
})
```

##  解释
> 使用 match 进行匹配，匹配有结果，调用数组第二项的方法，并把匹配值当做参数

编写规则
```js
rules: [
  // [正则表达式, (正则匹配内容, { unit }) => { return '对应生成的值'}],
  [/^m-(\d+)$/, (match, { unit }) => `margin:${match[1]}${unit};`],
]
```

当项目中存在`m-10`，会被 `/^m-(\d+)$/` 匹配到，生成： `.m-10{margin:10rpx;}`
```vue
<view class="m-10"></view>
```
