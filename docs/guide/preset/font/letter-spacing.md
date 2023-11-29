# font-style

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['ls-1', 'letter-spacing: 1px;'],
  ['ls--1', 'letter-spacing: -1px;'],
  ['ls-.5em', 'letter-spacing: .5em;'],
  ['ls-5rem', 'letter-spacing: 5rem;'],
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

<!-- [](https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing) -->

## 使用示例
