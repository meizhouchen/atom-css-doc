import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.47804b91.js";const F=JSON.parse('{"title":"起源","description":"","frontmatter":{},"headers":[],"relativePath":"config/theme/spacing.md","filePath":"config/theme/spacing.md"}'),l={name:"config/theme/spacing.md"},o=p(`<h1 id="起源" tabindex="-1">起源 <a class="header-anchor" href="#起源" aria-label="Permalink to &quot;起源&quot;">​</a></h1><h2 id="前端-css-样式常见问题" tabindex="-1">前端 css 样式常见问题 <a class="header-anchor" href="#前端-css-样式常见问题" aria-label="Permalink to &quot;前端 css 样式常见问题&quot;">​</a></h2><ol><li>css起名困难</li><li>样式上下跳转</li><li>代码样式调整麻烦</li><li>...</li></ol><p>是否有更好的解决方案？</p><h2 id="公共-css-的问题" tabindex="-1">公共 css 的问题 <a class="header-anchor" href="#公共-css-的问题" aria-label="Permalink to &quot;公共 css 的问题&quot;">​</a></h2><p>通常，公共 css 使用 scss 或者 less 编写，以 scss 为例</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// </span><span style="color:#85E89D;">style</span><span style="color:#B392F0;">.scss</span></span>
<span class="line"><span style="color:#E1E4E8;">// 定义字体(rpx)单位，大于或等于20的都为rpx单位字体</span></span>
<span class="line"><span style="color:#F97583;">@for</span><span style="color:#E1E4E8;"> $i from 20 through 40 {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">.u-font-</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: $i + rpx;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// </span><span style="color:#22863A;">style</span><span style="color:#6F42C1;">.scss</span></span>
<span class="line"><span style="color:#24292E;">// 定义字体(rpx)单位，大于或等于20的都为rpx单位字体</span></span>
<span class="line"><span style="color:#D73A49;">@for</span><span style="color:#24292E;"> $i from 20 through 40 {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">.u-font-</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: $i + rpx;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>它将被编译为：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.u-font-20</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> rpx; }</span></span>
<span class="line"><span style="color:#B392F0;">.u-font-21</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;"> rpx; }</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#B392F0;">.u-font-40</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;"> rpx; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.u-font-20</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;"> rpx; }</span></span>
<span class="line"><span style="color:#6F42C1;">.u-font-21</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">21</span><span style="color:#24292E;"> rpx; }</span></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"><span style="color:#6F42C1;">.u-font-40</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">40</span><span style="color:#24292E;"> rpx; }</span></span></code></pre></div><p>真实开发中，我可能只用 28rpx,32rpx 这两个，剩下18个未使用的 css，小程序限制主包2M的情况下，无疑是巨大的浪费</p><p>假如项目需要一个50rpx的字体，由于公用css没有定义，使得我必须自己手写一个</p><p>是否有更好的解决方案？</p><h2 id="按需生成" tabindex="-1">按需生成 <a class="header-anchor" href="#按需生成" aria-label="Permalink to &quot;按需生成&quot;">​</a></h2><p>atomcss的作用</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;icon-100&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Vue logo&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;./assets/logo.png&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">HelloWorld</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;w-100%&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">msg</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Welcome to Your Vue.js App&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;icon-100&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Vue logo&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;./assets/logo.png&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">HelloWorld</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;w-100%&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">msg</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Welcome to Your Vue.js App&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>上面的class样式将被编译为：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.icon-100</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> rpx; </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> rpx;}</span></span>
<span class="line"><span style="color:#B392F0;">.w-100_</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.icon-100</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> rpx; </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> rpx;}</span></span>
<span class="line"><span style="color:#6F42C1;">.w-100_</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">; }</span></span></code></pre></div><p>问题总是在不停的产生，需要有人来解决，解决办法希望是简单的，实用的，易上手的，兼容uniapp的... 被你喜欢的</p><p>不求完美，只求持续进步</p>`,19),t=[o];function e(c,r,E,y,i,d){return a(),n("div",null,t)}const h=s(l,[["render",e]]);export{F as __pageData,h as default};
