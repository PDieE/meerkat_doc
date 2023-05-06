import{_ as s,o as a,c as n,O as o}from"./chunks/framework.ed3fd7ea.js";const u=JSON.parse('{"title":"行业发展史 - IndustryHistoryItem","description":"","frontmatter":{},"headers":[],"relativePath":"components/list-item/industry-history-item.md","filePath":"components/list-item/industry-history-item.md","lastUpdated":1683343181000}'),t={name:"components/list-item/industry-history-item.md"},l=o(`<h1 id="行业发展史-industryhistoryitem" tabindex="-1">行业发展史 - IndustryHistoryItem <a class="header-anchor" href="#行业发展史-industryhistoryitem" aria-label="Permalink to &quot;行业发展史 - IndustryHistoryItem&quot;">​</a></h1><p>行业发展史列表元素</p><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><h3 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">industry-history-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:info</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">IndustryHistory</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/api/model/marketModel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> IndustryHistoryItem </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/components/list-item/IndustryHistoryItem.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IndustryHistory</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><h3 id="info" tabindex="-1">info <a class="header-anchor" href="#info" aria-label="Permalink to &quot;info&quot;">​</a></h3><ul><li>类型：<code>IndustryHistory</code><br> 数据</li></ul><h3 id="border" tabindex="-1">border <a class="header-anchor" href="#border" aria-label="Permalink to &quot;border&quot;">​</a></h3><ul><li>类型：<code>boolean</code></li><li>默认值：<code>false</code><br> 是否显示边框，默认不显示</li></ul>`,10),e=[l];function p(r,c,i,y,D,F){return a(),n("div",null,e)}const h=s(t,[["render",p]]);export{u as __pageData,h as default};
