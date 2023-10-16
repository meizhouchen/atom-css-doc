import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.4675998f.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"config/outPutCss.md","filePath":"config/outPutCss.md"}'),l={name:"config/outPutCss.md"},o=p(`<h2 id="把生成的css输出到指定路径的文件中" tabindex="-1">把生成的css输出到指定路径的文件中 <a class="header-anchor" href="#把生成的css输出到指定路径的文件中" aria-label="Permalink to &quot;把生成的css输出到指定路径的文件中&quot;">​</a></h2><p>便于查看生成的css内容，便于开发者知道有哪些css会被影响</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@meizhou/atomcss&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { preset } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@meizhou/atomcss/preset&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> myPreset </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;相对路径/myPreset&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    prefix: </span><span style="color:#9ECBFF;">&#39;a-&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    unit: </span><span style="color:#9ECBFF;">&#39;px&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 宽高等的单位</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    preview:</span><span style="color:#9ECBFF;">&#39;./preview.css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    presets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">preset</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      myPreset</span></span>
<span class="line"><span style="color:#E1E4E8;">    ], </span><span style="color:#6A737D;">//预设</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@meizhou/atomcss&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { preset } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@meizhou/atomcss/preset&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> myPreset </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;相对路径/myPreset&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    prefix: </span><span style="color:#032F62;">&#39;a-&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    unit: </span><span style="color:#032F62;">&#39;px&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 宽高等的单位</span></span>
<span class="line highlighted"><span style="color:#24292E;">    preview:</span><span style="color:#032F62;">&#39;./preview.css&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    presets: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">preset</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">      myPreset</span></span>
<span class="line"><span style="color:#24292E;">    ], </span><span style="color:#6A737D;">//预设</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>项目中自动生成的css样式，会统一生成到preview.css文件中，不需要引入项目，不影响项目，单纯用于预览</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// preview</span><span style="color:#B392F0;">.css</span></span>
<span class="line"><span style="color:#E1E4E8;">// 项目中生成的css样式</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// preview</span><span style="color:#6F42C1;">.css</span></span>
<span class="line"><span style="color:#24292E;">// 项目中生成的css样式</span></span>
<span class="line"><span style="color:#24292E;">...</span></span></code></pre></div>`,5),e=[o];function t(c,r,i,E,y,d){return n(),a("div",null,e)}const m=s(l,[["render",t]]);export{u as __pageData,m as default};
