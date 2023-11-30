#translate

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['translateX-.04', 'transform:translateX(.04rpx);'],
  ['translateY-.04', 'transform:translateY(.04rpx);'],
  ['translateY--.04', 'transform:translateY(-.04rpx);'],
  ['translateY-40%', 'transform:translateY(40%);'],
  ['translateY--40%', 'transform:translateY(-40%);'],
  ['translate-x-.04', 'transform:translateX(.04rpx);'],
  ['translate-y-.04', 'transform:translateY(.04rpx);'],
  ['translate-y--.04', 'transform:translateY(-.04rpx);'],
  ['translate-y-40%', 'transform:translateY(40%);'],
  ['translate-y--40%', 'transform:translateY(-40%);'],
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

