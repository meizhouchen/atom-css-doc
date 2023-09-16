# 安装
## 第一步、安装@meizhou/atomcss
::: code-group
```bash [npm]
npm i -D @meizhou/atomcss
```

```bash [pnpm]
pnpm i -D @meizhou/atomcss
```
:::
## 第二步、修改 vue 配置文件
::: code-group
```js [vue2]
// vue.config.js
const { atomcss } = require('@meizhou/atomcss')

module.exports = {
  configureWebpack: {
    plugins: [
      atomcss()
    ]
  }
}
```

```js [vue3]
// vite.config.js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni';
import { atomcss } from "@meizhou/atomcss";

export default defineConfig({
  plugins: [
    uni(),
    atomcss()
  ]
})
```
:::
## 第三步、增加 atomcss 配置文件
```js
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";

export default defineConfig({
    prefix: 'a-',
    presets: [preset()], //预设
})
```
## 项目结构示例
![目录结构](uniapp_files/1.jpg)