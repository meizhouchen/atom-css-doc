import{_ as s,o as a,c as p,Q as n}from"./chunks/framework.47804b91.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config/i.md","filePath":"guide/config/i.md"}'),e={name:"guide/config/i.md"},l=n(`<h2 id="层叠权重覆盖" tabindex="-1">层叠权重覆盖 <a class="header-anchor" href="#层叠权重覆盖" aria-label="Permalink to &quot;层叠权重覆盖&quot;">​</a></h2><blockquote><p>使用!important是危险的，因为没有办法对其进行覆盖,不建议使用</p></blockquote><h3 id="权重后缀-i-数字" tabindex="-1">权重后缀：-i + 数字 <a class="header-anchor" href="#权重后缀-i-数字" aria-label="Permalink to &quot;权重后缀：-i + 数字&quot;">​</a></h3><p>例如：p-10-i3 后缀：-i3，表示需要增加p-10的权重 权重增加3</p><p>生成 示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// p-10 =&gt;  padding：10rpx</span></span>
<span class="line"><span style="color:#e1e4e8;">class=&quot;p-10-i3&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 生成 </span></span>
<span class="line"><span style="color:#e1e4e8;">.p-10-i3.p-10-i3.p-10-i3{</span></span>
<span class="line"><span style="color:#e1e4e8;">  padding：10rpx</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// p-10 =&gt;  padding：10rpx</span></span>
<span class="line"><span style="color:#24292e;">class=&quot;p-10-i3&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 生成 </span></span>
<span class="line"><span style="color:#24292e;">.p-10-i3.p-10-i3.p-10-i3{</span></span>
<span class="line"><span style="color:#24292e;">  padding：10rpx</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><blockquote><p>uniapp .vue文件style标签内的样式 默认增加了css作用域，需要三层css才能覆盖 因此最小默认从3开始</p></blockquote><p>.p-10-i.p-10-i的权重 &gt; p-10 即可覆盖</p><h3 id="要覆盖-p-10-i-怎么办" tabindex="-1">要覆盖 p-10-i 怎么办？ <a class="header-anchor" href="#要覆盖-p-10-i-怎么办" aria-label="Permalink to &quot;要覆盖 p-10-i 怎么办？&quot;">​</a></h3><p>增加i后面的数字 p-10-i === p-10-i3 ,权重 p-10-i4 &gt; p-10-i3</p><p>使用p-10-i4，p-10-i5， p-10-i6 ...,权重高的来覆盖，数字越大，权重越高</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class=&quot;p-10-i5&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 生成</span></span>
<span class="line"><span style="color:#e1e4e8;">.p-10-i5.p-10-i5.p-10-i5.p-10-i5.p-10-i5{</span></span>
<span class="line"><span style="color:#e1e4e8;">  padding：10rpx</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class=&quot;p-10-i5&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 生成</span></span>
<span class="line"><span style="color:#24292e;">.p-10-i5.p-10-i5.p-10-i5.p-10-i5.p-10-i5{</span></span>
<span class="line"><span style="color:#24292e;">  padding：10rpx</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,12),i=[l];function o(c,t,r,d,u,h){return a(),p("div",null,i)}const _=s(e,[["render",o]]);export{y as __pageData,_ as default};
