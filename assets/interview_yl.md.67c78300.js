import{_ as e,o as t,c as a,O as l}from"./chunks/framework.1156b012.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/yl.md","filePath":"interview/yl.md"}'),i={name:"interview/yl.md"},r=l('<h3 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;Webpack&quot;">​</a></h3><p>Webpack 静态打包构建工具</p><p>babel-loader style-loader url-file css-loarder sass-loader/less-loader loader:</p><p>HTMLWebpackPugin SplitChunksPlugin DIIPlugin Plugin:</p><h3 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-label="Permalink to &quot;React&quot;">​</a></h3><ol><li><p>常用生命周期</p></li><li><p>PureComponent 优化：浅比较Props和State值是否发生了变化 只有发生了变化才进行更新，如果组件有自己的shouldComponentUpdate则用组件自己的判断，否则才做浅比较</p></li><li><p>key：diff算法优化 一般唯一id</p><p>如果用index做索引 有时候页面显示回有问题</p></li><li><p>为什么要用虚拟Dom？</p><ol><li>页面性能的提升：尽管在我们前面的各种论证对比下，虚拟 DOM 并非<a href="https://www.zhihu.com/search?q=%E6%9C%80%E4%BC%98%E8%A7%A3&amp;search_source=Entity&amp;hybrid_search_source=Entity&amp;hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A405905695%7D" target="_blank" rel="noreferrer">最优解</a>，但在大多数场景下，虚拟 DOM 能给你的页面过得去的性能，并且提供给你更爽的开发模式。</li><li>开发效率的提升：通过对前端发展历史的描述可以看出，每一次对 DOM 操作的革新，背后都是对开发效率的提升。不得不提的是，在 React 或者 Vue 时代，同样的页面，我们的开发效率是提升了不少。就单单一个将输入框的内容输出到页面的 mvvm 模式的开发，引入 Vue 或 React 就可以快速搞定。</li><li>跨平台的问题：虚拟 DOM 是对渲染内容的一层抽象描述，这就使得视图层和渲染层做了解耦。这层对渲染层的描述可以是 web、native、小程序等多端的，在不同端可能只需要一份代码就可以 work 。毕竟连 Vue3 也将 DOM 操作的内容提在一个独立的 runtime-dom.js 模块中，目的就是在多端操作渲染层的内容从而实现跨平台的可能性。</li><li>更利于前后端分离开发和组件拆分，项目拆分</li></ol></li><li><p>类组件和函数组件的区别</p><table><thead><tr><th>区别</th><th>函数组件</th><th>类组件</th></tr></thead><tbody><tr><td>是否有this</td><td>没有</td><td>有</td></tr><tr><td>是否有生命周期</td><td>没有</td><td>有</td></tr><tr><td>是否有状态state</td><td>没有</td><td>有</td></tr></tbody></table></li><li><p>兄弟组件之间通信/全局状态管理</p><p>Redux Mobx</p><p>Redux</p></li><li><p>forceUpdate</p></li></ol><h3 id="js基础" tabindex="-1">JS基础 <a class="header-anchor" href="#js基础" aria-label="Permalink to &quot;JS基础&quot;">​</a></h3><ol><li><p>typeof</p><p>string boolean object function undefined symbol bigint</p><p>typeof Array === object</p></li></ol><p>​ Array.isArary</p><p>​ [] Instanceof Array</p><p>​ Object.prototype.toString.call([])</p><ol start="2"><li><p>Promise API</p><p>Promise all / race 和数组every和some一样意思</p></li><li><p>await</p><p>如果有个数据队列这个时候怎么办</p><p>await 或者 Promise.all</p></li><li><p>闭包以及应用</p><p>利用闭包立即执行表达式(function ( var a = 11 ) {})() 实现变量隔离</p></li><li><p>上下文作用域：This 指向</p></li></ol><h3 id="css基础" tabindex="-1">CSS基础 <a class="header-anchor" href="#css基础" aria-label="Permalink to &quot;CSS基础&quot;">​</a></h3><ol><li><p>flex</p><p>Display: flex</p><p>Justyfiy-content: center</p><p>Algin-items：center</p><p>Flex: 1</p></li><li><p>重置水平居中</p></li></ol>',14),p=[r];function o(s,d,n,c,h,u){return t(),a("div",null,p)}const m=e(i,[["render",o]]);export{b as __pageData,m as default};
