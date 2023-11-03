import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.47804b91.js";const u=JSON.parse('{"title":"命名规则","description":"","frontmatter":{},"headers":[],"relativePath":"guide/preset/index.md","filePath":"guide/preset/index.md"}'),p={name:"guide/preset/index.md"},l=n(`<h1 id="命名规则" tabindex="-1">命名规则 <a class="header-anchor" href="#命名规则" aria-label="Permalink to &quot;命名规则&quot;">​</a></h1><h2 id="预设样式的命名-【首字母缩写】" tabindex="-1">预设样式的命名，【首字母缩写】 <a class="header-anchor" href="#预设样式的命名-【首字母缩写】" aria-label="Permalink to &quot;预设样式的命名，【首字母缩写】&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">t -&gt; top</span></span>
<span class="line"><span style="color:#e1e4e8;">b -&gt; bottom</span></span>
<span class="line"><span style="color:#e1e4e8;">l -&gt; left</span></span>
<span class="line"><span style="color:#e1e4e8;">r -&gt; right</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">t -&gt; top</span></span>
<span class="line"><span style="color:#24292e;">b -&gt; bottom</span></span>
<span class="line"><span style="color:#24292e;">l -&gt; left</span></span>
<span class="line"><span style="color:#24292e;">r -&gt; right</span></span></code></pre></div><h2 id="冲突的解决方案" tabindex="-1">冲突的解决方案 <a class="header-anchor" href="#冲突的解决方案" aria-label="Permalink to &quot;冲突的解决方案&quot;">​</a></h2><p>尽可能的遵循【属性值】</p><p>display、</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">flex -&gt; display: flex</span></span>
<span class="line"><span style="color:#e1e4e8;">block -&gt; display: block</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">flex -&gt; display: flex</span></span>
<span class="line"><span style="color:#24292e;">block -&gt; display: block</span></span></code></pre></div><p>opacity、order、overflow都是o开头，使用【属性名】区分</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">opacity-1	opacity: 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">opacity-0.5	opacity: 0.5;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">order-1  order: 1;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">opacity-1	opacity: 1;</span></span>
<span class="line"><span style="color:#24292e;">opacity-0.5	opacity: 0.5;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">order-1  order: 1;</span></span></code></pre></div>`,9),t=[l];function o(c,i,r,d,h,y){return a(),e("div",null,t)}const _=s(p,[["render",o]]);export{u as __pageData,_ as default};