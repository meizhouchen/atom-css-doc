#transform-origin

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['origin-center', 'transform-origin: center;'],
  ['origin-top', 'transform-origin: top;'],
  ['origin-top-right', 'transform-origin: top right;'],
  ['origin-right', 'transform-origin: right;'],
  ['origin-bottom-right', 'transform-origin: bottom right;'],
  ['origin-bottom', 'transform-origin: bottom;'],
  ['origin-bottom-left', 'transform-origin: bottom left;'],
  ['origin-left', 'transform-origin: left;'],
  ['origin-top-left', 'transform-origin: top left;'],
])
</script>

<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class="a-h-200 a-flex-1" style="overflow-y:auto;max-height: 300px">
  <div class="a-flex a-row a-jc-sb a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

