import{o as n,c as a,b as s}from"./app.3fe4aed4.js";const t='{"title":"vue组件传值上","description":"","frontmatter":{},"headers":[{"level":3,"title":"vue组件传值上","slug":"vue组件传值上"}],"relativePath":"vue/PROP1.md","lastUpdated":1649066048546}',p={},o=[s('<h3 id="vue组件传值上" tabindex="-1">vue组件传值上 <a class="header-anchor" href="#vue组件传值上" aria-hidden="true">#</a></h3><ol><li>父传子（props）</li></ol><div class="language-vue"><pre><code> Farther.vue\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token attr-name">:monery</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moneryFarther<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son</span><span class="token punctuation">&gt;</span></span> \n Son.vue\n   // 推荐\n   props:{\n      monery:{\n         type:Number,\n         default: 0\n      }\n   }\n   // 或者\n   props:{monery}\n\n</code></pre></div><ol start="2"><li>子传父（通过事件回调机制，父监听子事件，子emit父监听的事件）</li></ol><div class="language-vue"><pre><code> Farther.vue\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token attr-name">@play</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changePlay<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son</span><span class="token punctuation">&gt;</span></span> \n    changePlay(reason){\n       console.log(&#39;家庭作业写完了？不写完不准出去玩&#39;)\n    }\n Son.vue\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wantPlay<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n   wantPlay(){\n      this.$emit(&#39;play&#39;,&#39;我想出去玩&#39;)\n   }\n\n</code></pre></div><ol start="3"><li><p>vuex/mobx</p><h6 id="详解见vuejs官网" tabindex="-1"><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">详解见vuejs官网</a> <a class="header-anchor" href="#详解见vuejs官网" aria-hidden="true">#</a></h6></li><li><p>localStorage</p></li></ol><div class="language-javascript"><pre><code> \t<span class="token comment">// set</span>\n \tlocalStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;小明&#39;</span><span class="token punctuation">)</span>\n \t<span class="token comment">// get </span>\n \tlocalStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;小明&#39;</span>\n \t<span class="token comment">// clear 清空所有</span>\n \tlocalStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><ol start="5"><li>事件总线</li></ol><div class="language-javascript"><pre><code> \t<span class="token number">1.</span>挂载在全局原型上\n \t<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \t<span class="token number">2.</span>监听事件\n \t<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&quot;customEvent&quot;</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n \t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n \t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n \t<span class="token number">3.</span>触发事件\n \t<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&quot;customEvent&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;触发了事件总线&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',9)];p.render=function(s,t,p,e,c,l){return n(),a("div",null,o)};export{t as __pageData,p as default};
