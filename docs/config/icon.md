# icons 图标

## 导入自己的ttf文件，扩展字体图标

```js
  // icons为数组
  icons: [
    {
      prefix: 'aaa-', // 图标前缀 可以随意命名 避免多个字体间冲突
      path: './相当于当前项目，去ttf文件的路径/文件名.ttf',
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