### 一、CDN

#### 1. CDN的概念

CDN(Content Delivery Network, 内容分发网络) 是指一种通过互联网互相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、更可靠地将音乐、图片、视频、应用程序以及其他文件发送给用户，来提供高性能、可扩展性及低成本的网络内容传递给用户。

典型的CDN系统由下面三个部分组成：

- 分发服务系统：最基本的工作单元就是Cache设置，cache(边缘cache) 负责直接响应最终用户的访问请求，把缓存在本地的内容快速地提供给用户。同时cache还负责与源站点进行内容同步，把更新的内容以及本地没有的内容从源站点获取并保存在本地。Cache设备的数据、规模、总服务能力是衡量一个CDN系统服务能力的最基本的指标。
- 负载均衡系统：主要功能是负责对所有发起服务请求的用户进行访问调度，确定提供给用户的最终实际访问地址。两级调度体系分为全部负载均衡和本地负载均衡。全局负载均衡主要根据用户就进性原则，通过对每个服务节点进行“最优”判断，确定向用户提供服务的cache的物理位置。本地负载均衡主要负责节点内部的设备负载均衡
- 运营管理系统：运营管理系统分为运营管理和网络管理子系统，负责处理业务层面的与外界系统交互所必须的收集、整理、交付工作，包含客户管理、产品管理、计费管理、统计分析等功能。

### 懒加载

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
function lozyLoad() {
  var scrollTop = document.body.scrollTop || document.documentElemnt.scrollTop
  var winHeight = window.innerHeight
  for(var i=0; i < imgs.length;i++) {
    if(imgs[i].offsetTo < scrollTop + winHeight) {
      imgs[i].src = imgs[i].getAttribute('data-src')
    }
  }
}
  window.onscroll = lozyload()
</script>
```

