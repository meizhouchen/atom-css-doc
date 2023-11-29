# overflow

<!-- |ovf-a|overflow: auto;|
|ovf-h|overflow: hidden;|
|ovf-v|overflow: visible;|
|ovf-s|overflow: scroll;|
|ovf-x-a|overflow-x: auto;|
|ovf-y-a|overflow-y: auto;|
|ovf-x-h|overflow-x: hidden;|
|ovf-y-h|overflow-y: hidden;|
|ovf-x-v|overflow-x: visible;|
|ovf-y-v|overflow-y: visible;|
|ovf-x-s|overflow-x: scroll;|
|ovf-y-s|overflow-y: scroll;|

|overflow-auto|overflow: auto;|
|overflow-hidden|overflow: hidden;|
|overflow-visible|overflow: visible;|
|overflow-scroll|overflow: scroll;|
|overflow-x-auto|overflow-x: auto;|
|overflow-y-auto|overflow-y: auto;|
|overflow-x-hidden|overflow-x: hidden;|
|overflow-y-hidden|overflow-y: hidden;|
|overflow-x-visible|overflow-x: visible;|
|overflow-y-visible|overflow-y: visible;|
|overflow-x-scroll|overflow-x: scroll;|
|overflow-y-scroll|overflow-y: scroll;|
|overflow-a|overflow: auto;|
|overflow-h|overflow: hidden;|
|overflow-v|overflow: visible;|
|overflow-s|overflow: scroll;|
|overflow-x-a|overflow-x: auto;|
|overflow-y-a|overflow-y: auto;|
|overflow-x-h|overflow-x: hidden;|
|overflow-y-h|overflow-y: hidden;|
|overflow-x-v|overflow-x: visible;|
|overflow-y-v|overflow-y: visible;|
|overflow-x-s|overflow-x: scroll;|
|overflow-y-s|overflow-y: scroll;|
 -->


<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
['overflow-auto','overflow: auto;'],
['overflow-hidden','overflow: hidden;'],
['overflow-clip','overflow: clip;'],
['overflow-visible','overflow: visible;'],
['overflow-scroll','overflow: scroll;'],
['overflow-x-auto','overflow-x: auto;'],
['overflow-y-auto','overflow-y: auto;'],
['overflow-x-hidden','overflow-x: hidden;'],
['overflow-y-hidden','overflow-y: hidden;'],
['overflow-x-clip','overflow-x: clip;'],
['overflow-y-clip','overflow-y: clip;'],
['overflow-x-visible','overflow-x: visible;'],
['overflow-y-visible','overflow-y: visible;'],
['overflow-x-scroll','overflow-x: scroll;'],
['overflow-y-scroll','overflow-y: scroll;'],
])
</script>

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

