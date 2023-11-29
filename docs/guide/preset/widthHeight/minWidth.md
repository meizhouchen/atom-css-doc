
# 最小宽度

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['min-w-0', 'min-width:0rpx;'],
  ['min-w-10.9', 'min-width:10.9rpx;'],
  ['min-w-.9', 'min-width:.9rpx;'],
  ['min-w-50vw', 'min-width:50vw;'],
  ['min-w-50%', 'min-width:50%;'],
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
