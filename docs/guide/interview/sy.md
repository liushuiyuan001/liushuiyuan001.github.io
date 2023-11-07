# sy

一、项目中的难点

二、项目中印象深刻的难点或者说遇到的问题解决思路

1. spreadjs遇到问题解决思路

   ```
   1. 静静思考问题产生的根本原因 60-70%时间
   2. Debugger验证自己的猜想而不是Debugger  30-40%
   3. 思考解决方法如果没有解决方法的时候思考需要换一种思路是否能解决？
   4. 谷歌或者去github issue中看是否别人遇到类似问题
   5. 去github上clone代码从代码中找解决方法
   ```

三、项目的架构怎么选型？

```
 1. 首先技术选型 vue或react
 2. 其次业务选型-高内聚和低耦合
 3. 代码的风格ESLint
 4. 语言的选型 JS或者TS
 5. 代码的性能与整洁-需要review代码
```

四、less和sass

五、浅拷贝和深拷贝

常用的[...obj]  Object.assgin(target,source,...)

怎么深拷贝  JSON序列化（function或者undefined或者Symble会直接消失）   deepClone  自己实现

六、BFC的理解

Box-szing的理解

七、React的setState

1. vue的响应式 2.x用definedProperty 3.x 用的Proxy

一般情况下是异步，但是如果被setTimetout包括了就是同步

setTimeout里面是同步

拿到setState最新值-第二个参数是个回调方法可以拿到最新值 vue中的是nextTick

八、回调地狱的理解以及解决方法

```
promise解决了回调地狱但是变为链式调用，await变为同步调用
```

九、new function和new Class的本质区别

十、哪几种立即表达式（）()

十一、React的动态组件实现方式

1. config.data     class  export default new Config

   Config[xxxxx]  (ddd,xxxss)

2. Props.children相当于vue的插槽
3. hook或者函数组件直接返回组件

十二、移动端经验

十三、Redux怎样处理异步更新

```
react-thunk框架
```

十四、vue和react区别

```javascript
react 中 直接用render方法返回虚拟dom vue中有template但也有render
react 中 是调用setState主动diff渲染视图更新 vue是用的Object.definedPrototy或者v3的Proxy实现订阅发布模式
react 中 自己实现了一套基于事件的异步更新事件 vue则喜欢用浏览器自带的微任务promise
react 中 有类组件 vue中没有
数据是不是可变的
react可以通过高阶组件（Higher Order Components--HOC）来扩展，而vue需要通过mixins来扩展
react diff算法是从前往后比较，vue是双端比较 用新旧节点的开始和结束下标对比
react 采用Fiber把树的同步更新改为链表的可中断更新（diff过程中可中断，commit中就不能中断了）vue采用静态标记的方法提高diff效率
```

