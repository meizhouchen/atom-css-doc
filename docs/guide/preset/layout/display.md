# display
使用属性值作为class

## 效果
<div class="a-c-white">
  <div class="a-inline-block a-bg-red a-block">block</div>
  <div class="a-flex a-c-white">
    <div class="a-bg-green">flex</div>
    <div class="a-bg-red">flex</div>
  </div>
  <div class="a-inline-block a-bg-green">inline-block</div>
  <div class="a-inline-block a-bg-red">inline-block</div>
</div>

```vue
// 上面效果对应的class样式
<div class="c-white">
  <div class="inline-block bg-red block">block</div>
  <div class="flex c-white">
    <div class="bg-green">flex</div>
    <div class="bg-red">flex</div>
  </div>
  <div class="inline-block bg-green">inline-block</div>
  <div class="inline-block bg-red">inline-block</div>
</div>
```


