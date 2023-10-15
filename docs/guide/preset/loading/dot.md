# 纯css文字loading

基础使用
<div class="a-loading-dot a-w-60"></div>

```html
<div class="loading-dot w-60"></div>
```

修改颜色：c-red
<div class="a-loading-dot a-w-60 a-c-red"></div>

```html
<div class="loading-dot w-60 c-red"></div>
```

修改大小：w-120 即修改div宽度
<div class="a-loading-dot a-w-120"></div>

```html
<div class="loading-dot w-120"></div>
```

## 更多样式
<div class="a-loading-dot1 a-loading-dot2 a-loading-dot3 a-loading-dot4 a-loading-dot5 a-loading-dot6 a-loading-dot7 a-w-20" style="visibility: hidden;"></div>

<div class="a-flex a-wrap a-c-red">
  <div class="a-border a-p-10 a-mr-10 a-br-10 a-mb-20 a-w-100 " v-for="(item, index) in list" :key="index">
    <div class="a-mb-20  " :class="'a-' + item"></div>
    {{item}}
  </div>
</div>

<script setup>
import { ref } from 'vue'

const list = [
  'loading-dot',
  'loading-dot1',
  'loading-dot2 a-w-20',
  'loading-dot3 a-w-20',
  'loading-dot4 ',
  'loading-dot5 a-w-20',
  'loading-dot6 a-w-20',
  'loading-dot7 a-w-20',
]

</script> 

