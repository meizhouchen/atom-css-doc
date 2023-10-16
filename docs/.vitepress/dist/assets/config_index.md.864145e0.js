import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.4675998f.js";const f=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"config/index.md","filePath":"config/index.md"}'),l={name:"config/index.md"},o=p(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><h2 id="简单示例" tabindex="-1">简单示例 <a class="header-anchor" href="#简单示例" aria-label="Permalink to &quot;简单示例&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@meizhou/atomcss&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { preset } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@meizhou/atomcss/preset&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { myPreset } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;相对路径/myPresetObject&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 自己写的预设规则</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    prefix: </span><span style="color:#9ECBFF;">&#39;a-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 前缀 用于避免样式冲突</span></span>
<span class="line"><span style="color:#E1E4E8;">    unit: </span><span style="color:#9ECBFF;">&#39;px&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 宽高等的单位</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 预设</span></span>
<span class="line"><span style="color:#E1E4E8;">    presets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">preset</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 插件默认预设</span></span>
<span class="line"><span style="color:#E1E4E8;">      myPreset </span><span style="color:#6A737D;">// 自己写的预设，对象形式 import导入</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 单一的规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 数组形式</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#9ECBFF;">&#39;flex&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;display:flex;&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 对象形式</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;jc-c&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;justify-content: center;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;border-main&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;border:2rpx solid #FB7302;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;border-E6&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;border:2rpx solid #E6E6E6;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;c-white&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;color:#FFFFFF;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;c-#f&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;color:#ffffff;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 动态规则 order-1 生成 .order-1{order:1}</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">(?:order)-(-</span><span style="color:#F97583;">?</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">*</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#F97583;">?</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#FFAB70;">match</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RegExpMatchArray</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">unit</span><span style="color:#E1E4E8;"> }</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Config</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">          order: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">match</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">};\`</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        { completionItem: [</span><span style="color:#9ECBFF;">&#39;order-1&#39;</span><span style="color:#E1E4E8;">] } </span><span style="color:#6A737D;">// 编辑器的代码提示候选项</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@meizhou/atomcss&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { preset } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@meizhou/atomcss/preset&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { myPreset } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;相对路径/myPresetObject&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 自己写的预设规则</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    prefix: </span><span style="color:#032F62;">&#39;a-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 前缀 用于避免样式冲突</span></span>
<span class="line"><span style="color:#24292E;">    unit: </span><span style="color:#032F62;">&#39;px&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 宽高等的单位</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 预设</span></span>
<span class="line"><span style="color:#24292E;">    presets: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">preset</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 插件默认预设</span></span>
<span class="line"><span style="color:#24292E;">      myPreset </span><span style="color:#6A737D;">// 自己写的预设，对象形式 import导入</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 单一的规则</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 数组形式</span></span>
<span class="line"><span style="color:#24292E;">      [</span><span style="color:#032F62;">&#39;flex&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;display:flex;&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 对象形式</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;jc-c&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;justify-content: center;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;border-main&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;border:2rpx solid #FB7302;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;border-E6&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;border:2rpx solid #E6E6E6;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;c-white&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;color:#FFFFFF;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;c-#f&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;color:#ffffff;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 动态规则 order-1 生成 .order-1{order:1}</span></span>
<span class="line"><span style="color:#24292E;">      [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">(?:order)-(-</span><span style="color:#D73A49;">?</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">*</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#D73A49;">?</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#E36209;">match</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RegExpMatchArray</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">unit</span><span style="color:#24292E;"> }</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Config</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">          order: </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">match</span><span style="color:#032F62;">[</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">]</span><span style="color:#032F62;">};\`</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">        { completionItem: [</span><span style="color:#032F62;">&#39;order-1&#39;</span><span style="color:#24292E;">] } </span><span style="color:#6A737D;">// 编辑器的代码提示候选项</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>自己写的预设，对象形式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 路径/myPresetObject.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">myPreset</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;"> rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 数组形式</span></span>
<span class="line"><span style="color:#E1E4E8;">      [</span><span style="color:#9ECBFF;">&#39;flex&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;display:flex;&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 对象形式</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;jc-c&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;justify-content: center;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;border-main&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;border:2rpx solid #FB7302;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;border-E6&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;border:2rpx solid #E6E6E6;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;c-white&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;color:#FFFFFF;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 路径/myPresetObject.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">myPreset</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;"> rules: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 数组形式</span></span>
<span class="line"><span style="color:#24292E;">      [</span><span style="color:#032F62;">&#39;flex&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;display:flex;&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 对象形式</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;jc-c&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;justify-content: center;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;border-main&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;border:2rpx solid #FB7302;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;border-E6&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;border:2rpx solid #E6E6E6;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;c-white&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;color:#FFFFFF;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,5),e=[o];function c(r,t,E,y,i,F){return n(),a("div",null,e)}const m=s(l,[["render",c]]);export{f as __pageData,m as default};
