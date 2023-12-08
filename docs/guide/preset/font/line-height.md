# 行高

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['lh-10', 'line-height: 10rpx;'],
  ['lh-10.09', 'line-height: 10.09rpx;'],
  ['lh-10.09', 'line-height: 10.09rpx;'],
  ['lh-.09', 'line-height: .09rpx;'],
  ['lh-n-10', 'line-height: 10;'],
  ['lh-n-10.09', 'line-height: 10.09;'],
  ['lh-n-10.09', 'line-height: 10.09;'],
  ['lh-n-.09', 'line-height: .09;'],
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
