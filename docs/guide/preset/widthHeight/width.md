# 宽

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
['width-100', 'width:100rpx;'],
['width-100vh', 'width:100vh;'],
['width-100vw', 'width:100vw;'],
['width-100%', 'width:100%;'],
['width-50%', 'width:50%;'],
['w-100', 'width:100rpx;'],
['w-100vh', 'width:100vh;'],
['w-100vw', 'width:100vw;'],
['w-100%', 'width:100%;'],
['w-50%', 'width:50%;'],
['w-1.5', 'width:1.5rpx;'],
['w-.5', 'width:.5rpx;'],
['w-10.5', 'width:10.5rpx;'],
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

