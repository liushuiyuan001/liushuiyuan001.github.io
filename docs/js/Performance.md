### 一、CDN

<br>

#### 1. CDN的概念

CDN(Content Delivery Network, 内容分发网络) 是指一种通过互联网互相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、更可靠地将音乐、图片、视频、应用程序以及其他文件发送给用户，来提供高性能、可扩展性及低成本的网络内容传递给用户。

1. 典型的CDN系统由下面三个部分组成：

- 分发服务系统：最基本的工作单元就是Cache设置，cache(边缘cache) 负责直接响应最终用户的访问请求，把缓存在本地的内容快速地提供给用户。同时cache还负责与源站点进行内容同步，把更新的内容以及本地没有的内容从源站点获取并保存在本地。Cache设备的数据、规模、总服务能力是衡量一个CDN系统服务能力的最基本的指标。
- 负载均衡系统：主要功能是负责对所有发起服务请求的用户进行访问调度，确定提供给用户的最终实际访问地址。两级调度体系分为全部负载均衡和本地负载均衡。全局负载均衡主要根据用户就进性原则，通过对每个服务节点进行“最优”判断，确定向用户提供服务的cache的物理位置。本地负载均衡主要负责节点内部的设备负载均衡
- 运营管理系统：运营管理系统分为运营管理和网络管理子系统，负责处理业务层面的与外界系统交互所必须的收集、整理、交付工作，包含客户管理、产品管理、计费管理、统计分析等功能。

2. CDN的作用

   (1) 在性能方法，引入CDN的作用在于

   - 用户收到的内容来自最近的数据中心，延迟更低，内容加载更快
   - 部分资源请求分配给了CDN，减少了服务器的负载

   (2) 在安全方面，CDN有助于防御DDos、MITM等网络攻击

   - 针对DDoS: 通过监控分析异常流量，限制其请求频率
   - 针对MITM：从源服务器到CDN节点到ISP，全链路HTTPS通信

   除此之外，CDN作为一种基础的云服务，同样具有资源托管、按需扩展(能够应对流量高峰) 等方面的优势。

### 二、懒加载

#### 懒加载与预加载的区别

- 懒加载也叫延迟加载，指的是在长网页中延迟加载图片的时机，当用户需要访问时，再去加载
- 预加载指的是将所需的资源提前请求加载到本地，这样后面在需要用到时就直接从缓存中获取资源

#### 懒加载的代码实现

```html
<div class="container">
		<img src="loading.gif" data-src="pic.png">
  	<img src="loading.gif" data-src="pic.png">
  	<img src="loading.gif" data-src="pic.png">
 		<img src="loading.gif" data-src="pic.png">
  	<img src="loading.gif" data-src="pic.png">
  	<img src="loading.gif" data-src="pic.png">
</div>
<script>
var imgs = document.querySelectorAll('img')
//用来判断bound.top<=clientHeight的函数，返回一个bool值
function isIn(el) {
        var bound = el.getBoundingClientRect();
        var clientHeight = window.innerHeight;
        return bound.top <= clientHeight;
 }
function loadImg(el) {
        if(!el.src){
            var source = el.dataset.src;
            el.src = source;
        }
 }
function check() {
  Array.from(imgs).forEach(function(el){
            if(isIn(el)){
                loadImg(el);
            }
        })
}
window.onload = window.onscroll = function () { //onscroll()在滚动条滚动的时候触发
			check()
}
</script>
```

### 三、回流与重绘

1. 回流与重绘的概念及触发条件

   (1) 回流

   当渲染树种部分或者全部元素的尺寸、构造或者属性发生变化时，浏览器会重新渲染部分或者全部

文档的过程就称为回流。下面这些操作会导致回流：

- 页面的首次渲染
- 浏览器的窗口大小发生变化
- 元素的内容发生辩护
- 元素的尺寸或者位置发生辩护
- 元素的字体大小发生辩护
- 激活css伪类
- 查询某些属性或者调用某些方法
- 添加或者删除可见的DOM元素

在触发回流的时候，由于浏览器渲染页面是基于流式布局，所以当触发回流时，会导致周围的DOM元素重新排列，它的影响范围有两种：

- 全局范围：从根节点开始，对整个渲染树进行重新布局

- 局部范围：对渲染树的某部分或者一个渲染对象进行重新布局

  (2) 重绘

  当页面中某些元素的样式发生变化，但是不会影响其在文档流中的位置时，浏览器就会对元素进行重新绘制，这个过程就是重绘。下面这些操作会导致回流：

-  color、background相关属性：background-image等

- outline相关属性：outline-color outline-width text-decoration

- border-radius、visibility、 box-shadow

  注意：当触发回流时，一定会触发重绘，但是重绘不一定会引发回流

2. 如何避免回流与重绘？

- 操作DOM时，尽量在低层级的DOM节点进行操作

- 不要使用table布局，一个小的改动可能会使整个table进行重新布局

- 使用CSS的表达式

- 不要频繁操作DOM，可以创建一个文档片段documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档这种

- 将元素先设置display:none 操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM的操作不会引发回流和重绘

- 将DOM的多个读操作(或者写操作)放在一起，而不是读写操作穿件插着写。这得益于浏览器的渲染队列机制。

  浏览器针对页面的回流与重绘，进行了自身的优化--渲染队列

  浏览器会将所有的回流、重绘的操作放在一个队列中，当队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会对队列进行批处理。这样就会让多次的回流、重绘变成一次回流重绘。

