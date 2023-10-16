
## 背景颜色

```js
class='bg-#1' => 'background-color:#111111;'
class='bg-#d2' => 'background-color:#d2d2d2;'
class='bg-#d23' => 'background-color:#d23;'
class='bg-#d' => 'background-color:#dddddd;'

class='bg-red' => 'background-color:red;'
class='bg-red1' => // 匹配不到 不会生成样式

class='bg-rgba-1-2-3-4' => 'background-color:rgba(1,2,3,.4);'
class='bg-rgba-1-2-3-0.6' => 'background-color:rgba(1,2,3,0.6);'
class='bg-rgba-1-2-3-.6' => 'background-color:rgba(1,2,3,.6);'

class='bg-gba-10-222-256' => 'background-color:gba(10%,222%,256%);'
```