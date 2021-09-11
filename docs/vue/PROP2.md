### vue组件传值下

   1. $parent/$childern & ref
   ##### ref
   ```
    <div ref="a"></div>
    data(){
       return {
          title:"Hello World"
       }
    }
    //访问
    this.refs.a.title = "Hello Vue"
   ```
   #####  $parent/$childern
   ```
    // Son.vue
    data(){
       return {
          sonTitle:"Son Title"
       }
    }
    // 访问父组件属性
    this.$parent.fartherTitle = "Son Change Title"
    Farther.vue
    <Son></Son>
    data(){
       return {
          fartherTitle:"Farther Title"
       }
    }
    //访问子组件属性
    this.$children[0].sonTitle = 'Farther Change Title'
   ```
   2. $attrs、$listeners ----父向子通讯
   ```

   ```
   3. provide / inject这对选项需要一起使用
    vuejs 官网解释
   ```
    provide 和 inject 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。
    这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。
   ```
    官网demo,具体见官网。
   ```
   // 父级组件提供 'foo'
   var Provider = {
         provide: {
            foo: 'bar'
         }
   }
   // 子组件注入 'foo'
   var Child = {
         inject: ['foo'],
         created () {
            console.log(this.foo) // => "bar"
         }
   }
   ```
   provide与inject 怎么实现数据响应式
   ```
   provide祖先组件的实例，然后在子孙组件中注入依赖，这样就可以在子孙组件中直接修改祖先组件的实例的属性，
   不过这种方法有个缺点就是这个实例上挂载很多没有必要的东西比如props，methods
   ```
   ```
   使用2.6最新API Vue.observable 优化响应式 provide(推荐) 我们来看个例子：
   孙组件E 和 获取A组件传递过来的color值，并能实现数据响应式变化，
   即A组件的color变化后，组件E、F会跟着变（核心代码如下：）
   ```
   4. broadcast / dispatch
   Vue1.0有$boardcast(通知所有子组件触发方法)与$diapatch(通知所有父组件触发方法)，vue2.0就删掉了。但是在一些组价库中，还是有这个方法，比如ElementUI
   ```
   Vue.prototype.$diapatch = function $diapatch(eventName, data){
         let parent = this.$parent
         while(parent) {
            parent.emit(eventName,data)
            parent = this.$parent
         }
   }
   ```
   ```
   Vue.prototype.$broadcast = function $broadcast(eventName, data) {
         const broadcast = (children) => {
         children.forEach(child => {
            child.$emit(eventName, data)
            if (child.$children) {
            broadcast(child.$children)
            }
         })
         }
         broadcast(this.$children)
   }
   ```
   5. model和.sync
   ```

   ```
   6. 发布/订阅模式、rxjs等
