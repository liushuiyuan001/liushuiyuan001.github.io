import{o as n,c as a,b as s}from"./app.3fe4aed4.js";const t='{"title":"","description":"","frontmatter":{},"relativePath":"interview/bbj.md","lastUpdated":1649066048545}',e={},o=[s('<br><ol><li>vue和react的区别以及diff算法的差异</li></ol><div class="language-"><pre><code>vue中的diff是采用双端比较法，用新旧节点的开始和结束下标进行对比\nreact中的diff是采用顺序比较，用新旧节点的开始下标进行对比\n</code></pre></div><ol start="3"><li><p>小程序的授权过程</p></li><li><p>怎样在对forEach中断</p></li></ol><div class="language-javascript"><pre><code><span class="token keyword">return</span> 效果只能相当于 <span class="token keyword">continue</span>\n可以用 <span class="token keyword">throw</span> 中断，外部 <span class="token keyword">try</span> catch 捕获\n最好用<span class="token keyword">for</span>循环即可\n</code></pre></div><ol start="5"><li>img图片403错误怎么解决</li></ol><div class="language-html"><pre><code><span class="token comment">&lt;!-- 隐藏发送请求时请求头表示来源的referrer字段。 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>referrer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-referrer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><ol start="4"><li>数组中查过一半的数字，要求On时间复杂度 O1 空间复杂度</li></ol><p><a href="https://www.cnblogs.com/hirampeng/p/9613336.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/hirampeng/p/9613336.html</a></p><div class="language-"><pre><code>1.排序  nlogn 然后找出中间位置的数字\n2.定义map 遍历数组然后统计次数key为数子 value为次数  空间复杂度 n 时间复杂 n\n3.定义快慢指针\n如果相邻元素不同则同时删除 如果不同则保留，最后剩下的一个或两个则是超过一般的数字\n但是比如 [5，5，5，5，1] 则无法实现\n4.利用线性特点，num为遍历到数组 count 则为出现的次数\n\t1.如果下一个数字和我们之前保存的数字相同，则次数加1；\n\t2.如果下一个数字和我们之前保存的数字不同，则次数减1，如果减1之后为0则我们需要保存下一个数字，并把次数重新设为1。\n\t最后返回的num即为超过一半的数字\n</code></pre></div>',10)];e.render=function(s,t,e,p,l,r){return n(),a("div",null,o)};export{t as __pageData,e as default};
