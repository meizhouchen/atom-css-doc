# margin


<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
['m-10', 'margin:10px;'],
['m-10.5', 'margin:10.5px;'],
['m-4-40', 'margin:4px 40px;'],
['m-0-auto', 'margin:0px auto;'],
['m-4-40-0-9', 'margin:4px 40px 0px 9px;'],
['mt-20', 'margin-top:20px;'],
['mt--20', 'margin-top:-20px;'],
['mb-20', 'margin-bottom:20px;'],
['ml-20', 'margin-left:20px;'],
['mr-20', 'margin-right:20px;'],
['mlr-20', 'margin-left:20px;margin-right:20px;'],
['mtb-20', 'margin-top:20px;margin-bottom:20px;'],
['mtb-20.5', 'margin-top:20.5px;margin-bottom:20.5px;'],
])
</script>

<!-- 命名规律：`m-{数值}` -->
 
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

```js
class='m-10' => 'margin:10px;'

class='m-4-40' => 'margin:4px 40px;'
class='m-10-auto' => 'margin:10px auto;'
class='m-auto-10' => 'margin:auto 10px;'
class='m-4-40-0-9' => 'margin:4px 40px 0px 9px;'

class='mt-20' => 'margin-top:20px;'
class='mb-20' => 'margin-bottom:20px;'
class='ml-20' => 'margin-left:20px;'
class='mr-20' => 'margin-right:20px;'
class='mlr-20' => 'margin-left:20px;margin-right:20px;'
class='mtb-20' => 'margin-top:20px;margin-bottom:20px;'

class='mtb-20.5' => 'margin-top:20.5px;margin-bottom:20.5px;'

```