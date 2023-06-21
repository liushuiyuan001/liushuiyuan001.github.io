import{_ as s,o as n,c as a,O as l}from"./chunks/framework.1156b012.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/wy1.md","filePath":"interview/wy1.md"}'),p={name:"interview/wy1.md"},o=l(`<ol><li><p> EvenLoop理解</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">111</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#C792EA;">let</span><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
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
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></li><li><p>Dom事件冒泡和捕获</p></li><li><p>事件代理</p></li><li><p>节流</p></li><li><p>数组去重</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},{</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//1. 指定key</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let hash = {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let result = arr.reduce((pre,curr) =&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     if(!hash[curr.id]) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         hash[curr.id] = true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         pre.push(curr)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     return pre</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// },[])</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.loh(result)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. 不指定key</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let wkMap = new Map()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let result  = arr.reduce((pre,curr) =&gt; {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         if(!wkMap.has(curr)){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//                pre.push(curr)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//                wkMap.set(curr)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         }</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         return pre</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// },[])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(result)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3. </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let hash = {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let result = []</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// for(let i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   const item = arr[i]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   const key = JSON.stringify(item)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   // 顺序不同不行</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   if(!hash[key]) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//      result.push(item)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//      hash[key] = true </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(result)</span></span></code></pre></div></li><li><p>this指向</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyNew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// this</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyNew</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></li><li><p>PureComponent</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Class PureComponent  原理 shouldComponetUpdate（preState,preProps）{ return false }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function memo  -&gt;  preProps ,preProps</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 父传子参数</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Foo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">setCount</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Bar</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 函数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     useCallback  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     props.xxx() =&gt; [{li:xxx},{li:xxx},{li:xxx}]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// dom的变化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     useMemo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     props.xxx  =&gt;  [{li:xxx},{li:xxx},{li:xxxx}]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p>函数组件和类组件区别</p></li></ol>`,1),e=[o];function t(c,r,y,i,F,D){return n(),a("div",null,e)}const f=s(p,[["render",t]]);export{A as __pageData,f as default};
