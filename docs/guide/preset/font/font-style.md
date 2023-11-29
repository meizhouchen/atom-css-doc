# font-style

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()


const list = ref([
  ['italic', 'font-style: italic;'],
  ['not-italic', 'font-style: normal;'],
])
</script>

<!-- 命名规律：`gap-{数值}` -->
 
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
