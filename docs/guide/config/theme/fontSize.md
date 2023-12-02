# fontSize
::: tip 生效属性
#### font-size
:::
## 编写规则
```js{9-22}
// atomcss.config.js
import { defineConfig } from '@meizhou/atomcss'
import { preset } from "@meizhou/atomcss/preset";

export default defineConfig({
  presets: [
    preset(),
  ],
  theme: {
    // 对于`font-size`属性生效
    fontSize: {
      '字母名称': '对应值',
      'xs': '20',
      'sm': '24',
      'md': '28',
      'lg': '32',
      'xl': '36',
      '2xl': '40',
      '3xl': '80',
      '4xl': '120',
    },
  }
})
```

## 使用示例

