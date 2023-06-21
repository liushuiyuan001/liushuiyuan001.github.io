import{_ as s,o as a,c as e,O as p}from"./chunks/framework.1156b012.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/zcy.md","filePath":"interview/zcy.md"}'),l={name:"interview/zcy.md"},n=p(`<ol><li><p>请自我介绍并重点介绍项目重点以及取得的成绩</p></li><li><p>CSS请实现左右两列定宽中间自适应</p><p>Flex 实现：具体又问了Flex：1 是两个属性的缩写。又问了 如果左右两列200px，总宽度小于400px大的话 中间这个会怎么样，缩小</p><p>Flex： 1 =&gt; 1,1,0%</p><p>Float实现：</p><p>绝对相对定位实现：</p></li><li><p>问了 bool true 和 字符串 &#39;1&#39; 的双等过程</p><p>问了双等和三等的区别</p><h5 id="又问了怎么比较两个对象是否相等-所有的key相等并且key对应的值相等" tabindex="-1">又问了怎么比较两个对象是否相等：所有的key相等并且key对应的值相等 <a class="header-anchor" href="#又问了怎么比较两个对象是否相等-所有的key相等并且key对应的值相等" aria-label="Permalink to &quot;又问了怎么比较两个对象是否相等：所有的key相等并且key对应的值相等&quot;">​</a></h5></li><li><p>问了vue的data为什么是个function而不是对象</p></li><li><p>问了get和post区别</p><p>进一步问了 post的安全性更高在哪？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1. 表现形式来说：get拼接到？后面 post放在body里面</span></span>
<span class="line"><span style="color:#A6ACCD;">2. get的话 浏览器有长度限制</span></span>
<span class="line"><span style="color:#A6ACCD;">3. 字面意思 get查询 post更新 put增加  delete删除  options 查询可以响应哪种请求</span></span>
<span class="line"><span style="color:#A6ACCD;">4. get会被浏览器缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">5. get幂等  post不是幂等</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">安全性也就稍微高一点：get会被浏览器缓存 get会将参数拼接到url后面</span></span></code></pre></div><p>又问了get请求会出现哪些问题？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">经稍微提示：参数为数组的情况</span></span>
<span class="line"><span style="color:#A6ACCD;">优先和后端商定改为post或者特殊处理</span></span></code></pre></div><p>如果后端让都用post你感觉可以吗？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">我感觉可以（ps：之前做app的时候都用的post 但是没说）：但是会调研下不用get会不会有什么问题</span></span></code></pre></div></li><li><p>问了cookie和session的区别以及什么时候用cookie什么时候用session</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1. tooken存在cookie</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 项目信息是存在session</span></span>
<span class="line"><span style="color:#A6ACCD;">session就是页面关了 cookie关了还有</span></span></code></pre></div></li><li><p>问了react或者说vue的key作用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">以react为例</span></span>
<span class="line"><span style="color:#A6ACCD;">1. 层级做比较</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 类型做比较</span></span>
<span class="line"><span style="color:#A6ACCD;">3. key做比较</span></span>
<span class="line"><span style="color:#A6ACCD;">如果不同则用新的节点替换旧的节点</span></span></code></pre></div><p>又进一步举例问如果三个兄弟节点中的key作用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">以vue为例具体同层级diff时候是用的最长递归子序列，其中还是用key比较了</span></span></code></pre></div></li><li><p>react怎么做性能优化</p><p>类组件用pureCompoent</p></li></ol><p>其他时间都围绕项目问，配置化的话会问如果有特殊场景怎么办，装饰器具体怎么实现怎么用</p><p>配置化特殊场景：</p><p>配置化是自动增加的还是前端给后端？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">是后端给前端的，算是商定开发</span></span></code></pre></div><p>如果新增加一个组件的话 流程是怎么办？</p><p>如果有个场景手机号和电话号必填一个怎么办?</p><p>装饰器具体怎么用</p><p>对前端哪些技术感兴趣</p><p>政采云面试是所有的面试中感觉最好的。</p><p>考察全面但是不会故意为难人 会给提示。项目也会围绕你简历上写的问</p><ol><li>普通话标准</li><li>如果没听懂问题会给进一步解释</li><li>如果完全不会会跳过</li><li>如果答不出来会给提示</li><li>考察的非常全面，逻辑思维很清楚</li></ol>`,12),t=[n];function o(i,c,r,d,C,y){return a(),e("div",null,t)}const u=s(l,[["render",o]]);export{A as __pageData,u as default};
