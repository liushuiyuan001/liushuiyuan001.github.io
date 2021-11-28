import{o as n,c as s,b as a}from"./app.3647fd36.js";const t='{"title":"一、JavaScript基础","description":"","frontmatter":{},"headers":[{"level":3,"title":"一、JavaScript基础","slug":"一、javascript基础"}],"relativePath":"js/Code.md","lastUpdated":1638064802305}',p={},o=[a('<h3 id="一、javascript基础" tabindex="-1">一、JavaScript基础 <a class="header-anchor" href="#一、javascript基础" aria-hidden="true">#</a></h3><br><h4 id="_1-手写-object-create" tabindex="-1">1.手写 Object.create <a class="header-anchor" href="#_1-手写-object-create" aria-hidden="true">#</a></h4><p>思路：将传入的对象作为原型</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> obj\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h4 id="_2-手写instanceof方法" tabindex="-1">2. 手写instanceof方法 <a class="header-anchor" href="#_2-手写instanceof方法" aria-hidden="true">#</a></h4><p>instanceof 运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置</p><p>实现步骤：</p><ol><li>首先获取类型的原型</li><li>然后获取对象的原型</li><li>然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为null，因为原型链最终为null</li></ol><p>具体实现：</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span>right</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">let</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>\n\t<span class="token keyword">const</span> prototype <span class="token operator">=</span> right<span class="token punctuation">.</span>prototype\n  <span class="token comment">// 判断构造函数的 prototype 对象是否在对象的原型链上</span>\n  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>proto<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>proto <span class="token operator">===</span> prototype<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>\n    proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h4 id="_3-手写new操作符" tabindex="-1">3. 手写new操作符 <a class="header-anchor" href="#_3-手写new操作符" aria-hidden="true">#</a></h4><p>在调用new的过程中会发生以下四件事情</p><ol><li><p>首先创建一个新的空对象</p></li><li><p>设置原型 将对象的原型设置为函数的prototype对象</p></li><li><p>让函数的this指向这个对象 指向构造函数的代码 为这个新对象添加属性</p></li><li><p>判断函数的返回值类型 如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">objectFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">let</span> newObject <span class="token operator">=</span> <span class="token keyword">null</span>\n  <span class="token keyword">let</span> constructor <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">null</span>\n  <span class="token comment">// 判断参数是否是一个函数</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> constructor <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;tYpe error&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 新建一个空对象 对象的原型为构造函数的 prototype 对象</span>\n  newObject <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>\n  <span class="token comment">// 将 this 指向新建对象 并执行函数</span>\n  result <span class="token operator">=</span> <span class="token function">constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>newObject<span class="token punctuation">,</span>arguments<span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>\n  <span class="token comment">// 判断返回对象</span>\n  <span class="token keyword">let</span> flag <span class="token operator">=</span> result <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;funtion&#39;</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> flag <span class="token operator">?</span> result <span class="token operator">:</span> newObject\n<span class="token punctuation">}</span>\n<span class="token comment">// 使用方法</span>\n<span class="token function">objectFactory</span><span class="token punctuation">(</span>Foo<span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>\n</code></pre></div></li></ol>',14)];p.render=function(a,t,p,e,c,l){return n(),s("div",null,o)};export{t as __pageData,p as default};