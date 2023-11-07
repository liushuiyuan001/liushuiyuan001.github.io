# yl

### Webpack

Webpack 静态打包构建工具

babel-loader   style-loader url-file css-loarder sass-loader/less-loader      loader:

HTMLWebpackPugin SplitChunksPlugin DIIPlugin      Plugin:

### React

1. 常用生命周期

2. PureComponent 优化：浅比较Props和State值是否发生了变化 只有发生了变化才进行更新，如果组件有自己的shouldComponentUpdate则用组件自己的判断，否则才做浅比较

3. key：diff算法优化 一般唯一id

   如果用index做索引 有时候页面显示回有问题

4. 为什么要用虚拟Dom？ 

   1. 页面性能的提升：尽管在我们前面的各种论证对比下，虚拟 DOM 并非[最优解](https://www.zhihu.com/search?q=最优解&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A405905695})，但在大多数场景下，虚拟 DOM 能给你的页面过得去的性能，并且提供给你更爽的开发模式。
   2. 开发效率的提升：通过对前端发展历史的描述可以看出，每一次对 DOM 操作的革新，背后都是对开发效率的提升。不得不提的是，在 React 或者 Vue 时代，同样的页面，我们的开发效率是提升了不少。就单单一个将输入框的内容输出到页面的 mvvm 模式的开发，引入 Vue 或 React 就可以快速搞定。
   3. 跨平台的问题：虚拟 DOM 是对渲染内容的一层抽象描述，这就使得视图层和渲染层做了解耦。这层对渲染层的描述可以是 web、native、小程序等多端的，在不同端可能只需要一份代码就可以 work 。毕竟连 Vue3 也将 DOM 操作的内容提在一个独立的 runtime-dom.js 模块中，目的就是在多端操作渲染层的内容从而实现跨平台的可能性。
   4. 更利于前后端分离开发和组件拆分，项目拆分

5. 类组件和函数组件的区别

   | 区别            | 函数组件 | 类组件 |
   | --------------- | -------- | ------ |
   | 是否有this      | 没有     | 有     |
   | 是否有生命周期  | 没有     | 有     |
   | 是否有状态state | 没有     | 有     |

6. 兄弟组件之间通信/全局状态管理

   Redux Mobx

   Redux

7. forceUpdate

### JS基础

1. typeof  

   string boolean object function undefined symbol bigint

   typeof Array   === object

​        Array.isArary 

​        [] Instanceof Array  

​		Object.prototype.toString.call([])

2. Promise   API

   Promise   all / race 和数组every和some一样意思

3. await

   如果有个数据队列这个时候怎么办

   await  或者 Promise.all

4. 闭包以及应用

   利用闭包立即执行表达式(function ( var a = 11 ) {})() 实现变量隔离

5. 上下文作用域：This 指向

### CSS基础

1. flex

   Display: flex

   Justyfiy-content: center

   Algin-items：center

   Flex: 1

2. 重置水平居中  