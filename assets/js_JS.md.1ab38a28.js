import{_ as t,o,c as e,O as r}from"./chunks/framework.1156b012.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"js/JS.md","filePath":"js/JS.md"}'),l={name:"js/JS.md"},s=r('<ol><li>ES Module和CommonJS</li></ol><table><thead><tr><th>类型</th><th>ES Module</th><th>CommonJS</th></tr></thead><tbody><tr><td>加载方式</td><td>编译时</td><td>运行时</td></tr><tr><td>引入性质</td><td>引用 / 只读</td><td>浅拷贝 / 可读写</td></tr><tr><td>模块作用域</td><td>this</td><td>this / filename / __dirname...</td></tr></tbody></table><ol start="2"><li><p>JS继承</p><p>原型链继承，原型式继承，借用构造函数继承，组合继承，寄生继承，寄生组合继承</p></li></ol><p>（3）减少垃圾回收</p><p>虽然浏览器可以进行垃圾自动回收，但是当代码比较复杂时，垃圾回收所带来的代价比较大，所以应该尽量减少垃圾回收。</p><ul><li><strong>对数组进行优化：</strong> 在清空一个数组时，最简单的方法就是给其赋值为[ ]，但是与此同时会创建一个新的空对象，可以将数组的长度设置为0，以此来达到清空数组的目的。</li><li><strong>对</strong><code>object</code><strong>进行优化：</strong> 对象尽量复用，对于不再使用的对象，就将其设置为null，尽快被回收。</li><li><strong>对函数进行优化：</strong> 在循环中的函数表达式，如果可以复用，尽量放在函数的外面。</li></ul><h3 id="_2-哪些情况会导致内存泄漏" tabindex="-1">2. 哪些情况会导致内存泄漏 <a class="header-anchor" href="#_2-哪些情况会导致内存泄漏" aria-label="Permalink to &quot;2. 哪些情况会导致内存泄漏&quot;">​</a></h3><p>以下四种情况会造成内存的泄漏：</p><ul><li><strong>意外的全局变量：</strong> 由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。</li><li><strong>被遗忘的计时器或回调函数：</strong> 设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。</li><li><strong>脱离 DOM 的引用：</strong> 获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。</li><li><strong>闭包：</strong> 不合理的使用闭包，从而导致某些变量一直被留在内存当中。</li></ul>',9),d=[s];function n(a,i,_,c,h,p){return o(),e("div",null,d)}const u=t(l,[["render",n]]);export{m as __pageData,u as default};
