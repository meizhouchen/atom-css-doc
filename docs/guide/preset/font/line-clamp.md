# 文字省略

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['ellipsis-1', '-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;word-break: break-all;'.split(';').filter(Boolean)],
  ['line-clamp-1', '-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;word-break: break-all;'.split(';').filter(Boolean)],
])
</script>

<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class=" a-flex-1" style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-jc-sb a-ai-c a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1"  >
      <div class="" v-for="(item1, index) in item[1]" :key="index">{{item1}};</div>
    </div>
  </div>
</div>


命名规律：`{ellipsis|line-clamp}-{数值}`

## 使用示例

<div class="a-relative a-bg-rgba-192-132-252-.2 a-p-10 a-h-200 a-br-10 a-flex a-col a-ai-c a-jc-c" style="background-color: rgba(192,132,252,.2);border: solid 1px #c084fc;">
  <div class="a-ellipsis-1 a-w-300 a-border a-p-10 a-lh-40px a-br-10 a-mb-10" style="border: solid 1px #c084fc;">ellipsis-1文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
  <div class="a-ellipsis-2 a-w-300 a-border a-p-10 a-lh-40px a-br-10" style="border: solid 1px #c084fc;">ellipsis-2文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
</div>

```html
// 实际代码
<div class="ellipsis-1">ellipsis-1文字文字文字文字文字文字文字文字文字文字文字</div>
<div class="ellipsis-2">ellipsis-2文字文字文字文字文字文字文字文字文字文字文字</div>
```
