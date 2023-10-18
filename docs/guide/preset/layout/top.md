# 上下左右
命名规律：使用首字母, top => t

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