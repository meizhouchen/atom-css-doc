# object-fit

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()


const list = ref([
['object-contain', 'object-fit: contain;'],
['object-cover', 'object-fit: cover;'],
['object-fill', 'object-fit: fill;'],
['object-none', 'object-fit: none;'],

// ['object-scale-down', 'object-fit: scale-down;'],
// ['of-contain', 'object-fit: contain;'],
// ['of-cover', 'object-fit: cover;'],
// ['of-fill', 'object-fit: fill;'],
// ['of-none', 'object-fit: none;'],
// ['of-scale-down', 'object-fit: scale-down;'],
// ['of-c', 'object-fit: cover;'],
// ['of-f', 'object-fit: fill;'],
// ['of-n', 'object-fit: none;'],
// ['of-sd', 'object-fit: scale-down;'],
])
</script>

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

