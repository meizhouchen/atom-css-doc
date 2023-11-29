# padding

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
['p-10', 'padding:10px;'],
['p-10.5', 'padding:10.5px;'],
['p-4-40', 'padding:4px 40px;'],
['p-0-auto', 'padding:0px auto;'],
['p-4-40-0-9', 'padding:4px 40px 0px 9px;'],
['pt-20', 'padding-top:20px;'],
['pt--20', 'padding-top:-20px;'],
['pb-20', 'padding-bottom:20px;'],
['pl-20', 'padding-left:20px;'],
['pr-20', 'padding-right:20px;'],
['plr-20', 'padding-left:20px;padding-right:20px;'],
['ptb-20', 'padding-top:20px;padding-bottom:20px;'],
['ptb-20.5', 'padding-top:20.5px;padding-bottom:20.5px;'],
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
class='p-10' => 'padding:10rpx;'
class='p-4-40' => 'padding:4rpx 40rpx;'
class='p-10-auto' => 'padding:10rpx auto;'
class='p-auto-10' => 'padding:auto 10rpx;'
class='p-4-40-0-9' => 'padding:4rpx 40rpx 0rpx 9rpx;'
class='pt-20' => 'padding-top:20rpx;'
class='pb-20' => 'padding-bottom:20rpx;'
class='pl-20' => 'padding-left:20rpx;'
class='pr-20' => 'padding-right:20rpx;'
class='plr-20' => 'padding-left:20rpx;padding-right:20rpx;'
class='ptb-20' => 'padding-top:20rpx;padding-bottom:20rpx;'

class='ptb-20.5' => 'padding-top:20.5rpx;padding-bottom:20.5rpx;'

```