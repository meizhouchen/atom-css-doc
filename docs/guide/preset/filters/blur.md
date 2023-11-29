## shadow阴影
```js
class='shadow-.4' => 'box-shadow:0px 4px 12px 0px rgba(0, 0, 0, .4);'
class='shadow-0.4' => 'box-shadow:0px 4px 12px 0px rgba(0, 0, 0, .4);'
class='shadow-0.04' => 'box-shadow:0px 4px 12px 0px rgba(0, 0, 0, .04);'
class='shadow-1-.04' => 'box-shadow:1px 4px 12px 0px rgba(0, 0, 0, .04);'
class='shadow-1-2-.04' => 'box-shadow:1px 2px 12px 0px rgba(0, 0, 0, .04);'
class='shadow-1-2-3-.04' => 'box-shadow:1px 2px 3px 0px rgba(0, 0, 0, .04);'
class='shadow-1-2-3-4-.04' => 'box-shadow:1px 2px 3px 4px rgba(0, 0, 0, .04);'
```

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['bs-solid', 'border-style: solid;'],
  ['bs-dashed', 'border-style: dashed;'],
  ['bs-dotted', 'border-style: dotted;'],
  ['bs-double', 'border-style: double;'],
  ['bs-hidden', 'border-style: hidden;'],
  ['bs-none', 'border-style: none;'],
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

