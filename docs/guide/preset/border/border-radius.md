# border-radius
```js
class='br-10' => 'border-radius:10px;'
class='br-10-20' => 'border-radius:10px 20px;'
class='br-10-20-30' => 'border-radius:10px 20px 30px;'
class='br-10-20-30-40' => 'border-radius:10px 20px 30px 40px;'
class='br-10-20-30-40-50' => // 匹配不到 不会生成样式
class='br-10-20-30-40%' => 'border-radius:10% 20% 30% 40%;' // 指定单位

class='br-b-2' => 'border-bottom-left-radius:2px;border-bottom-right-radius:2px;'
class='br-l-3' => 'border-top-left-radius:3px;border-bottom-left-radius:3px;'
class='br-r-4' => 'border-top-right-radius:4px;border-bottom-right-radius:4px;'
class='br-r-50%' => 'border-top-right-radius:50%;border-bottom-right-radius:50%;'
class='br-t-1' => 'border-top-left-radius:1px;border-top-right-radius:1px;'

class='br-tr-40' => 'border-top-right-radius:40px;'
class='br-tl-40' => 'border-top-left-radius:40px;'
class='br-br-40' => 'border-bottom-right-radius:40px;'
class='br-bl-40' => 'border-bottom-left-radius:40px;'

class='radius-t-1' => 'border-top-left-radius:1px;border-top-right-radius:1px;'
class='radius-bl-40' => 'border-bottom-left-radius:40px;'
class='radius-10-20-30-40%' => 'border-radius:10% 20% 30% 40%;'
```
