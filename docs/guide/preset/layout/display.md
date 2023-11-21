# display

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
[ 'flex' , 'display: flex;'],
[ 'grid' , 'display: grid;'],
[ 'none' , 'display: none;'],
[ 'block' , 'display: block;'],
[ 'inline-block' , 'display: inline-block;'],
[ 'inline' , 'display: inline;'],
[ 'inline-flex' , 'display: inline-flex;'],
[ 'table' , 'display: table;'],
[ 'inline-table' , 'display: inline-table;'],
[ 'table-caption' , 'display: table-caption;'],
[ 'table-cell' , 'display: table-cell;'],
[ 'table-column' , 'display: table-column;'],
[ 'table-column-group' , 'display: table-column-group;'],
[ 'table-footer-group' , 'display: table-footer-group;'],
[ 'table-header-group' , 'display: table-header-group;'],
[ 'table-row-group' , 'display: table-row-group;'],
[ 'table-row' , 'display: table-row;'],
[ 'flow-root' , 'display: flow-root;'],
[ 'inline-grid' , 'display: inline-grid;'],
[ 'contents' , 'display: contents;'],
[ 'list-item' , 'display: list-item;'],
])
</script>

命名规律：使用属性值
<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class="a-h-200 a-flex-1" style="overflow-y:scroll;height: 300px">

  <div class="a-flex a-row a-jc-sb a-border-b a-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

## 使用示例
### flex

<!-- <div class="a-border-b a-flex-1 a-h-200 a-h-30">flex </div> -->

<div class=" a-flex a-ai-c a-jc-c a-border a-p-20 a-br-10">
  <div class=" a-flex a-ai-c a-jc-c a-border a-p-20 a-br-10" style="background-color: var(--vp-code-block-bg);">
    <div class="a-flex a-ai-c ">
      <div class="a-c-white  a-br-999 a-wh-46 a-mr-10 a-flex a-jc-c a-ai-c a-fs-40"  style="background-color:#2b9939">A</div>
      <div>
        <div>atomCss</div>
        <div class="a-fs-12" style="color: #999999">为uniapp而生</div>
      </div>
    </div>
  </div>
</div>


```vue
<div class=" flex ai-c jc-c border p-20 br-10 bg-#f6f6f7">
  <div class="flex ai-c ">
    <div class="c-white bg-#2b9939 br-50% wh-46 mr-10 flex jc-c ai-c fs-40">A</div>
    <div>
      <div>atomCss</div>
      <div class="fs-12 c-#9">为uniapp而生</div>
    </div>
  </div>
</div>
```

