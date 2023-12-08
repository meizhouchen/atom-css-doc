# border-style

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['bdr-solid', 'border-style: solid;'],
  ['bdr-dashed', 'border-style: dashed;'],
  ['bdr-dotted', 'border-style: dotted;'],
  ['bdr-double', 'border-style: double;'],
  ['bdr-hidden', 'border-style: hidden;'],
  ['bdr-none', 'border-style: none;'],
])
</script>


<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class="a-h-200 a-flex-1" style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-jc-sb a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

## 指定border线条样式
`bdr-{solid|dashed|dotted|double|hidden|none}` 默认为 solid
