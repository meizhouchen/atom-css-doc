# icons 图标

## 导入自己的ttf文件，扩展字体图标

```js
  // icons为数组
  icons: [
    {
      prefix: 'aaa-', // 图标前缀 可以随意命名 避免多个字体间冲突 使用-结尾
      path: './static/font.ttf', // ./相当于当前项目，去ttf文件的路径/文件名.ttf
    },
    {
      prefix: 'i-', // 可以随意命名 避免多个字体间冲突
      path: '//at.alicdn.com/t/c/font_xxxxxxxxxxxxxxxxx.css', // 阿里巴巴图标库生成的项目css地址 可直接复制替换
    }
    {
      prefix: 'i-url-', // 可以随意命名 避免多个字体间冲突
      path: 'https://www.my.com/font.ttf', // 线上的字体文件位置
    }
  ]
```

示例
```js
export default defineConfig({
  // prefix: 'a-',
  presets: [preset()], // 预设
  icons: [
    {
      prefix: 'uni-', // 使用 class="uni-color"
      path: './static/fonts/uniicons.ttf',
    },
    {
      prefix: 'uv-', // 使用   class="uv-level"
      path: './static/fonts/uview.ttf',
    },
    {
      prefix: 'tn-', // 使用   class="tn-font"
      path: './static/fonts/tuniao.ttf',
    },
  ]
})
```