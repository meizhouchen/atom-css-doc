# display


<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
['static', 'position: static;'],
['fixed', 'position: fixed;'],
['absolute', 'position: absolute;'],
['relative', 'position: relative;'],
['sticky', 'position: sticky;'],
])
</script>

命名规律：使用属性值
<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class="a-h-200 a-flex-1" style="overflow-y:auto;max-height: 300px">

  <div class="a-flex a-row a-jc-sb a-border-b a-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

## 使用示例

<div class="a-relative a-bg-rgba-192-132-252-.2 a-p-10 a-h-200 a-br-10" style="background-color: rgba(192,132,252,.2);border: solid 1px #c084fc;">
  relative
  <div class="a-static a-bg-rgba-192-132-252-.6  a-br-10 a-p-10" style="background-color: rgba(192,132,252,.6);border: solid 1px #c084fc;">static</div>
  <div class="a-absolute  a-bg-#c084fc a-b-0  a-br-10 a-p-10" style="background-color: #c084fc;">absolute b-0</div>
  <div class="a-absolute  a-bg-#c084fc a-t--10 a-r-0  a-br-10 a-p-10"  style="background-color: #c084fc;border: solid 1px #c084fc;">absolute t--10 r-0</div>
  <div class="a-fixed a-r-0 a-t-0  a-br-10 a-p-10"  style="background-color: #c084fc;border: solid 1px #c084fc;">fixed r-0 t-0</div>
</div>



```vue
<div class="relative">
  relative
  <div class="static">static</div>
  <div class="absolute b-0">absolute b-0</div>
  <div class="absolute t--10 r-0" >absolute t--10 r-0</div>
  <div class="fixed r-0 t-0" >fixed r-0 t-0</div>
</div>
```

