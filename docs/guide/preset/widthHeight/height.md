# 高

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['height-100', 'height:100rpx;'],
  ['height-100vh', 'height:100vh;'],
  ['height-100vw', 'height:100vw;'],
  ['height-100%', 'height:100%;'],
  ['height-50%', 'height:50%;'],
  ['h-100', 'height:100rpx;'],
  ['h-100vh', 'height:100vh;'],
  ['h-100vw', 'height:100vw;'],
  ['h-100%', 'height:100%;'],
  ['h-50%', 'height:50%;'],
  ['h-1.5', 'height:1.5rpx;'],
  ['h-.5', 'height:.5rpx;'],
  ['h-10.5', 'height:10.5rpx;'],
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
