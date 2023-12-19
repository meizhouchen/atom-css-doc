# 起源

## 前端 css 样式常见问题
1. css起名困难
2. 样式上下跳转
3. 代码样式调整麻烦
4. ...


是否有更好的解决方案？
## 公共 css 的问题
通常，公共 css 使用 scss 或者 less 编写，以 scss 为例
```css
// style.scss
// 定义字体(rpx)单位，大于或等于20的都为rpx单位字体
@for $i from 20 through 40 {
	.u-font-#{$i} {
		font-size: $i + rpx;
	}
}
```
它将被编译为：
```css
.u-font-20 { font-size: 20 rpx; }
.u-font-21 { font-size: 21 rpx; }
/* ... */
.u-font-40 { font-size: 40 rpx; }
```
真实开发中，我可能只用 28rpx,32rpx 这两个，剩下18个未使用的 css，小程序限制主包2M的情况下，无疑是巨大的浪费

假如项目需要一个50rpx的字体，由于公用css没有定义，使得我必须自己手写一个

是否有更好的解决方案？

## 按需生成
atomcss的作用
```vue
<template>
  <div id="app">
    <img class="icon-100" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld class="w-100%" msg="Welcome to Your Vue.js App"/>
  </div>
</template>
```
上面的class样式将被编译为：
```css
.icon-100 { width: 100 rpx; height: 100 rpx;}
.w-100_ { width: 100%; }
```

当然还有很多比这个更好的框架