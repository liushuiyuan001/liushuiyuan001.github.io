

# 浏览器原理篇

<br>

#### 1. 浏览器缓存

![http304](/image/http304.png)

1. 是否禁止缓存

**禁止缓存**指的市缓存中不得存储任何关于客户端请求和服务端响应的内容。每次由客户端发起的请求都会下载完整的响应内容。

~~在请求头中，Cache-Control：no-store与Pragma：no-cache都可以禁止缓存，但两者也有区别，Pragma：no-cache可以兼容httt1.0，而Cache-Control：no-store是http1.1提供的。因此，Pragma: no-cache 可以应用到http1.0和http1.1，而Cache-Control：no-store只能应用于http1.1~~

在请求头中，Cache-Control：no-store 表示禁用缓存。Pragma：no-cache 表示无论在HTTP1.0还是HTTP1.1中，都表示每次发送请求时，都需要向资源服务器确认本地副本的有效性。

2. 是否检查本地副本是否过期

是否检查本地版本是否过期主要由Cache-Control的no-cache和must-revalidate这两个可选值控制，其中：

> - no-cache：告诉浏览器、缓存服务器，不管本地副本是否过期，使用资源副本前，一定要到源服务器进行副本有效性校验
> - Must-revalidate: 告诉浏览器’、缓存服务器，本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验。

3. 本地副本是否过期

   想要知道本地副本是否过期，我们就需要了解缓存的过期机制：

   1. 过期中机制中，最重要的指令是max-age，它表示资源能够被缓存的最大时间；它通常会和must-revalidate一起使用，使用起来就像下面这样：

      `Cache-Control:max-age=60,must-revalidate`

   2. 如果不含有max-age属性，则会去查看是否包含Expires属性，通过比较Expires的值和返回头里的Date属性的值来判断是否缓存还有效。
   3. ~~如果max-age和expires属性都没有，找找头里的Last-Modified信息。如果有，缓存的寿命就等于头里面Data的值减去Last-Modified的值除以10(注：根据rfc2626其实也就是乘以10%)~~

4. 如果本地副本没有过期

如果本地副本没有过期，则会直接从缓存中读取资源，并返回200状态。网络中会显示 from memory cache  

5. 如果本地副本过期

   如果本地副本过期，则会进行到源服务器进行有效性校验的前期准备。

   首先，会在请求头里寻找If-None-Match（"e3333333sas-sas-sasa"）字段，其值为服务器上次返回的Etag响应头的值

   如果请求头里没有If-None-Match字段，则会在请求头中寻找If-Modified-Since字段，其值为服务器上次返回的Last-Modified响应头中的日期值：

   如果If-None-Match与If-Modified-Since都没有，则会直接向服务器请求数据。

6. 到源服务器进行有效性校验

   如果请求投中带有If-None-Match 或 If-Modified-Sinece，则会到源服务器进行有效性校验，如果源服务器没有变化，则会返回304；如果有变化，则返回200

7. 私有缓存和公共缓存

   在Cache-Control还有两值：private与public，其中：

   public指令表示改响应可以被任何中间人(比如中间代理、CDN等)缓存。若指定了public，则一些通常不被中间人缓存的页面(因为默认是private)(比如带有HTTP验证消息)的页面或某些特定影响状态码的页面，将会被缓存。

   而private则表示该响应是专用与某个用户的，中间人不能缓存此响应，该响应只能应用于浏览器私有缓存中

8. 刷新操作方式，对缓存的影响

   1. 正常操作

      地址栏输入url，跳转连接，前进后退等。强制缓存有效，协商缓存有效

   2. 手动刷新

      F5，点击刷新按钮，右键菜单刷新。强制缓存失效，协商缓存有效

   3. 强制刷新

      ctr+F5 强制缓存失效，协商缓存失效

