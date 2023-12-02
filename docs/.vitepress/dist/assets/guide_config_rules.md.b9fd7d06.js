import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.47804b91.js";const g=JSON.parse('{"title":"rules 规则","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config/rules.md","filePath":"guide/config/rules.md"}'),p={name:"guide/config/rules.md"},o=l(`<h1 id="rules-规则" tabindex="-1">rules 规则 <a class="header-anchor" href="#rules-规则" aria-label="Permalink to &quot;rules 规则&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@meizhou/atomcss&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { preset } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@meizhou/atomcss/preset&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  presets: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">preset</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 自定义规则</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  rules: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 静态规则：</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// class=&quot;c-custom&quot;  =&gt; .c-custom{ color:#FFFFFF; }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;c-custom&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;color:#FFFFFF;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// class=&quot;center&quot;  =&gt; .center{ justify-content: center;align-items: center; }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;justify-content: center;align-items: center;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// class=&quot;自定义的class&quot;  =&gt; .自定义的class{ 对应生成的值 }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;自定义的class&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;对应生成的值&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 动态规则：</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// [正则表达式, (正则匹配内容, { unit }) =&gt; { return &#39;对应生成的值&#39;}],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    [</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">m-(</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">match</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">unit</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`margin: \${</span><span style="color:#E1E4E8;">match</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">unit</span><span style="color:#9ECBFF;">};\`</span><span style="color:#E1E4E8;"> ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 解释：</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// /^m-(\\d+)$/ 会被匹配到形如 m-{数值} ，例如： m-10</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// (match, { unit }) =&gt; \`margin: \${match[1]}\${unit};\`</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// match是正则匹配到的内容  match[1]对应(\\d+)匹配到的数值</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// unit 是配置文件中的值 默认为px</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// \`margin: \${match[1]}\${unit};\` =&gt; &#39;margin: 10px&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 最终生成：.m-10{ margin: 10px }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// atomcss.config.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@meizhou/atomcss&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { preset } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@meizhou/atomcss/preset&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  presets: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">preset</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 自定义规则</span></span>
<span class="line highlighted"><span style="color:#24292E;">  rules: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 静态规则：</span></span>
<span class="line highlighted"><span style="color:#24292E;">    {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// class=&quot;c-custom&quot;  =&gt; .c-custom{ color:#FFFFFF; }</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;c-custom&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;color:#FFFFFF;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// class=&quot;center&quot;  =&gt; .center{ justify-content: center;align-items: center; }</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;justify-content: center;align-items: center;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// class=&quot;自定义的class&quot;  =&gt; .自定义的class{ 对应生成的值 }</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;自定义的class&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;对应生成的值&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 动态规则：</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// [正则表达式, (正则匹配内容, { unit }) =&gt; { return &#39;对应生成的值&#39;}],</span></span>
<span class="line highlighted"><span style="color:#24292E;">    [</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">m-(</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">match</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">unit</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`margin: \${</span><span style="color:#24292E;">match</span><span style="color:#032F62;">[</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">]</span><span style="color:#032F62;">}\${</span><span style="color:#24292E;">unit</span><span style="color:#032F62;">};\`</span><span style="color:#24292E;"> ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 解释：</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// /^m-(\\d+)$/ 会被匹配到形如 m-{数值} ，例如： m-10</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// (match, { unit }) =&gt; \`margin: \${match[1]}\${unit};\`</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// match是正则匹配到的内容  match[1]对应(\\d+)匹配到的数值</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// unit 是配置文件中的值 默认为px</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// \`margin: \${match[1]}\${unit};\` =&gt; &#39;margin: 10px&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 最终生成：.m-10{ margin: 10px }</span></span>
<span class="line highlighted"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="动态规则" tabindex="-1">动态规则 <a class="header-anchor" href="#动态规则" aria-label="Permalink to &quot;动态规则&quot;">​</a></h2><blockquote><p>动态规则使用 match 进行匹配，匹配有结果，调用数组第二项的方法，并把匹配值当做参数</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rules</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">m-(</span><span style="color:#79B8FF;">\\d</span><span style="color:#F97583;">+</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">match</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">unit</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`margin:\${</span><span style="color:#E1E4E8;">match</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">unit</span><span style="color:#9ECBFF;">};\`</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;m-10&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">m</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> 会被</span><span style="color:#F97583;">/^</span><span style="color:#E1E4E8;">m</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">(\\d</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">)$</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">匹配到</span></span>
<span class="line"><span style="color:#B392F0;">这时会调用</span><span style="color:#E1E4E8;">(match, { unit }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`margin:\${</span><span style="color:#E1E4E8;">match</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">]</span><span style="color:#9ECBFF;">}\${</span><span style="color:#E1E4E8;">unit</span><span style="color:#9ECBFF;">};\`</span></span>
<span class="line"><span style="color:#FFAB70;">得到返回值</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#9ECBFF;">&#39;margin&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\`10rpx;\`</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// unit为配置的单位 默认rpx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">m</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> 会全局生成css样式</span></span>
<span class="line"><span style="color:#E1E4E8;">.m</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">margin</span><span style="color:#E1E4E8;">:10rpx;;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">m-(</span><span style="color:#005CC5;">\\d</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">match</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">unit</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`margin:\${</span><span style="color:#24292E;">match</span><span style="color:#032F62;">[</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">]</span><span style="color:#032F62;">}\${</span><span style="color:#24292E;">unit</span><span style="color:#032F62;">};\`</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;m-10&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">m</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> 会被</span><span style="color:#D73A49;">/^</span><span style="color:#24292E;">m</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">(\\d</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">)$</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">匹配到</span></span>
<span class="line"><span style="color:#6F42C1;">这时会调用</span><span style="color:#24292E;">(match, { unit }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`margin:\${</span><span style="color:#24292E;">match</span><span style="color:#032F62;">[</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">]</span><span style="color:#032F62;">}\${</span><span style="color:#24292E;">unit</span><span style="color:#032F62;">};\`</span></span>
<span class="line"><span style="color:#E36209;">得到返回值</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#032F62;">&#39;margin&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\`10rpx;\`</span><span style="color:#24292E;"> } </span><span style="color:#6A737D;">// unit为配置的单位 默认rpx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">m</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> 会全局生成css样式</span></span>
<span class="line"><span style="color:#24292E;">.m</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">{</span><span style="color:#6F42C1;">margin</span><span style="color:#24292E;">:10rpx;;}</span></span></code></pre></div><h2 id="静态规则" tabindex="-1">静态规则 <a class="header-anchor" href="#静态规则" aria-label="Permalink to &quot;静态规则&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">rules</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 数组形式</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;flex&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;display:flex;&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 对象形式</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;jc-c&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;justify-content: center;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;border-main&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;border:2rpx solid #FB7302;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;border-E6&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;border:2rpx solid #E6E6E6;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;c-white&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;color:#FFFFFF;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">当rules数组中增加了上面这些规则</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">对于：</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">div class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;flex jc-c&quot;</span><span style="color:#F97583;">&gt;&lt;/</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">将会根据上面rules定义的规则，匹配class中的 flex jc</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">c</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">全局生成css样式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">.flex{</span><span style="color:#B392F0;">display</span><span style="color:#E1E4E8;">:flex;}</span></span>
<span class="line"><span style="color:#E1E4E8;">.jc</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">c{justify</span><span style="color:#F97583;">-</span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">: center;}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 数组形式</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;flex&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;display:flex;&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 对象形式</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;jc-c&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;justify-content: center;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;border-main&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;border:2rpx solid #FB7302;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;border-E6&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;border:2rpx solid #E6E6E6;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;c-white&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;color:#FFFFFF;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">当rules数组中增加了上面这些规则</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">对于：</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">div class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;flex jc-c&quot;</span><span style="color:#D73A49;">&gt;&lt;/</span><span style="color:#24292E;">div</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">将会根据上面rules定义的规则，匹配class中的 flex jc</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">c</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">全局生成css样式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">.flex{</span><span style="color:#6F42C1;">display</span><span style="color:#24292E;">:flex;}</span></span>
<span class="line"><span style="color:#24292E;">.jc</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">c{justify</span><span style="color:#D73A49;">-</span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">: center;}</span></span></code></pre></div>`,7),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{g as __pageData,d as default};
