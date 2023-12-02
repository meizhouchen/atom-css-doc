# borderRadius

::: tip 生效属性
#### border-radius
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
    // 对于`border-radius`属性生效
    borderRadius: {
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

