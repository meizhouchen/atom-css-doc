# 预设：一套定义好的样式规则
预设是一组写好的配置，把你自己喜欢的规则，统一管理，快速迁移使用

## 编写预设
```js
export const myPreset = () => {
  // 进行一些处理
  
  return {
    rules: [
      {
        'flex': 'display: flex;'
      },
      [/^m-(\d+)$/, (match, { unit }) => {return `margin:${match[1]}${unit};`}],
    ]
  }
}
```

## 导入使用

```js{4,9}
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";
import myPreset from "相对路径/myPreset";

export default defineConfig({
  presets: [
    preset(),
    myPreset()
  ] 
})
```