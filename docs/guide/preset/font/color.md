# 颜色

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['c-#123', 'color:#123;'],
  ['c-#1', 'color:#111111;'],
  ['c-#12', 'color:#121212;'],
  ['c-#123456', 'color:#123456;'],
  ['c-#1111111', '匹配不到 不会生成样式'],
  ['c-#', '匹配不到 不会生成样式'],
  ['c-#d23', 'color:#d23;'],
  ['c-#d2', 'color:#d2d2d2;'],
  ['c-#d', 'color:#dddddd;'],
  ['c-#0', 'color:#000000;'],
  
  ['c-red', 'color:red;'],
  ['c-red1', '匹配不到 不会生成样式'],
  ['c-cur', 'color:currentcolor;'],
  ['c-initial', 'color:initial;'],
  
  ['bg-#1', 'background-color:#111111;'],
  ['bg-#d2', 'background-color:#d2d2d2;'],
  ['bg-#d23', 'background-color:#d23;'],
  ['bg-#d', 'background-color:#dddddd;'],
  ['bg-red', 'background-color:red;'],
  ['bg-red1', '匹配不到 不会生成样式'],
  
  ['rgba-1-2-3-4', 'color:rgba(1,2,3,.4);'],
  ['rgba-1-2-3-0.6', 'color:rgba(1,2,3,0.6);'],
  ['rgba-1-2-3-.6', 'color:rgba(1,2,3,.6);'],
  
  ['gba-10-222-256', 'color:gba(10%,222%,256%);'],
])
</script>

<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class=" a-flex-1" style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-jc-sb a-ai-c a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>


<!-- 命名规律：`{ellipsis|line-clamp}-{数值}` -->

## 使用示例

<div class="a-relative a-bg-rgba-192-132-252-.2 a-p-10  a-br-10 a-flex a-col a-ai-c a-jc-c a-ta-c" style="background-color: rgba(192,132,252,.2);border: solid 1px #c084fc;">
  <div class="a-ellipsis-1 a-w-300 a-border a-p-10  a-br-10 a-mb-10 a-c-red" style="border: solid 1px #c084fc;">c-red 红色</div>
  <div class="a-ellipsis-1 a-w-300 a-border a-p-10  a-br-10 a-mb-10  " style="border: solid 1px #c084fc;color: #999;">c-#9</div>
  <div class="a-ellipsis-1 a-w-300 a-border a-p-10  a-br-10 a-mb-10  " style="border: solid 1px #c084fc;color: #8710fd;">c-#8710fd</div>
  <div class="a-ellipsis-1 a-w-300 a-border a-p-10  a-br-10 a-mb-10 " style="border: solid 1px #c084fc;color: rgba(255,0,0,.6);">rgba-255-0-0-.6</div>
</div>

```html
<div class="c-red">c-red</div>
<div class="c-#9">c-#9</div>
<div class="c-#8710fd">c-#8710fd</div>
<div class="rgba-255-0-0-.6">rgba-255-0-0-.6</div>
```

