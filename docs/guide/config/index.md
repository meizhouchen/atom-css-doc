# 配置
## 简单示例

```js
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";
import { myPreset } from "相对路径/myPresetObject"; // 自己写的预设规则

export default defineConfig({
    prefix: 'a-', // 前缀 用于老项目中避免样式冲突 默认无
    unit: 'rpx', // 宽高等的单位 默认px
    // 预设
    presets: [
      preset(), // 默认预设 
      myPreset // 自己写的预设，对象形式 import导入
    ],
    theme: {
      // 对于 `color`,`background-color`,`border-color` 属性生效
      colors: {
        brand: '#ff0000', // 使用示例：字体颜色class="c-brand" 背景颜色class="bg-brand" 边框颜色class="bc-brand"
        brandLine: '#aadcf4', // 使用示例：字体颜色class="c-brand-line" 背景颜色class="bg-brand-line" 边框颜色class="bc-brand-line"
        brandBg: '#f6faff',
        // 对象形式
        warning: {
          DEFAULT:'#fab938', // 使用示例：字体颜色class="c-warning" 背景颜色class="bg-warning" 边框颜色class="bc-warning"
          line: '#fcdb9b', // 使用示例：字体颜色class="c-warning-line" 背景颜色class="bg-warning-line" 边框颜色class="bc-warning-line"
          bg: '#fff8ed'
        }
      },
      // 对于`font-size`属性生效
      fontSize: {
        'xs': '20',
        'sm': '24',
        'md': '28',
        'lg': '32',
        'xl': '36',
        '2xl': '40',
        '3xl': '80',
        '4xl': '120',
      },
      // 对于`border-radius`属性生效
      borderRadius: {
        'xs': '20',
        'sm': '24',
        'md': '28',
        'lg': '32',
        'xl': '36',
        '2xl': '40',
        '3xl': '80',
        '4xl': '120',
      },
      // 对于`width`,`height`,`padding`,`margin`属性生效
      spacing: {
        'xs': '6',
        'sm': '10',
        'md': '16',
        'lg': '20',
        'xl': '26',
      },
    },
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
        (match: RegExpMatchArray, { unit }: Config) => `order:${match[1]};`,
        { completionItem: ['order-1'] } // 编辑器的代码提示候选项
      ]
    ],
    // ttf字体图标 可以随意配置多个ttf文件 
    icons: [
      {
        prefix: 'iuni-',  // 图标前缀 可以随意命名 避免多个字体间冲突 建议i开头 表示图标
        path: './static/fonts/uniicons.ttf', // 相对路径
      },
      {
        prefix: 'iuv-', // 使用   class="uv-level"
        path: './static/fonts/uview.ttf',
      },
      {
        prefix: 'itn-', // 使用   class="tn-font"
        path: './static/fonts/tuniao.ttf',
      },
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