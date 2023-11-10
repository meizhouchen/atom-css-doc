# 安装

插件市场导入项目

## 使用

线条outline
```html
<ICamera></ICamera>
<ICamera theme="outline"/>
<ICamera theme="outline" fill="#2F88FF"/>
```

填充filled
```html
<ICamera theme="filled" fill="#333"/>
```

双色two-tone
```html
<ICamera theme="two-tone" :fill="['#333' ,'#2F88FF']"/>
```

多色multi-color
```html
<ICamera theme="multi-color" :fill="['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']"/>
```

线条粗细strokeWidth
```html
<ICamera :strokeWidth="1"></ICamera>
<ICamera :strokeWidth="2"></ICamera>
<ICamera :strokeWidth="3"></ICamera>
<ICamera :strokeWidth="4"></ICamera>
```

尺寸size
```html
<ICamera :size="20"></ICamera>
<ICamera size="20"></ICamera>
<ICamera size="20px"></ICamera>
<ICamera size="40rpx"></ICamera>
<ICamera size="2em"></ICamera>
```

端点类型strokeLinecap
```html
<ICamera ></ICamera>
<camera strokeLinecap="round"/>
<camera strokeLinecap="butt"/>
<camera strokeLinecap="square"/>
```

拐点类型strokeLinejoin
```html
<camera strokeLinejoin="round"/>
<camera strokeLinejoin="miter"/>
<camera strokeLinejoin="bevel"/>
```
