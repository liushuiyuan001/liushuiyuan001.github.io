import{o as l,c as n,a,d as e}from"./app.4fb3717d.js";const t='{"title":"浏览器原理篇","description":"","frontmatter":{},"headers":[{"level":3,"title":"浏览器原理篇","slug":"浏览器原理篇"}],"relativePath":"js/Http304.md","lastUpdated":1638445621240}',u={},i=[a("h3",{id:"浏览器原理篇",tabindex:"-1"},[e("浏览器原理篇 "),a("a",{class:"header-anchor",href:"#浏览器原理篇","aria-hidden":"true"},"#")],-1),a("br",null,null,-1),a("h4",{id:"_1-浏览器缓存",tabindex:"-1"},[e("1. 浏览器缓存 "),a("a",{class:"header-anchor",href:"#_1-浏览器缓存","aria-hidden":"true"},"#")],-1),a("p",null,[a("img",{src:"/assets/http304.dd7970f0.png",alt:"http304"})],-1),a("ol",null,[a("li",null,"是否禁止缓存")],-1),a("p",null,[a("strong",null,"禁止缓存"),e("指的市缓存中不得存储任何关于客户端请求和服务端响应的内容。每次由客户端发起的请求都会下载完整的响应内容。")],-1),a("p",null,[a("s",null,"在请求头中，Cache-Control：no-store与Pragma：no-cache都可以禁止缓存，但两者也有区别，Pragma：no-cache可以兼容httt1.0，而Cache-Control：no-store是http1.1提供的。因此，Pragma: no-cache 可以应用到http1.0和http1.1，而Cache-Control：no-store只能应用于http1.1")],-1),a("p",null,"在请求头中，Cache-Control：no-store 表示禁用缓存。Pragma：no-cache 表示无论在HTTP1.0还是HTTP1.1中，都表示每次发送请求时，都需要向资源服务器确认本地副本的有效性。",-1),a("ol",{start:"2"},[a("li",null,"是否检查本地副本是否过期")],-1),a("p",null,"是否检查本地版本是否过期主要由Cache-Control的no-cache和must-revalidate这两个可选值控制，其中：",-1),a("blockquote",null,[a("ul",null,[a("li",null,"no-cache：告诉浏览器、缓存服务器，不管本地副本是否过期，使用资源副本前，一定要到源服务器进行副本有效性校验"),a("li",null,"Must-revalidate: 告诉浏览器’、缓存服务器，本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验。")])],-1),a("ol",{start:"3"},[a("li",null,[a("p",null,"本地副本是否过期"),a("p",null,"想要知道本地副本是否过期，我们就需要了解缓存的过期机制："),a("ol",null,[a("li",null,[a("p",null,"过期中机制中，最重要的指令是max-age，它表示资源能够被缓存的最大时间；它通常会和must-revalidate一起使用，使用起来就像下面这样："),a("p",null,[a("code",null,"Cache-Control:max-age=60,must-revalidate")])]),a("li",null,[a("p",null,"如果不含有max-age属性，则会去查看是否包含Expires属性，通过比较Expires的值和返回头里的Date属性的值来判断是否缓存还有效。")]),a("li",null,[a("p",null,[a("s",null,"如果max-age和expires属性都没有，找找头里的Last-Modified信息。如果有，缓存的寿命就等于头里面Data的值减去Last-Modified的值除以10(注：根据rfc2626其实也就是乘以10%)")])])])]),a("li",null,[a("p",null,"如果本地副本没有过期")])],-1),a("p",null,"如果本地副本没有过期，则会直接从缓存中读取资源，并返回200状态。网络中会显示 from memory cache",-1),a("ol",{start:"5"},[a("li",null,[a("p",null,"如果本地副本过期"),a("p",null,"如果本地副本过期，则会进行到源服务器进行有效性校验的前期准备。"),a("p",null,'首先，会在请求头里寻找If-None-Match（"e3333333sas-sas-sasa"）字段，其值为服务器上次返回的Etag响应头的值'),a("p",null,"如果请求头里没有If-None-Match字段，则会在请求头中寻找If-Modified-Since字段，其值为服务器上次返回的Last-Modified响应头中的日期值："),a("p",null,"如果If-None-Match与If-Modified-Since都没有，则会直接向服务器请求数据。")]),a("li",null,[a("p",null,"到源服务器进行有效性校验"),a("p",null,"如果请求投中带有If-None-Match 或 If-Modified-Sinece，则会到源服务器进行有效性校验，如果源服务器没有变化，则会返回304；如果有变化，则返回200")]),a("li",null,[a("p",null,"私有缓存和公共缓存"),a("p",null,"在Cache-Control还有两值：private与public，其中："),a("p",null,"public指令表示改响应可以被任何中间人(比如中间代理、CDN等)缓存。若指定了public，则一些通常不被中间人缓存的页面(因为默认是private)(比如带有HTTP验证消息)的页面或某些特定影响状态码的页面，将会被缓存。"),a("p",null,"而private则表示该响应是专用与某个用户的，中间人不能缓存此响应，该响应只能应用于浏览器私有缓存中")]),a("li",null,[a("p",null,"刷新操作方式，对缓存的影响"),a("ol",null,[a("li",null,[a("p",null,"正常操作"),a("p",null,"地址栏输入url，跳转连接，前进后退等。强制缓存有效，协商缓存有效")]),a("li",null,[a("p",null,"手动刷新"),a("p",null,"F5，点击刷新按钮，右键菜单刷新。强制缓存失效，协商缓存有效")]),a("li",null,[a("p",null,"强制刷新"),a("p",null,"ctr+F5 强制缓存失效，协商缓存失效")])])])],-1)];u.render=function(a,e,t,u,o,r){return l(),n("div",null,i)};export{t as __pageData,u as default};
