
# 内置的颜色

<script setup>
import { useData } from 'vitepress'
import { ref } from 'vue'
import { preset } from "@meizhou/atomcss/preset";
let colors  = preset().theme.colors

delete colors.brand
delete colors.white
delete colors.inherit
delete colors.current
delete colors.transparent
delete colors.black

const list = ref([
  ['bg-clip-border', 'background-clip: border-box;'],
  ['bg-clip-padding', 'background-clip: padding-box;'],
  ['bg-clip-content', 'background-clip: content-box;'],
  ['bg-clip-text', 'background-clip: text;'],
])
</script>


<div class="a-h-200 a-flex-1" style="">
  <div class="a-flex a-row a-jc-sb a-border-b a-min-h-30" style="display: flex" v-for="(item1, index) in Object.entries(colors)" :key="index" >
    <div class=""  style="width:100px;">{{item1[0]}}</div>
    <div class="a-w-50" v-for="(item, index) in Object.entries(item1[1])" :key="index" style="margin-right: 2px">
      <div class=""  style="width:50px;height: 30px;border-radius: 6px" :style="'background-color: '+ item[1]" ></div>
      <div class=""  style="width:50px;">{{item[0]}}</div>
      <div class=""  style="width:50px;font-size:10px">{{item[1]}}</div>
    </div>
  </div>
</div>

