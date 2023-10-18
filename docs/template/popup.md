# 弹窗


## 提示弹窗
效果

<div class="a-p-10 a-br-12 a-flex a-col a-ai-c" style="background-color: gainsboro;color: #222222;">
  <div class="a-bg-white a-w-300 a-flex a-col a-ai-c a-ptb-20 a-br-12">
    <div class="a-fs-16 a-fw-700">友情提示</div>
    <div class="a-c-6 a-p-16">具体的提示内容</div>
    <div class="a-c-white a-br-20 a-bg-red a-flex a-ai-c a-jc-c a-w-268 a-h-40 a-fs-16">好的</div>
  </div>
</div>

代码

```vue
<template>
  <!-- 弹窗提示 -->
  <uni-popup ref="popup" type="center">
    <view class="bg-white w-300 flex col ai-c ptb-20 br-12">
      <view class="fs-16 fw-700">友情提示</view>
      <view class="c-6 p-16">具体的提示内容</view>
      <view class="c-white br-20 bg-main flex ai-c jc-c w-268 h-40 fs-16">
        好的
      </view>
    </view>
  </uni-popup>
</template>

<script setup lang="ts">
// 弹窗提示
const popup = ref();
function prestoreClick() {
  popup.value.open("center");
}
function popupClose() {
  popup.value.close();
}
</script>

<style lang="scss" scoped></style>
```
