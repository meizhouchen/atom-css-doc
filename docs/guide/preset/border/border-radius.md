# border-radius

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['br-10', 'border-radius:10px;'],
  ['br-10-20', 'border-radius:10px 20px;'],
  ['br-10-20-30', 'border-radius:10px 20px 30px;'],
  ['br-10-20-30-40', 'border-radius:10px 20px 30px 40px;'],
  ['br-10-20-30-40-50', '匹配不到不会生成样式'],
  ['br-10-20-30-40%', 'border-radius:10% 20% 30% 40%;'],
  ['br-b-2', 'border-bottom-left-radius:2px;border-bottom-right-radius:2px;'],
  ['br-l-3', 'border-top-left-radius:3px;border-bottom-left-radius:3px;'],
  ['br-r-4', 'border-top-right-radius:4px;border-bottom-right-radius:4px;'],
  ['br-r-50%', 'border-top-right-radius:50%;border-bottom-right-radius:50%;'],
  ['br-t-1', 'border-top-left-radius:1px;border-top-right-radius:1px;'],
  ['br-tr-40', 'border-top-right-radius:40px;'],
  ['br-tl-40', 'border-top-left-radius:40px;'],
  ['br-br-40', 'border-bottom-right-radius:40px;'],
  ['br-bl-40', 'border-bottom-left-radius:40px;'],
  ['radius-t-1', 'border-top-left-radius:1px;border-top-right-radius:1px;'],
  ['radius-bl-40', 'border-bottom-left-radius:40px;'],
  ['radius-10-20-30-40%', 'border-radius:10% 20% 30% 40%;'],
])
</script>

<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class="a-h-200 a-flex-1" style="overflow-y:auto;max-height: 300px">

  <div class="a-flex a-row a-jc-sb a-ai-c a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

