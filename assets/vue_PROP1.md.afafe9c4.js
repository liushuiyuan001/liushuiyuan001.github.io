import{o as e,c as t,d as n}from"./app.acfc0ccb.js";const a='{"title":"vue组件传值上","description":"","frontmatter":{},"headers":[{"level":3,"title":"vue组件传值上","slug":"vue组件传值上"}],"relativePath":"vue/PROP1.md","lastUpdated":1631328791921}',o={},l=[n('<h3 id="vue组件传值上" tabindex="-1">vue组件传值上 <a class="header-anchor" href="#vue组件传值上" aria-hidden="true">#</a></h3><ol><li>父传子（props）</li></ol><div class="language-"><pre><code> Farther.vue\n    &lt;Son :monery=&quot;moneryFarther&quot;&gt;&lt;/Son&gt; \n Son.vue\n   // 推荐\n   props:{\n      monery:{\n         type:Number,\n         default: 0\n      }\n   }\n   // 或者\n   props:{monery}\n\n</code></pre></div><ol start="2"><li>子传父（通过事件回调机制，父监听子事件，子emit父监听的事件）</li></ol><div class="language-"><pre><code> Farther.vue\n    &lt;Son @play=&quot;changePlay&quot;&gt;&lt;/Son&gt; \n    changePlay(reason){\n       console.log(&#39;家庭作业写完了？不写完不准出去玩&#39;)\n    }\n Son.vue\n   &lt;div @click=&quot;wantPlay&quot;&gt;&lt;/div&gt;\n   wantPlay(){\n      this.$emit(&#39;play&#39;,&#39;我想出去玩&#39;)\n   }\n\n</code></pre></div><ol start="3"><li>vuex/mobx <h6 id="详解见vuejs官网" tabindex="-1"><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">详解见vuejs官网</a> <a class="header-anchor" href="#详解见vuejs官网" aria-hidden="true">#</a></h6></li><li>localStorage</li></ol><div class="language-"><pre><code> \t// set\n \tlocalStorage.setItem(&#39;name&#39;,&#39;小明&#39;)\n \t// get \n \tlocalStorage.getItem(&#39;name&#39;) // &#39;小明&#39;\n \t// clear 清空所有\n \tlocalStorage.clear()\n</code></pre></div><ol start="5"><li>事件总线</li></ol><div class="language-"><pre><code> \t1.挂载在全局原型上\n \tVue.prototype.$bus = new Vue();\n \t2.监听事件\n \tthis.$bus.$on(&quot;customEvent&quot;, data =&gt; {\n \t\tconsole.log(data);\n \t});\n \t3.触发事件\n \tthis.$bus.$emit(&quot;customEvent&quot;, &quot;触发了事件总线&quot;);\n</code></pre></div>',9)];o.render=function(n,a,o,r,u,s){return e(),t("div",null,l)};export{a as __pageData,o as default};