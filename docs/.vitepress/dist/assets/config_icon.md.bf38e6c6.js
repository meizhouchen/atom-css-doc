import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.47804b91.js";const d=JSON.parse('{"title":"icons 图标","description":"","frontmatter":{},"headers":[],"relativePath":"config/icon.md","filePath":"config/icon.md"}'),l={name:"config/icon.md"},o=p(`<h1 id="icons-图标" tabindex="-1">icons 图标 <a class="header-anchor" href="#icons-图标" aria-label="Permalink to &quot;icons 图标&quot;">​</a></h1><h2 id="导入自己的ttf文件-扩展字体图标" tabindex="-1">导入自己的ttf文件，扩展字体图标 <a class="header-anchor" href="#导入自己的ttf文件-扩展字体图标" aria-label="Permalink to &quot;导入自己的ttf文件，扩展字体图标&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// icons为数组</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">icons</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;aaa-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 图标前缀 可以随意命名 避免多个字体间冲突 使用-结尾</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;./static/font.ttf&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// ./相当于当前项目，去ttf文件的路径/文件名.ttf</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;i-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 可以随意命名 避免多个字体间冲突</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;//at.alicdn.com/t/c/font_xxxxxxxxxxxxxxxxx.css&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 阿里巴巴图标库生成的项目css地址 可直接复制替换</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;i-url-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 可以随意命名 避免多个字体间冲突</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;https://www.my.com/font.ttf&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 线上的字体文件位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// icons为数组</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">icons</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;aaa-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 图标前缀 可以随意命名 避免多个字体间冲突 使用-结尾</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;./static/font.ttf&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// ./相当于当前项目，去ttf文件的路径/文件名.ttf</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;i-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 可以随意命名 避免多个字体间冲突</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;//at.alicdn.com/t/c/font_xxxxxxxxxxxxxxxxx.css&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 阿里巴巴图标库生成的项目css地址 可直接复制替换</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;i-url-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 可以随意命名 避免多个字体间冲突</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;https://www.my.com/font.ttf&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 线上的字体文件位置</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span></code></pre></div><p>示例</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// prefix: &#39;a-&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  presets: [</span><span style="color:#B392F0;">preset</span><span style="color:#E1E4E8;">()], </span><span style="color:#6A737D;">// 预设</span></span>
<span class="line"><span style="color:#E1E4E8;">  icons: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;uni-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用 class=&quot;uni-color&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;./static/fonts/uniicons.ttf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;uv-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用   class=&quot;uv-level&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;./static/fonts/uview.ttf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;tn-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用   class=&quot;tn-font&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;./static/fonts/tuniao.ttf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// prefix: &#39;a-&#39;,</span></span>
<span class="line"><span style="color:#24292E;">  presets: [</span><span style="color:#6F42C1;">preset</span><span style="color:#24292E;">()], </span><span style="color:#6A737D;">// 预设</span></span>
<span class="line"><span style="color:#24292E;">  icons: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;uni-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用 class=&quot;uni-color&quot;</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;./static/fonts/uniicons.ttf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;uv-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用   class=&quot;uv-level&quot;</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;./static/fonts/uview.ttf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;tn-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用   class=&quot;tn-font&quot;</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;./static/fonts/tuniao.ttf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,5),e=[o];function t(c,r,E,i,y,f){return n(),a("div",null,e)}const u=s(l,[["render",t]]);export{d as __pageData,u as default};
