# grid-template-rows

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['grid-flow-row', 'grid-auto-flow: row;'],
  ['grid-flow-col', 'grid-auto-flow: column;'],
  ['grid-flow-dense', 'grid-auto-flow: dense;'],
  ['grid-flow-row-dense', 'grid-auto-flow: row dense;'],
  ['grid-flow-col-dense', 'grid-auto-flow: column dense;'],
])
</script>

<!-- 命名规律：`gap-{数值}` -->
 
<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class=" a-flex-1 " style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-ai-c a-jc-sb a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

## 使用示例

