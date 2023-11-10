# icon
uniapp的uni_modules版的iconPack  
已经完成

1. ✅ 图标风格（颜色）切换
2. ✅ 线段粗细切换
3. ✅ 端点类型切换
4. ✅ 拐点类型切换

待完成

1. ☑️ 配置初始化颜色
2. ☑️ 文档提供搜索
3. ☑️ 文档提供复制
4. ☑️ 文档提供字体下载
5. ☑️ 文档提供字svg文件下载

建议复制[iconPark](https://iconpark.oceanengine.com/official)的vue组件，为了解决冲突，组件增加了前缀i

<script setup>
import { ref } from 'vue'
import { icons } from './iconMap.js'
import { Icons } from './allIcon.js'

const props = {
  size: 24,
  strokeWidth: 4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  theme: 'outline',
  colors: ['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']
}


function getSvgStr(item) {
  return Icons[item] && Icons[item](props)
}
const names = {}

for (let item of icons) {
  const name =  'I'+ toUpperCamelCase(item.name)
  names[name] = ''
}

const list = ref(Object.keys(names))
function toUpperCamelCase(str) {
  // 将连字符、下划线、空格作为分隔符，分割字符串为单词数组
  let words = str.split(/[-_ ]+/);
  
  // 遍历单词数组，将每个单词的首字母大写
  let result = words.map(word => {
    // 将单词首字母转换为大写，其余字母保持不变
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  // 将结果数组合并为单个字符串
  return result.join("");
}
</script>

<div class="p-12 m-12 bg-white br-12 a-flex a-wrap" :class="$style.grid" >
  <div class="a-col a-ai-c" v-for="(item,index) in list"  :class="$style.item" :key="index" style="">
    <div v-html="getSvgStr(item)"></div>
    <div >{{item}}</div>
  </div>
</div>




<style module>
.grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 20%);
  grid-template-columns: repeat(auto-fill, 200px);
}
.item {
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  justify-items: center;
  display: flex;
  padding: 8px 0;
  font-size: 12px
}
</style>