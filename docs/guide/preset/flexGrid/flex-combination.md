# flex组合使用
  
<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ["f-c", "display: flex;flex-direction: row;align-items: center;justify-content: center;".split(';')],
  ['f-s', 'display: flex;flex-direction: row;justify-content: stretch;align-items: center;'.split(';')],
  ['f-sb', 'display: flex;flex-direction: row;justify-content: space-between;align-items: center;'.split(';')],
  ['f-sa', 'display: flex;flex-direction: row;justify-content: space-around;align-items: center;'.split(';')],
  ['f-fe', 'display: flex;flex-direction: row;justify-content: flex-end;align-items: center;'.split(';')],
  ['f-fs', 'display: flex;flex-direction: row;justify-content: flex-start;align-items: center;'.split(';')],
])
</script>

<!-- 命名规律：`f-{row|col}-{justify-content}-{align-items}` -->
 
<div class="a-flex a-row a-jc-sb a-border-b a-h-30 a-ai-c"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class=" a-flex-1" style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-jc-sb a-border-b a-min-h-30 a-ai-c" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">
      <div class="" v-for="(item1, index) in item[1]" :key="index" >{{item1}}</div>
    </div>
  </div>
</div>

<!-- ## 使用示例 -->

