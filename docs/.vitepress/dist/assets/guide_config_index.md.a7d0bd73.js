import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.47804b91.js";const u=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config/index.md","filePath":"guide/config/index.md"}'),p={name:"guide/config/index.md"},o=l(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><h2 id="简单示例" tabindex="-1">简单示例 <a class="header-anchor" href="#简单示例" aria-label="Permalink to &quot;简单示例&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@meizhou/atomcss&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { preset } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@meizhou/atomcss/preset&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { myPreset } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;相对路径/myPresetObject&quot;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 自己写的预设规则</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    prefix: </span><span style="color:#9ECBFF;">&#39;a-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 前缀 用于老项目中避免样式冲突 默认无</span></span>
<span class="line"><span style="color:#E1E4E8;">    unit: </span><span style="color:#9ECBFF;">&#39;rpx&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 宽高等的单位 默认px</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 预设</span></span>
<span class="line"><span style="color:#E1E4E8;">    presets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">preset</span><span style="color:#E1E4E8;">(), </span><span style="color:#6A737D;">// 默认预设 </span></span>
<span class="line"><span style="color:#E1E4E8;">      myPreset </span><span style="color:#6A737D;">// 自己写的预设，对象形式 import导入</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    theme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 对于 \`color\`,\`background-color\`,\`border-color\` 属性生效</span></span>
<span class="line"><span style="color:#E1E4E8;">      colors: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        brand: </span><span style="color:#9ECBFF;">&#39;#ff0000&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用示例：字体颜色class=&quot;c-brand&quot; 背景颜色class=&quot;bg-brand&quot; 边框颜色class=&quot;bc-brand&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        brandLine: </span><span style="color:#9ECBFF;">&#39;#aadcf4&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用示例：字体颜色class=&quot;c-brand-line&quot; 背景颜色class=&quot;bg-brand-line&quot; 边框颜色class=&quot;bc-brand-line&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        brandBg: </span><span style="color:#9ECBFF;">&#39;#f6faff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 对象形式</span></span>
<span class="line"><span style="color:#E1E4E8;">        warning: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          DEFAULT:</span><span style="color:#9ECBFF;">&#39;#fab938&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用示例：字体颜色class=&quot;c-warning&quot; 背景颜色class=&quot;bg-warning&quot; 边框颜色class=&quot;bc-warning&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          line: </span><span style="color:#9ECBFF;">&#39;#fcdb9b&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用示例：字体颜色class=&quot;c-warning-line&quot; 背景颜色class=&quot;bg-warning-line&quot; 边框颜色class=&quot;bc-warning-line&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          bg: </span><span style="color:#9ECBFF;">&#39;#fff8ed&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 对于\`font-size\`属性生效</span></span>
<span class="line"><span style="color:#E1E4E8;">      fontSize: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;xs&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;sm&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;24&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;md&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;28&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;lg&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;32&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;36&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;2xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;40&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;3xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;80&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;4xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;120&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 对于\`border-radius\`属性生效</span></span>
<span class="line"><span style="color:#E1E4E8;">      borderRadius: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;xs&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;sm&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;24&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;md&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;28&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;lg&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;32&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;36&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;2xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;40&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;3xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;80&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;4xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;120&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 对于\`width\`,\`height\`,\`padding\`,\`margin\`属性生效</span></span>
<span class="line"><span style="color:#E1E4E8;">      spacing: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;xs&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;6&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;sm&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;10&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;md&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;16&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;lg&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;xl&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;26&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
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
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#FFAB70;">match</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RegExpMatchArray</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">unit</span><span style="color:#E1E4E8;"> }</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Config</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`order:\${</span><span style="color:#E1E4E8;">match</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">};\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        { completionItem: [</span><span style="color:#9ECBFF;">&#39;order-1&#39;</span><span style="color:#E1E4E8;">] } </span><span style="color:#6A737D;">// 编辑器的代码提示候选项</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ttf字体图标 可以随意配置多个ttf文件 </span></span>
<span class="line"><span style="color:#E1E4E8;">    icons: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        prefix: </span><span style="color:#9ECBFF;">&#39;iuni-&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 图标前缀 可以随意命名 避免多个字体间冲突 建议i开头 表示图标</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;./static/fonts/uniicons.ttf&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 相对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        prefix: </span><span style="color:#9ECBFF;">&#39;iuv-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用   class=&quot;uv-level&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;./static/fonts/uview.ttf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        prefix: </span><span style="color:#9ECBFF;">&#39;itn-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 使用   class=&quot;tn-font&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;./static/fonts/tuniao.ttf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@meizhou/atomcss&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { preset } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@meizhou/atomcss/preset&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { myPreset } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;相对路径/myPresetObject&quot;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 自己写的预设规则</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    prefix: </span><span style="color:#032F62;">&#39;a-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 前缀 用于老项目中避免样式冲突 默认无</span></span>
<span class="line"><span style="color:#24292E;">    unit: </span><span style="color:#032F62;">&#39;rpx&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 宽高等的单位 默认px</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 预设</span></span>
<span class="line"><span style="color:#24292E;">    presets: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">preset</span><span style="color:#24292E;">(), </span><span style="color:#6A737D;">// 默认预设 </span></span>
<span class="line"><span style="color:#24292E;">      myPreset </span><span style="color:#6A737D;">// 自己写的预设，对象形式 import导入</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    theme: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 对于 \`color\`,\`background-color\`,\`border-color\` 属性生效</span></span>
<span class="line"><span style="color:#24292E;">      colors: {</span></span>
<span class="line"><span style="color:#24292E;">        brand: </span><span style="color:#032F62;">&#39;#ff0000&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用示例：字体颜色class=&quot;c-brand&quot; 背景颜色class=&quot;bg-brand&quot; 边框颜色class=&quot;bc-brand&quot;</span></span>
<span class="line"><span style="color:#24292E;">        brandLine: </span><span style="color:#032F62;">&#39;#aadcf4&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用示例：字体颜色class=&quot;c-brand-line&quot; 背景颜色class=&quot;bg-brand-line&quot; 边框颜色class=&quot;bc-brand-line&quot;</span></span>
<span class="line"><span style="color:#24292E;">        brandBg: </span><span style="color:#032F62;">&#39;#f6faff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 对象形式</span></span>
<span class="line"><span style="color:#24292E;">        warning: {</span></span>
<span class="line"><span style="color:#24292E;">          DEFAULT:</span><span style="color:#032F62;">&#39;#fab938&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用示例：字体颜色class=&quot;c-warning&quot; 背景颜色class=&quot;bg-warning&quot; 边框颜色class=&quot;bc-warning&quot;</span></span>
<span class="line"><span style="color:#24292E;">          line: </span><span style="color:#032F62;">&#39;#fcdb9b&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用示例：字体颜色class=&quot;c-warning-line&quot; 背景颜色class=&quot;bg-warning-line&quot; 边框颜色class=&quot;bc-warning-line&quot;</span></span>
<span class="line"><span style="color:#24292E;">          bg: </span><span style="color:#032F62;">&#39;#fff8ed&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 对于\`font-size\`属性生效</span></span>
<span class="line"><span style="color:#24292E;">      fontSize: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;xs&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;sm&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;24&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;md&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;28&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;lg&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;32&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;36&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;2xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;40&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;3xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;80&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;4xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;120&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 对于\`border-radius\`属性生效</span></span>
<span class="line"><span style="color:#24292E;">      borderRadius: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;xs&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;sm&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;24&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;md&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;28&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;lg&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;32&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;36&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;2xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;40&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;3xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;80&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;4xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;120&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 对于\`width\`,\`height\`,\`padding\`,\`margin\`属性生效</span></span>
<span class="line"><span style="color:#24292E;">      spacing: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;xs&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;6&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;sm&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;10&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;md&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;16&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;lg&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;xl&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;26&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
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
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#E36209;">match</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RegExpMatchArray</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">unit</span><span style="color:#24292E;"> }</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Config</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`order:\${</span><span style="color:#24292E;">match</span><span style="color:#032F62;">[</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">]</span><span style="color:#032F62;">};\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        { completionItem: [</span><span style="color:#032F62;">&#39;order-1&#39;</span><span style="color:#24292E;">] } </span><span style="color:#6A737D;">// 编辑器的代码提示候选项</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ttf字体图标 可以随意配置多个ttf文件 </span></span>
<span class="line"><span style="color:#24292E;">    icons: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        prefix: </span><span style="color:#032F62;">&#39;iuni-&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 图标前缀 可以随意命名 避免多个字体间冲突 建议i开头 表示图标</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;./static/fonts/uniicons.ttf&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 相对路径</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        prefix: </span><span style="color:#032F62;">&#39;iuv-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用   class=&quot;uv-level&quot;</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;./static/fonts/uview.ttf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        prefix: </span><span style="color:#032F62;">&#39;itn-&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 使用   class=&quot;tn-font&quot;</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;./static/fonts/tuniao.ttf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
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
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,5),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const f=s(p,[["render",c]]);export{u as __pageData,f as default};
