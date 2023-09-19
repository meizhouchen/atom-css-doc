# 文字超出省略
样式规则：

ellipsis-[整数]

[前缀]ellipsis-[整数]

## 规则示例

|	class| 对应生成的样式	|
|--	|--	|
|	ellipsis-1|	-webkit-line-clamp: 1;<br>overflow: hidden;<br>word-break: break-all;<br>text-overflow: ellipsis;<br>display: -webkit-box;<br>-webkit-box-orient: vertical;<br>|
| ellipsis-2|  -webkit-line-clamp: 2;<br>overflow: hidden;<br>word-break: break-all;<br>text-overflow: ellipsis;<br>display: -webkit-box;<br>-webkit-box-orient: vertical;<br>|

  
## 效果展示
单行 ellipsis-1
<div class="a-ellipsis-1 a-w-100 a-border">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>

```html
// 实际代码
<div class="ellipsis-1">文字文字文字文字文字文字文字文字</div>

<style>
  .ellipsis-1{
    -webkit-line-clamp: 1;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
</style>
```
两行 ellipsis-2
<div class="a-ellipsis-2 a-w-100 a-border">文字文字文字文字文字文字文字文字</div>

```html
<div class="ellipsis-2">文字文字文字文字文字文字文字文字</div>

<style>
  .ellipsis-2{
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
</style>
```
