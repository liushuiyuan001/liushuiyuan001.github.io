import{o as n,c as a,b as s}from"./app.6ce202a8.js";const t='{"title":"页面间传值","description":"","frontmatter":{},"headers":[{"level":3,"title":"页面间传值","slug":"页面间传值"}],"relativePath":"vue/PAGE.md","lastUpdated":1632190727187}',e={},p=[s('<h3 id="页面间传值" tabindex="-1">页面间传值 <a class="header-anchor" href="#页面间传值" aria-hidden="true">#</a></h3><ol><li>路由传参</li></ol><div class="language-javascript"><pre><code>利用vue<span class="token operator">-</span>router、react<span class="token operator">-</span>router传值\nvue<span class="token operator">-</span>router\n</code></pre></div><div class="language-javascript"><pre><code> <span class="token comment">// 列表页</span>\n <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>path<span class="token operator">:</span><span class="token string">&#39;/a&#39;</span><span class="token punctuation">,</span>query<span class="token operator">:</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n <span class="token comment">// 详情页 注意这里是route。。。</span>\n <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>name\n</code></pre></div><ol start="2"><li><p>vuex/mobx</p><h6 id="详解见vuejs官网" tabindex="-1"><a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer">详解见vuejs官网</a> <a class="header-anchor" href="#详解见vuejs官网" aria-hidden="true">#</a></h6></li><li><p>localStorage</p></li></ol><div class="language-javascript"><pre><code> <span class="token comment">// set</span>\n localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;小明&#39;</span><span class="token punctuation">)</span>\n <span class="token comment">// get </span>\n localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;小明&#39;</span>\n <span class="token comment">// clear 清空所有</span>\n localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div>',6)];e.render=function(s,t,e,o,c,l){return n(),a("div",null,p)};export{t as __pageData,e as default};
