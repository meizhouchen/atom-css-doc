
# 字体加粗

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()


const list = ref([
  ['font-thin', 'font-weight: 100;'],
  ['font-extralight', 'font-weight: 200;'],
  ['font-light', 'font-weight: 300;'],
  ['font-normal', 'font-weight: 400;'],
  ['font-medium', 'font-weight: 500;'],
  ['font-semibold', 'font-weight: 600;'],
  ['font-bold', 'font-weight: 700;'],
  ['fw-b', 'font-weight: 700;'],
  ['fw-700', 'font-weight: 700;'],
  ['font-extrabold', 'font-weight: 800;'],
  ['font-black', 'font-weight: 900;'],
])
</script>

<!-- 命名规律：`gap-{数值}` -->
 
<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class=" a-flex-1" style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-jc-sb a-border-b a-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

## 使用示例
