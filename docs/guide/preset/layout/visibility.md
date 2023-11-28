# visibility

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
['visible', 'visibility: visible;'],
['hidden', 'visibility: hidden;'],
['collapse', 'visibility: collapse;'],
])
</script>

命名规律：使用属性值
<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class=" a-flex-1" style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-jc-sb a-border-b a-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

## 使用示例

<div class="a-relative a-flex a-row a-ai-c a-jc-c a-bg-rgba-192-132-252-.2 a-p-10 a-h-200 a-br-10" style="background-color: rgba(192,132,252,.2);border: solid 1px #c084fc;">
  <div class="a-wh-120 a-br-9999 a-flex a-ai-c a-jc-c mr--10"  style="background-color: #c084fc;border: solid 4px #fff;">01</div>
  <div class="a-wh-120 a-br-9999 a-flex a-ai-c a-jc-c a-hidden"  style="background-color: #c084fc;border: solid 4px #fff;">02</div>
  <div class="a-wh-120 a-br-9999 a-flex a-ai-c a-jc-c a-z-1"  style="background-color: #c084fc;border: solid 4px #fff;">03</div>
</div>

```vue
<div class="">
  <div class="">01</div>
  <div class="hidden">02</div>
  <div class="">03</div>
</div>
```