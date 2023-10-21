
## 安装
::: code-group
```bash [npm]
npm i -D @meizhou/atomcss
```

```bash [pnpm]
pnpm i -D @meizhou/atomcss
```
:::
## 修改vue配置文件
```js
// vue.config.js
const { atomcss } = require('@meizhou/atomcss')
const { preset } = require('@meizhou/atomcss/preset')

module.exports = {
  configureWebpack: {
    plugins: [
      allin({
        presets: [preset()]
      })
    ]
  }
}
```