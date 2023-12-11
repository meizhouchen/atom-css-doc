import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.47804b91.js";const d=JSON.parse('{"title":"fontSize","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config/theme/fontSize.md","filePath":"guide/config/theme/fontSize.md"}'),p={name:"guide/config/theme/fontSize.md"},o=l(`<h1 id="fontsize" tabindex="-1">fontSize <a class="header-anchor" href="#fontsize" aria-label="Permalink to &quot;fontSize&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">生效属性</p><h4 id="font-size" tabindex="-1">font-size <a class="header-anchor" href="#font-size" aria-label="Permalink to &quot;font-size&quot;">​</a></h4></div><h2 id="编写规则" tabindex="-1">编写规则 <a class="header-anchor" href="#编写规则" aria-label="Permalink to &quot;编写规则&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@meizhou/atomcss&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { preset } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@meizhou/atomcss/preset&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  presets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">preset</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  theme: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对于\`font-size\`属性生效</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    fontSize: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;字母名称&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;对应值&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;xs&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;sm&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;24&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;md&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;28&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;lg&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;32&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;36&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;2xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;40&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;3xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;80&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;4xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;120&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@meizhou/atomcss&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { preset } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@meizhou/atomcss/preset&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  presets: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">preset</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">  theme: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对于\`font-size\`属性生效</span></span>
<span class="line highlighted"><span style="color:#24292E;">    fontSize: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;字母名称&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;对应值&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;xs&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;sm&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;24&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;md&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;28&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;lg&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;32&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;36&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;2xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;40&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;3xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;80&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;4xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;120&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line highlighted"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2>`,5),e=[o];function t(c,r,E,i,y,h){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};