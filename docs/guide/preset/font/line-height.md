# 行高

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['lh-10', 'line-height: 10;'],
  ['lh-10.09', 'line-height: 10.09;'],
  ['lh-10.09', 'line-height: 10.09;'],
  ['lh-.09', 'line-height: .09;'],
  ['lh-10px', 'line-height: 10px;'],
  ['lh-10rpx', 'line-height: 10rpx;'],
])
</script>

<!-- 命名规律：`gap-{数值}` -->
<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class=" a-flex-1" style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-jc-sb a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>


## 使用示例
