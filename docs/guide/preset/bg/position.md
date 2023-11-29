
# background-position

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['bg-bottom', 'background-position: bottom;'],
  ['bg-center', 'background-position: center;'],
  ['bg-left', 'background-position: left;'],
  ['bg-left-bottom', 'background-position: left bottom;'],
  ['bg-left-top', 'background-position: left top;'],
  ['bg-right', 'background-position: right;'],
  ['bg-right-bottom', 'background-position: right bottom;'],
  ['bg-right-top', 'background-position: right top;'],
  ['bg-top', 'background-position: top;'],
])
</script>

<div class="a-flex a-row a-jc-sb a-border-b a-h-30"  >
  <div class="a-flex-1">class名</div>
  <div class="a-flex-1">样式值</div>
</div>
<div class="a-h-200 a-flex-1" style="overflow-y:auto;max-height: 300px">

  <div class="a-flex a-row a-jc-sb a-border-b a-h-30" v-for="(item, index) in list" :key="index" >
    <div class="a-flex-1">{{item[0]}}</div>
    <div class="a-flex-1">{{item[1]}}</div>
  </div>
</div>

