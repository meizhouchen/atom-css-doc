# 全局添加前缀

## 前缀 prefix
用于避免样式冲突，一般在老项目中，才会用到

```js{7}
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";

export default defineConfig({
  unit: 'rpx',
  prefix: 'a-', // 前缀
  presets: [
    preset(),
  ] 
})
```

