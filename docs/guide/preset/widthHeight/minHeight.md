
# 最小高度

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['min-h-0', 'min-height:0rpx;'],
  ['min-h-10.9', 'min-height:10.9rpx;'],
  ['min-h-.9', 'min-height:.9rpx;'],
  ['min-h-50vw', 'min-height:50vw;'],
  ['min-h-50%', 'min-height:50%;'],
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
