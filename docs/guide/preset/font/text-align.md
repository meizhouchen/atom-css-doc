# text-align

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ["ta-l", "text-align: left;"],
  ["ta-c", "text-align: center;"],
  ["ta-r", "text-align: right;"],
  ["ta-j", "text-align: justify;"],
  ["ta-s", "text-align: start;"],
  ["ta-e", "text-align: end;" ],
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

<div class="a-relative a-bg-rgba-192-132-252-.2 a-p-10 a-h-200 a-br-10 a-flex a-col a-ai-c a-jc-c" style="background-color: rgba(192,132,252,.2);border: solid 1px #c084fc;">
  <div class="a-ellipsis-1 a-w-300 a-border a-p-10 a-lh-40px a-br-10 a-mb-10 a-ta-l" style="border: solid 1px #c084fc;">ta-l文字居左</div>
  <div class="a-ellipsis-1 a-w-300 a-border a-p-10 a-lh-40px a-br-10 a-mb-10 a-ta-c" style="border: solid 1px #c084fc;">ta-c文字居中</div>
  <div class="a-ellipsis-1 a-w-300 a-border a-p-10 a-lh-40px a-br-10 a-mb-10 a-ta-r" style="border: solid 1px #c084fc;">ta-r文字居右</div>
</div>

```html
<div class="ta-l">ta-l文字居左</div>
<div class="ta-c">ta-c文字居中</div>
<div class="ta-r">ta-r文字居右</div>
```
