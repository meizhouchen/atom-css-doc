# 纯css文字loading

基础使用
<div class="a-loading-text"></div>
<div class="a-loading-text1"></div>

```html
<div class="loading-text"></div>
<div class="loading-text1"></div>
```

修改颜色：c-red
<div class="a-loading-text a-c-red"></div>

```html
<div class="loading-text c-red"></div>
```

修改大小: fs-30 即修改字体大小 
<div class="a-loading-text a-c-red a-fs-30"></div>


```html
<div class="loading-text fs-30"></div>
```

## 更多样式

<div class="a-loading-text2 a-loading-text3" style="visibility: hidden;"></div>

<div class="a-flex a-wrap">

  <div class="a-border a-p-10 a-mr-10 a-br-10 a-mb-20 a-w-100 " v-for="(item, index) in list" :key="index">
    <div class="a-mb-20" :class="'a-' + item"></div>
    {{item}}
  </div>
</div>

<script setup>
import { ref } from 'vue'

const list = [
  'loading-text',
  'loading-text1',
  'loading-text2',
  'loading-text3'
]

</script> 

<style>

/* .a-loading-text2 {width: fit-content;clip-path: inset(0 3ch 0 0);animation: _lt2 1s steps(4) infinite;}
.a-loading-text2:before {content:"Loading..."}
@keyframes _lt2 {to{clip-path: inset(0 -1ch 0 0)}} */
</style>
