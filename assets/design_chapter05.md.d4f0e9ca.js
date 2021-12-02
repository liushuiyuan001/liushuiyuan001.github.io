import{o as n,c as s,b as a}from"./app.4fb3717d.js";const p='{"title":"抽象工厂模式","description":"","frontmatter":{},"headers":[{"level":3,"title":"抽象工厂模式","slug":"抽象工厂模式"},{"level":3,"title":"设计原则","slug":"设计原则"},{"level":3,"title":"笔记","slug":"笔记"}],"relativePath":"design/chapter05.md","lastUpdated":1636262058666}',t={},o=[a('<h3 id="抽象工厂模式" tabindex="-1">抽象工厂模式 <a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a></h3><div class="language-"><pre><code>定义了一个创建对象的接口，当由子类决定要要实例化的类是哪一个。工厂方法让类把实例化推迟到子类。\n</code></pre></div><h3 id="设计原则" tabindex="-1">设计原则 <a class="header-anchor" href="#设计原则" aria-hidden="true">#</a></h3><div class="language-"><pre><code>依赖抽象，不要依赖具体类。\n</code></pre></div><p>定义一个抽象披萨父类</p><div class="language-java"><pre><code><span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>\n   <span class="token class-name">String</span> name<span class="token punctuation">;</span>\n   <span class="token class-name">String</span> dough<span class="token punctuation">;</span>\n   <span class="token class-name">String</span> sauce<span class="token punctuation">;</span>\n   <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toppings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;prepare &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Tossing dough...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adding sauce...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adding topping: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> topping <span class="token operator">:</span> toppings<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;    &quot;</span> <span class="token operator">+</span> topping<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;bake&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;cut&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> name<span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>定义一个中式披萨继承披萨父类</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheesePizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span><span class="token punctuation">{</span>\n   <span class="token keyword">public</span> <span class="token class-name">CheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      name <span class="token operator">=</span> <span class="token string">&quot;CheesePizza&quot;</span><span class="token punctuation">;</span>\n      dough <span class="token operator">=</span> <span class="token string">&quot;Thin Crust Dough&quot;</span><span class="token punctuation">;</span>\n      sauce <span class="token operator">=</span> <span class="token string">&quot;Marinara Sauce&quot;</span><span class="token punctuation">;</span>\n      toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Grated Reggino Cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token annotation punctuation">@Override</span>\n   <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Cutting the pizza into square slices&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>定义一个抽象比萨门店</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">PizzaStore</span> <span class="token punctuation">{</span>\n   \n   <span class="token class-name">Pizza</span> <span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token class-name">Pizza</span> pizza<span class="token punctuation">;</span>\n      pizza <span class="token operator">=</span> <span class="token function">createPizza</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      \n      pizza<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      pizza<span class="token punctuation">.</span><span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      pizza<span class="token punctuation">.</span><span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      pizza<span class="token punctuation">.</span><span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      \n      <span class="token keyword">return</span> pizza<span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n   \n   <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   \n<span class="token punctuation">}</span>\n</code></pre></div><p>定义一个中式披萨门店.重写创建披萨方法。</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheesePizzaStore</span> <span class="token keyword">extends</span> <span class="token class-name">PizzaStore</span><span class="token punctuation">{</span>\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tpizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">return</span> pizza<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>定义一个测试了类</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token class-name">PizzaStore</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheesePizzaStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      \n      <span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Joel order a &quot;</span> <span class="token operator">+</span> pizza<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="笔记" tabindex="-1">笔记 <a class="header-anchor" href="#笔记" aria-hidden="true">#</a></h3><p>原则是将创建具体类型的方法交给子类，由子类根据披萨类型创建具体的披萨。</p>',16)];t.render=function(a,p,t,c,e,u){return n(),s("div",null,o)};export{p as __pageData,t as default};
