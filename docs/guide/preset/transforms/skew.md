# skew

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()



const list = ref([
  ['skew-x-0', 'transform:skewX(0deg);'],
  ['skew-x-10', 'transform:skewX(10deg);'],
  ['skew-x-10.1', 'transform:skewX(10.1deg);'],
  ['skew-x-.1', 'transform:skewX(.1deg);'],
  ['skew-y-0', 'transform:skewY(0deg);'],
  ['skew-y-10', 'transform:skewY(10deg);'],
  ['skew-y-10.1', 'transform:skewY(10.1deg);'],
  ['skew-y-.1', 'transform:skewY(.1deg);'],
])
</script>

<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class="a-h-200 a-flex-1" style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-jc-sb a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

