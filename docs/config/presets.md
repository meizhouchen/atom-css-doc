# 预设，技一套定义好的样式规则
预设是一组写好的配置，把你自己喜欢的规则，统一管理，快速迁移使用

## 第一种，对象形式
```js
export const myPreset = {
  unit: 'px', // 宽高等的单位 
}
```
导入使用
```js{4,11}
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";
import myPreset from "相对路径/myPreset";

export default defineConfig({
    prefix: 'a-',
    unit: 'px', // 宽高等的单位
    presets: [
      preset(),
      myPreset
    ], //预设
})
```
## 第二种，函数形式
```js
export const myPreset = (config) => {
  const { unit='rpx' } = config
  return {
    unit, // 宽高等的单位 
  }
}
```
导入使用
```js{6,14}
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";
import myPreset from "相对路径/myPreset";

export default defineConfig({
  presets: [
    preset(),
    myPreset({unit: px})
  ] 
})
```