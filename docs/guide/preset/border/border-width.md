# outline-width

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['bdr-10', 'border-width:4rpx;'],
  ['bdr-b-2', 'border-bottom-width:2px;'],
  ['bdr-l-3', 'border-left-width:3px;'],
  ['bdr-r-4', 'border-right-width:4px;'],
  ['bdr-t-1', 'border-top-width:1px;'],
])
</script>

<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class="a-h-200 a-flex-1" style="overflow-y:auto;max-height: 300px">

  <div class="a-flex a-row a-jc-sb a-ai-c a-border-b a-min-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

