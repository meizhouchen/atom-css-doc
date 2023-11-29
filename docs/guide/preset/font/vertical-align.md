# vertical-align

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()


const list = ref([
  ['va-baseline', 'vertical-align: baseline;'],
  ['va-t', 'vertical-align: top;'],
  ['va-m', 'vertical-align: middle;'],
  ['va-b', 'vertical-align: bottom;'],
  ['va-tt', 'vertical-align: text-top;'],
  ['va-tb', 'vertical-align: text-bottom;'],
  ['va-sub', 'vertical-align: sub;'],
  ['va-s', 'vertical-align: super;'],
])
</script>

<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class=" a-flex-1" style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-jc-sb a-ai-c a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>


<!-- 命名规律：`{ellipsis|line-clamp}-{数值}` -->

## 使用示例

