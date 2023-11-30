# scale

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['scale-0', 'transform: scale(0);'],
  ['scale-.8', 'transform: scale(.8);'],
  ['scale-10.1', 'transform: scale(10.1);'],
  ['scale-x-0', 'transform: scaleX(0);'],
  ['scale-y-0', 'transform: scaleY(0);'],
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

