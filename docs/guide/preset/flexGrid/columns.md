# columns


<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ["cols-1" , "columns: 1 ;"],
  ["cols-1em" , "columns: 1em ;"],
  ["cols-auto-auto" , "columns: auto auto;"],
  ["cols-auto" , "columns: auto;"],
  ["cols-auto-1" , "columns: auto 1;"],
  ["cols-auto-1em" , "columns: auto 1em;"],
  ["cols-1-auto" , "columns: 1 auto;"],
  ["cols-1em-auto" , "columns: 1em auto;"],
])
</script>


 
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

