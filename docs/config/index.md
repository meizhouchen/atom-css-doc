# 配置
## 简单示例

```js
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";
import { myPreset } from "相对路径/myPresetObject"; // 自己写的预设规则

export default defineConfig({
    prefix: 'a-', // 前缀 用于避免样式冲突
    unit: 'px', // 宽高等的单位
    // 预设
    presets: [
      preset() // 插件默认预设
      myPreset // 自己写的预设，对象形式 import导入
    ],
    // 单一的规则
    rules: [
      // 数组形式
      ['flex', 'display:flex;'],
      // 对象形式
      {
        'jc-c': 'justify-content: center;',
        
        'border-main': 'border:2rpx solid #FB7302;',
        'border-E6': 'border:2rpx solid #E6E6E6;',
        
        'c-white': 'color:#FFFFFF;',
        'c-#f': 'color:#ffffff;',
      },
      // 动态规则 order-1 生成 .order-1{order:1}
      [
        /^(?:order)-(-?\d*\.?\d+)$/,
        (match: RegExpMatchArray, { unit }: Config) => ({
          order: `${match[1]};`
        }),
        { completionItem: ['order-1'] } // 编辑器的代码提示候选项
      ]
    ]
})
```
自己写的预设，对象形式
```js
// 路径/myPresetObject.js
export const myPreset = {
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
    ]
}
```