## 把生成的css输出到指定路径的文件中
便于查看生成的css内容，便于开发者知道有哪些css会被影响

```js{9}
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";
import myPreset from "相对路径/myPreset";

export default defineConfig({
    prefix: 'a-',
    unit: 'px', // 宽高等的单位
    preview:'./preview.css',
    presets: [
      preset(),
      myPreset
    ], //预设
    
})
```

项目中自动生成的css样式，会统一生成到preview.css文件中，不需要引入项目，不影响项目，单纯用于预览
```css
// preview.css
// 项目中生成的css样式
...
```