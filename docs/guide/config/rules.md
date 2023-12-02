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
    // 静态规则：
    {
      // class="c-custom"  => .c-custom{ color:#FFFFFF; }
      'c-custom': 'color:#FFFFFF;',
      
      // class="center"  => .center{ justify-content: center;align-items: center; }
      'center': 'justify-content: center;align-items: center;',
      
      // class="自定义的class"  => .自定义的class{ 对应生成的值 }
      '自定义的class': '对应生成的值',
    },
    
    // 动态规则：
    // [正则表达式, (正则匹配内容, { unit }) => { return '对应生成的值'}],
    [ /^m-(\d+)$/, (match, { unit }) => `margin: ${match[1]}${unit};` ],
    // 解释：
    // /^m-(\d+)$/ 会被匹配到形如 m-{数值} ，例如： m-10
    
    // (match, { unit }) => `margin: ${match[1]}${unit};`
    // match是正则匹配到的内容  match[1]对应(\d+)匹配到的数值
    // unit 是配置文件中的值 默认为px
    // `margin: ${match[1]}${unit};` => 'margin: 10px'
    // 最终生成：.m-10{ margin: 10px }
  ]
})
```

## 动态规则
> 动态规则使用 match 进行匹配，匹配有结果，调用数组第二项的方法，并把匹配值当做参数
```js
rules: [
  [/^m-(\d+)$/, (match, { unit }) => `margin:${match[1]}${unit};`],
]

<div class="m-10"></div>

m-10 会被/^m-(\d+)$/匹配到
这时会调用(match, { unit }) => `margin:${match[1]}${unit};`
得到返回值 => { 'margin': `10rpx;` } // unit为配置的单位 默认rpx

m-10 会全局生成css样式
.m-10{margin:10rpx;;}
```
## 静态规则

```js
rules: [
  // 数组形式
  ['flex', 'display:flex;'],
  // 对象形式
  {
    'jc-c': 'justify-content: center;',
    
    'border-main': 'border:2rpx solid #FB7302;',
    'border-E6': 'border:2rpx solid #E6E6E6;',
    
    'c-white': 'color:#FFFFFF;',
  }
]

当rules数组中增加了上面这些规则

对于：<div class="flex jc-c"></div>

将会根据上面rules定义的规则，匹配class中的 flex jc-c

全局生成css样式

.flex{display:flex;}
.jc-c{justify-content: center;}

```