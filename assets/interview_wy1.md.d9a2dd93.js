import{_ as s,c as n,o as a,a as p}from"./app.a302813e.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/wy1.md"}'),l={name:"interview/wy1.md"},o=p(`<ol><li><p> EvenLoop\u7406\u89E3</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">111</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#C792EA;">let</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">333</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">               </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">444</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">222</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></li><li><p>Dom\u4E8B\u4EF6\u5192\u6CE1\u548C\u6355\u83B7</p></li><li><p>\u4E8B\u4EF6\u4EE3\u7406</p></li><li><p>\u8282\u6D41</p></li><li><p>\u6570\u7EC4\u53BB\u91CD</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#676E95;">//1. \u6307\u5B9Akey</span></span>
<span class="line"><span style="color:#676E95;">// let hash = {}</span></span>
<span class="line"><span style="color:#676E95;">// let result = arr.reduce((pre,curr) =&gt; {</span></span>
<span class="line"><span style="color:#676E95;">//     if(!hash[curr.id]) {</span></span>
<span class="line"><span style="color:#676E95;">//         hash[curr.id] = true</span></span>
<span class="line"><span style="color:#676E95;">//         pre.push(curr)</span></span>
<span class="line"><span style="color:#676E95;">//     }</span></span>
<span class="line"><span style="color:#676E95;">//     return pre</span></span>
<span class="line"><span style="color:#676E95;">// },[])</span></span>
<span class="line"><span style="color:#676E95;">// console.loh(result)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 2. \u4E0D\u6307\u5B9Akey</span></span>
<span class="line"><span style="color:#676E95;">// let wkMap = new Map()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// let result  = arr.reduce((pre,curr) =&gt; {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//         if(!wkMap.has(curr)){</span></span>
<span class="line"><span style="color:#676E95;">//                pre.push(curr)</span></span>
<span class="line"><span style="color:#676E95;">//                wkMap.set(curr)</span></span>
<span class="line"><span style="color:#676E95;">//         }</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#676E95;">//         return pre</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// },[])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// console.log(result)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 3. </span></span>
<span class="line"><span style="color:#676E95;">// let hash = {}</span></span>
<span class="line"><span style="color:#676E95;">// let result = []</span></span>
<span class="line"><span style="color:#676E95;">// for(let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#676E95;">//   const item = arr[i]</span></span>
<span class="line"><span style="color:#676E95;">//   const key = JSON.stringify(item)</span></span>
<span class="line"><span style="color:#676E95;">//   // \u987A\u5E8F\u4E0D\u540C\u4E0D\u884C</span></span>
<span class="line"><span style="color:#676E95;">//   if(!hash[key]) {</span></span>
<span class="line"><span style="color:#676E95;">//      result.push(item)</span></span>
<span class="line"><span style="color:#676E95;">//      hash[key] = true </span></span>
<span class="line"><span style="color:#676E95;">//   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"><span style="color:#676E95;">// console.log(result)</span></span>
<span class="line"></span></code></pre></div></li><li><p>this\u6307\u5411</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyNew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// this</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyNew</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></li><li><p>PureComponent</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// Class PureComponent  \u539F\u7406 shouldComponetUpdate\uFF08preState,preProps\uFF09{ return false }</span></span>
<span class="line"><span style="color:#676E95;">// function memo  -&gt;  preProps ,preProps</span></span>
<span class="line"><span style="color:#676E95;">// function(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u7236\u4F20\u5B50\u53C2\u6570</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Foo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">setCount</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Bar</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u51FD\u6570</span></span>
<span class="line"><span style="color:#676E95;">//     useCallback  </span></span>
<span class="line"><span style="color:#676E95;">//     props.xxx() =&gt; [{li:xxx},{li:xxx},{li:xxx}]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// dom\u7684\u53D8\u5316</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//     useMemo</span></span>
<span class="line"><span style="color:#676E95;">//     props.xxx  =&gt;  [{li:xxx},{li:xxx},{li:xxxx}]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u51FD\u6570\u7EC4\u4EF6\u548C\u7C7B\u7EC4\u4EF6\u533A\u522B</p></li></ol>`,1),e=[o];function c(t,r,y,F,D,i){return a(),n("div",null,e)}const E=s(l,[["render",c]]);export{C as __pageData,E as default};
