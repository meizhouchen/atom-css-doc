import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.47804b91.js";const g=JSON.parse('{"title":"icons 图标","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config/icon.md","filePath":"guide/config/icon.md"}'),p={name:"guide/config/icon.md"},o=l(`<h1 id="icons-图标" tabindex="-1">icons 图标 <a class="header-anchor" href="#icons-图标" aria-label="Permalink to &quot;icons 图标&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">摇树优化</p><p>通过这种方式导入的ttf图标，将会将使用到的图标打包近项目，做了摇树优化，减小项目体积</p></div><h2 id="导入-ttf-文件-扩展字体图标" tabindex="-1">导入 ttf 文件，扩展字体图标 <a class="header-anchor" href="#导入-ttf-文件-扩展字体图标" aria-label="Permalink to &quot;导入 ttf 文件，扩展字体图标&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// icons为数组</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">icons</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;aaa-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 图标前缀 可以随意命名 避免多个字体间冲突</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;./相对于当前项目去 ttf 文件的路径/文件.ttf&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 相对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// icons为数组</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">icons</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;aaa-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 图标前缀 可以随意命名 避免多个字体间冲突</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;./相对于当前项目去 ttf 文件的路径/文件.ttf&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 相对路径</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span></code></pre></div><h2 id="配置示例" tabindex="-1">配置示例 <a class="header-anchor" href="#配置示例" aria-label="Permalink to &quot;配置示例&quot;">​</a></h2><p>建议使用 i 开头，表示图标</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// prefix: &#39;a-&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  presets: [</span><span style="color:#B392F0;">preset</span><span style="color:#E1E4E8;">()], </span><span style="color:#6A737D;">// 预设</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  icons: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;iuni-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用 class=&quot;uni-color&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;./static/fonts/uniicons.ttf&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 相对路径</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;iuv-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用   class=&quot;uv-level&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;./static/fonts/uview.ttf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;itn-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用   class=&quot;tn-font&quot;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;./static/fonts/tuniao.ttf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// prefix: &#39;a-&#39;,</span></span>
<span class="line"><span style="color:#24292E;">  presets: [</span><span style="color:#6F42C1;">preset</span><span style="color:#24292E;">()], </span><span style="color:#6A737D;">// 预设</span></span>
<span class="line highlighted"><span style="color:#24292E;">  icons: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">    {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;iuni-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用 class=&quot;uni-color&quot;</span></span>
<span class="line highlighted"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;./static/fonts/uniicons.ttf&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 相对路径</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;iuv-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用   class=&quot;uv-level&quot;</span></span>
<span class="line highlighted"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;./static/fonts/uview.ttf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;itn-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用   class=&quot;tn-font&quot;</span></span>
<span class="line highlighted"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;./static/fonts/tuniao.ttf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line highlighted"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// 给text标签增加 class 即可</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;iuni-bars &quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 改颜色  增加颜色样式c-brand即可 或者 使用style样式进行修改</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;iuni-wallet c-brand&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 改大小  增加文字大小样式fs-80即可</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;iuv-account fs-80&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// 给text标签增加 class 即可</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">text</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;iuni-bars &quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">text</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 改颜色  增加颜色样式c-brand即可 或者 使用style样式进行修改</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">text</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;iuni-wallet c-brand&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">text</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 改大小  增加文字大小样式fs-80即可</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">text</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;iuv-account fs-80&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">text</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,9),t=[o];function e(c,i,r,E,y,h){return n(),a("div",null,t)}const u=s(p,[["render",e]]);export{g as __pageData,u as default};
