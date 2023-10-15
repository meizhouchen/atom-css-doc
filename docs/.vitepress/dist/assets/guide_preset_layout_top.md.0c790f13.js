import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.2127afa9.js";const h=JSON.parse('{"title":"上下左右","description":"","frontmatter":{},"headers":[],"relativePath":"guide/preset/layout/top.md","filePath":"guide/preset/layout/top.md"}'),p={name:"guide/preset/layout/top.md"},o=l(`<h1 id="上下左右" tabindex="-1">上下左右 <a class="header-anchor" href="#上下左右" aria-label="Permalink to &quot;上下左右&quot;">​</a></h1><h2 id="上" tabindex="-1">上 <a class="header-anchor" href="#上" aria-label="Permalink to &quot;上&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 配置的单位</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;t-10&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top:10px;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 指定单位</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;t-10%&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top:10%;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;t-10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top:10vw;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 负数</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;t--10%&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top:-10%;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;t--10vh&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top:-10vh;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 小数</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;t-.10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top:.10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;t-10.10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top:10.10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;t-10.10&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top:10.10px;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 配置的单位</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;t-10&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top:10px;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 指定单位</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;t-10%&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top:10%;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;t-10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top:10vw;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 负数</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;t--10%&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top:-10%;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;t--10vh&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top:-10vh;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 小数</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;t-.10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top:.10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;t-10.10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top:10.10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;t-10.10&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top:10.10px;&#39;</span></span></code></pre></div><h2 id="下" tabindex="-1">下 <a class="header-anchor" href="#下" aria-label="Permalink to &quot;下&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;b-10&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bottom:10px;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;b-10%&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bottom:10%;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;b--10%&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bottom:-10%;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;b--10vh&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bottom:-10vh;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;b-10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bottom:10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;b-.10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bottom:.10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;b-10.10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bottom:10.10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;b-10.10&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bottom:10.10px;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;b-10&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bottom:10px;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;b-10%&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bottom:10%;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;b--10%&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bottom:-10%;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;b--10vh&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bottom:-10vh;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;b-10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bottom:10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;b-.10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bottom:.10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;b-10.10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bottom:10.10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;b-10.10&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bottom:10.10px;&#39;</span></span></code></pre></div><h2 id="左" tabindex="-1">左 <a class="header-anchor" href="#左" aria-label="Permalink to &quot;左&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;l-10&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;left:10px;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;l-10%&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;left:10%;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;l--10%&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;left:-10%;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;l--10vh&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;left:-10vh;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;l-10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;left:10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;l-.10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;left:.10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;l-10.10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;left:10.10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;l-10.10&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;left:10.10px;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;l-10&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;left:10px;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;l-10%&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;left:10%;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;l--10%&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;left:-10%;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;l--10vh&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;left:-10vh;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;l-10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;left:10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;l-.10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;left:.10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;l-10.10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;left:10.10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;l-10.10&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;left:10.10px;&#39;</span></span></code></pre></div><h2 id="右" tabindex="-1">右 <a class="header-anchor" href="#右" aria-label="Permalink to &quot;右&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;r-10&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;right:10px;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;r-10%&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;right:10%;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;r--10%&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;right:-10%;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;r--10vh&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;right:-10vh;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;r-10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;right:10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;r-.10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;right:.10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;r-10.10vw&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;right:10.10vw;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;r-10.10&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;right:10.10px;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;r-10&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;right:10px;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;r-10%&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;right:10%;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;r--10%&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;right:-10%;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;r--10vh&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;right:-10vh;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;r-10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;right:10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;r-.10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;right:.10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;r-10.10vw&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;right:10.10vw;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;r-10.10&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;right:10.10px;&#39;</span></span></code></pre></div><h2 id="inset" tabindex="-1">inset <a class="header-anchor" href="#inset" aria-label="Permalink to &quot;inset&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;inset--10%&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top: -10%;right: -10%;bottom: -10%;left: -10%;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;inset--10&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top: -10px;right: -10px;bottom: -10px;left: -10px;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;inset-0&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top: 0px;right: 0px;bottom: 0px;left: 0px;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;inset-0.5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top: 0.5px;right: 0.5px;bottom: 0.5px;left: 0.5px;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;inset-.5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top: .5px;right: .5px;bottom: .5px;left: .5px;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;inset--10%&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top: -10%;right: -10%;bottom: -10%;left: -10%;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;inset--10&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top: -10px;right: -10px;bottom: -10px;left: -10px;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;inset-0&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top: 0px;right: 0px;bottom: 0px;left: 0px;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;inset-0.5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top: 0.5px;right: 0.5px;bottom: 0.5px;left: 0.5px;&#39;</span></span>
<span class="line"><span style="color:#24292E;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;inset-.5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top: .5px;right: .5px;bottom: .5px;left: .5px;&#39;</span></span></code></pre></div>`,11),t=[o];function e(c,r,y,E,F,i){return a(),n("div",null,t)}const v=s(p,[["render",e]]);export{h as __pageData,v as default};