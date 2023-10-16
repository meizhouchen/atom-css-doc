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

|class							|样式													|
|--									|--														|
|flex								|display: flex;								|
|grid								|display: grid;								|
|none								|display: none;								|
|block							|display: block;							|
|inline-block				|display: inline-block;				|
|inline							|display: inline;							|
|inline-flex				|display: inline-flex;				|
|table							|display: table;							|
|inline-table				|display: inline-table;				|
|table-caption			|display: table-caption;			|
|table-cell					|display: table-cell;					|
|table-column				|display: table-column;				|
|table-column-group	|display: table-column-group;	|
|table-footer-group	|display: table-footer-group;	|
|table-header-group	|display: table-header-group;	|
|table-row-group		|display: table-row-group;		|
|table-row					|display: table-row;					|
|flow-root					|display: flow-root;					|
|inline-grid				|display: inline-grid;				|
|contents						|display: contents;						|
|list-item					|display: list-item;					|


