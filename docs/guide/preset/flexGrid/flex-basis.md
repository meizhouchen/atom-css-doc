# flex-basis


<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ["basis-1" , "flex-basis: 1rpx;"],
  ["basis-1.1px" ,  "flex-basis: 1.1px;"],
  ["basis-1.1em" , "flex-basis: 1.1em;"],
  ["basis-1.1%" ,  "flex-basis: 1.1%;"],
  ["basis-auto" ,  "flex-basis: auto;"],
])
</script>

命名规律：`basis-{数值}{单位}`
 
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

