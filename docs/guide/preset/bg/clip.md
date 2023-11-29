
# background-clip

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['bg-clip-border', 'background-clip: border-box;'],
  ['bg-clip-padding', 'background-clip: padding-box;'],
  ['bg-clip-content', 'background-clip: content-box;'],
  ['bg-clip-text', 'background-clip: text;'],
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

