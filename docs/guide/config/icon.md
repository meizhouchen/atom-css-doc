# icons 图标
::: tip 摇树优化
通过这种方式导入的ttf图标，将会将使用到的图标打包近项目，做了摇树优化，减小项目体积
:::
## 导入 ttf 文件，扩展字体图标

```js
  // icons为数组
  icons: [
    {
      prefix: 'aaa-', // 图标前缀 可以随意命名 避免多个字体间冲突
      path: './相对于当前项目去 ttf 文件的路径/文件.ttf', // 相对路径
    }
  ]
```

## 配置示例
建议使用 i 开头，表示图标

```js{5-18}
// atomcss.config.js
export default defineConfig({
  // prefix: 'a-',
  presets: [preset()], // 预设
  icons: [
    {
      prefix: 'iuni-', // 使用 class="uni-color"
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

## 使用示例
```vue
// 给text标签增加 class 即可
<text class="iuni-bars "></text>

// 改颜色  增加颜色样式c-brand即可 或者 使用style样式进行修改
<text class="iuni-wallet c-brand"></text>

// 改大小  增加文字大小样式fs-80即可
<text class="iuv-account fs-80"></text>
```