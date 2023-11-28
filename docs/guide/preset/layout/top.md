# 上下左右


<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
['t-1', 'top: 1px;'],
['t--1', 'top: -1px;'],
['top-1', 'top: 1px;'],
['l-1', 'left: 1px;'],
['left-1', 'left: 1px;'],
['r-1', 'right: 1px;'],
['right-1', 'right: 1px;'],
['b-1', 'bottom: 1px;'],
['bottom-1', 'bottom: 1px;'],
])
</script>

命名规律：`{top|t|right|r|bottom|b|left|l|inset}-{size}`
<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class="a-h-200 a-flex-1" style="overflow-y:auto;max-height: 300px">

  <div class="a-flex a-row a-jc-sb a-border-b a-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

## 使用示例

<div class="a-relative a-bg-rgba-192-132-252-.2 a-p-10 a-h-200 a-br-10" style="background-color: rgba(192,132,252,.2);border: solid 1px #c084fc;">
  <div class="a-absolute  a-bg-#c084fc a-br-10 a-p-10 a-t-10 a-l-10" style="background-color: #c084fc;"> t-10 l-10</div>
  <div class="a-absolute  a-bg-#c084fc a-b-0  a-br-10 a-p-10" style="background-color: #c084fc;"> b-0</div>
  <div class="a-absolute  a-bg-#c084fc a-t--10 a-r-0  a-br-10 a-p-10"  style="background-color: #c084fc;border: solid 1px #c084fc;"> t--10 r-0</div>
  <div class="a-absolute  a-bg-#c084fc a-b-8 a-r-10  a-br-10 a-p-10"  style="background-color: #c084fc;border: solid 1px #c084fc;"> b-8 r-10</div>
  <div class="a-absolute a-r-0 a-inset-70  a-br-10 a-p-10"  style="background-color: #c084fc;border: solid 1px #c084fc;"> inset-70</div>
</div>

```vue
<div class="relative">
  <div class="absolute t-10 l-10">t-10 l-10</div>
  <div class="absolute b-0">b-0</div>
  <div class="absolute t--10 r-0" > t--10 r-0</div>
  <div class="absolute b-8 r-0" > b-8 r-0</div>
  <div class="absolute inset-70" > inset-70</div>
</div>
```



## 上
```js
// 配置的单位
class='t-10' => 'top:10px;'
// 指定单位
class='t-10%' => 'top:10%;'
class='t-10vw' => 'top:10vw;'
// 负数
class='t--10%' => 'top:-10%;'
class='t--10vh' => 'top:-10vh;'
// 小数
class='t-.10vw' => 'top:.10vw;'
class='t-10.10vw' => 'top:10.10vw;'
class='t-10.10' => 'top:10.10px;'
```
## 下

```js
class='b-10' => 'bottom:10px;'
class='b-10%' => 'bottom:10%;'
class='b--10%' => 'bottom:-10%;'
class='b--10vh' => 'bottom:-10vh;'
class='b-10vw' => 'bottom:10vw;'
class='b-.10vw' => 'bottom:.10vw;'
class='b-10.10vw' => 'bottom:10.10vw;'
class='b-10.10' => 'bottom:10.10px;'
```
## 左
```js
class='l-10' => 'left:10px;'
class='l-10%' => 'left:10%;'
class='l--10%' => 'left:-10%;'
class='l--10vh' => 'left:-10vh;'
class='l-10vw' => 'left:10vw;'
class='l-.10vw' => 'left:.10vw;'
class='l-10.10vw' => 'left:10.10vw;'
class='l-10.10' => 'left:10.10px;'
```
## 右
```js
class='r-10' => 'right:10px;'
class='r-10%' => 'right:10%;'
class='r--10%' => 'right:-10%;'
class='r--10vh' => 'right:-10vh;'
class='r-10vw' => 'right:10vw;'
class='r-.10vw' => 'right:.10vw;'
class='r-10.10vw' => 'right:10.10vw;'
class='r-10.10' => 'right:10.10px;'
```
## inset
```js
class='inset--10%' => 'top: -10%;right: -10%;bottom: -10%;left: -10%;'
class='inset--10' => 'top: -10px;right: -10px;bottom: -10px;left: -10px;'
class='inset-0' => 'top: 0px;right: 0px;bottom: 0px;left: 0px;'
class='inset-0.5' => 'top: 0.5px;right: 0.5px;bottom: 0.5px;left: 0.5px;'
class='inset-.5' => 'top: .5px;right: .5px;bottom: .5px;left: .5px;'
```
