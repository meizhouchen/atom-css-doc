# border-color

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['border-#4' , 'border-color:#444444;'],
  ['border-#45' , 'border-color:#454545;'],
  ['border-#456' , 'border-color:#456456;'],
  ['bdr-#4' , 'border-color:#444444;'],
  ['bdr-brand' , 'border-color:#444444;'],
  ['bdr-#45' , 'border-color:#454545;'],
  ['bdr-#456' , 'border-color:#456456;'],
])
</script>

<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class="a-h-200 a-flex-1" style="overflow-y:auto;max-height: 300px">

  <div class="a-flex a-row a-jc-sb a-ai-c a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

## 使用主题色
`bdr-{主题配置的颜色}`

## 自定义颜色
`bdr-{自定义颜色}`