# 层叠权重覆盖

用于对同一个class内的样式进行覆盖

## 增加权重：`-i`
规则：**`{class类名}-i`**


示例：给`pt-5`增加权重 修改上边距为5 覆盖`p-10`
```vue
<view class="p-10 pt-5-i"></view>
```
**`pt-5-i`** 的权重，将会高于 **`p-10`** 从而覆盖 **`p-10`** 的样式

## 要覆盖 pt-5-i 怎么办？
规则：**`{class类名}-i{数字}`**

**数字越大，权重越高**


示例：覆盖`pt-5-i`
```
class="pt-5-i1" // 数字可以任意指定 建议从1开始
class="pt-5-i2
class="pt-5-i5"
```



## 最高权重：`-!`
规则：**`{class类名}-i`**

::: tip 提示
**!important 是危险的，不利于权重的修改**
:::

示例
```
class="p-10-!"

// 生成
.p-10-!{
  padding：10rpx !important;
}
```

要覆盖 `p-10-!`  需要在标签内联样式进行覆盖：
```vue
<view class="p-10-!" style="padding: 20rpx !important;"></view>
```
