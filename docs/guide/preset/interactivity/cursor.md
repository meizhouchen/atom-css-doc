#鼠标样式

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'

const { page } = useData()

const list = ref([
  ['cursor-auto', 'cursor: auto;'],
  ['cursor-default', 'cursor: default;'],
  ['cursor-pointer', 'cursor: pointer;'],
  ['cursor-wait', 'cursor: wait;'],
  ['cursor-text', 'cursor: text;'],
  ['cursor-move', 'cursor: move;'],
  ['cursor-help', 'cursor: help;'],
  ['cursor-not-allowed', 'cursor: not-allowed;'],
  ['cursor-none', 'cursor: none;'],
  ['cursor-context-menu', 'cursor: context-menu;'],
  ['cursor-progress', 'cursor: progress;'],
  ['cursor-cell', 'cursor: cell;'],
  ['cursor-crosshair', 'cursor: crosshair;'],
  ['cursor-vertical-text', 'cursor: vertical-text;'],
  ['cursor-alias', 'cursor: alias;'],
  ['cursor-copy', 'cursor: copy;'],
  ['cursor-no-drop', 'cursor: no-drop;'],
  ['cursor-grab', 'cursor: grab;'],
  ['cursor-grabbing', 'cursor: grabbing;'],
  ['cursor-all-scroll', 'cursor: all-scroll;'],
  ['cursor-col-resize', 'cursor: col-resize;'],
  ['cursor-row-resize', 'cursor: row-resize;'],
  ['cursor-n-resize', 'cursor: n-resize;'],
  ['cursor-e-resize', 'cursor: e-resize;'],
  ['cursor-s-resize', 'cursor: s-resize;'],
  ['cursor-w-resize', 'cursor: w-resize;'],
  ['cursor-ne-resize', 'cursor: ne-resize;'],
  ['cursor-nw-resize', 'cursor: nw-resize;'],
  ['cursor-se-resize', 'cursor: se-resize;'],
  ['cursor-sw-resize', 'cursor: sw-resize;'],
  ['cursor-ew-resize', 'cursor: ew-resize;'],
  ['cursor-ns-resize', 'cursor: ns-resize;'],
  ['cursor-nesw-resize', 'cursor: nesw-resize;'],
  ['cursor-nwse-resize', 'cursor: nwse-resize;'],
  ['cursor-zoom-in', 'cursor: zoom-in;'],
  ['cursor-zoom-out', 'cursor: zoom-out;'],
  
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

