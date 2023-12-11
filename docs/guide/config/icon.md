# icons 图标
::: tip 摇树优化
通过这种方式导入的ttf图标，将会将使用到的图标打包近项目，做了摇树优化，减小项目体积
:::


## 扩展字体图标

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
建议使用 `i-{name}-` 开头，便于区分各个ttf文件

```js{5-18}
// atomcss.config.js
export default defineConfig({
  // prefix: 'a-',
  presets: [preset()], // 预设
  icons: [
    {
      prefix: 'i-uni-', // 使用 class="i-uni-color"
      path: './static/fonts/uniicons.ttf', // 相对路径
    },
    {
      prefix: 'i-uv-', // 使用   class="i-uv-level"
      path: './static/fonts/uview.ttf',
    },
    {
      prefix: 'i-tn-', // 使用   class="i-tn-font"
      path: './static/fonts/tuniao.ttf',
    },
  ]
})
```

## 使用示例
```vue
// 给text标签增加 class 即可
<text class="i-uni-bars "></text>

// 改颜色  增加颜色样式c-brand即可 或者 使用style样式进行修改
<text class="i-uni-wallet c-brand"></text>

// 改大小  增加文字大小样式fs-80即可
<text class="i-uv-account fs-80"></text>
```