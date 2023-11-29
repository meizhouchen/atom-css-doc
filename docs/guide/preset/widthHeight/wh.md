# 宽高

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()


const list = ref([
['wh-4.04', 'width:4.04rpx;height:4.04rpx;'],
['wh-4.04rem', 'width:4.04rem;height:4.04rem;'],
['wh-4', 'width:4rpx;height:4rpx;'],
['wh-4vh', 'width:4vh;height:4vh;'],
['wh-21vw', 'width:21vw;height:21vw;'],
['wh-21rem', 'width:21rem;height:21rem;'],
['wh-21px', 'width:21px;height:21px;'],
['wh-21rpx', 'width:21rpx;height:21rpx;'],
['wh-40%', 'width:40%;height:40%;'],
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
