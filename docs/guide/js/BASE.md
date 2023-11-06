1. js有哪些类型
    number,string,boolean,object,undefined,null,symble,bigInt
2. so 面试题来了？
   1. typeof null ????
      object why？历史原因因为null编码问题
   2. typeof array === 'object' ????
      yes 数组也是object类型
3. 数组常用方法
   1. 在数组末尾增加push,在末尾处删除pop  pop返回删除的元素 push返回新数组的长度
   2. 在数组头部增加unshift,在头部处删除shift shift返回删除的元素 unshift返回新数组的长度
   3. 在指定下标添加 splice（obj,index,0）返回空数组
   4. 在指定下标删除 splice (obj,index,1) 或者替换都是返回被删除的元素或者被替换的元素组成的数组

4. this执行问题

    1. 函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时， this指向全局对象

    2.  方法调用模式，如果一个函数作为一个对象的方法来调用是，this指向这个对象

    3. 构造器调用模式 如果一个函数用new调用时，函数指向前会新创建一个对象，this指向这个新创建的对象

    4. app、call、bind调用模式 apply方法接收两个参数: 一个是this绑定的对象 一个市参数数组。call方法接手的参数一个市this绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用call方法时 传递给函数的参数必须挨个列举出来。bind方法通过传入一个对象，返回一个this绑定了传入对象的新函数。这个函数的this指向除了使用new时会被改变，其他情况下都不会改变

       这四种方法，使用构造器调用的函数优先级最高 然后是apply call bind 然后是方法 然后是函数调用模式

5. 减少垃圾回收

    1. 对数组进行优化： 在清空一个数组时，最简单的方法就是给其赋值为[],但是与此同时会创建一个新的空对象，可以将数组的长度设置为0，以此来达到清空数组的目的。
    2. 对object进行优化：对象尽量复用，对于不再使用的对象，就将其设置为null，尽快被回收
    3. 对函数进行优化：在循环中国的函数表达式 如果可以复用 尽量放在函数的外面

6. 哪些情况会导致内存泄漏
   1. 意外的全局变量：由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收
   2. 被遗忘的计时器或回调函数：设置了setInterval 定时器，而忘记取消它 如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
   3. 脱离DOM的引用：获取一个DOM元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收
   4. 闭包：不合理的使用闭包，从而导致某些变量一直被留在内存当中

7. Async/await 对比Promise的优势

   1.  代码读起来更加同步，Promise虽然摆脱了回调地狱， 但是then的链式调用也会带来额外的阅读负担
   2. Promise传递中间值非常麻烦，而async/await几乎是同步的写法，非常优雅
   3. 错误处理友好 async/await可以用成熟的try/catch Promise的错误捕获非常冗余
   4. 调试友好 Promise的调试很差 由于没有代码块 你不能在一个返回表达式的箭头函数中设置断点 如果你在一个then代码块中使用调试器的步进 step-over功能，调试器并不会进入后续的then代码块，因为调试器只能跟踪同步代码的每一步。

   ```javascript
   let fs = require('fs');
   
   fs.readFile('./a.txt', 'utf8', function (err, data) {
   	fs.readFile(data, 'utf8', function (err, data) {
   		fs.readFile(data, 'utf8', function (err, data) {
   			console.log(data)
   		})
   	})
   })
   
   function read(url) {
   	return new Promise(function (resolve, reject) {
   		fs.readFile(url, 'utf8', function (err, data) {
   			err && reject(err);
   			console.log('read', data);
   			resolve(data);
   		})
   	})
   }
   
   read('./a.txt').then(data => {
   	return read(data)
   }).then(data => {
   	return read(data)
   }).then(data => {
   	console.log('finished', data)
   })
   
   async function testAwait() {
   	const data1 = await read('./a.txt')
   	const data2 = await read(data1)
   	const data3 = await read(data2)
   	console.log('data3', data3)
   }
   testAwait()
   ```

8. CSS优化和提高性能的方法有哪些？

   **加载性能：**

   1. css压缩：将写好的css进行打包压缩，可以减小文件体积。
   2. css单一样式：当需要下边距和左边距的时候，很多时候会选择使用margin: top 0 bottom 0;但margin-bottom和margin-left执行效率会更高
   3. 减少使用@import，建议使用link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。

   **选择器性能：**

   1. 关键选择器。选择器的最后的部分为关键选择器（即用来匹配目标元素的部分）。CSS选择符是从右到左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；
   2. 如果规则拥有ID选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹配它们了）
   3. 避免使用通配规则，如*{}计算次数惊人，只对需要用到的元素进行选择
   4. 尽量少的去对标签进行选择，而是用class
   5. 尽量少的去使用后代选择器，减低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素
   6. 了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。

   **渲染性能：**

   1. 慎用使用高性能属性：浮动 定位
   2. 尽量减少页面重排、重绘
   3. 去除空规则：{} 。空规则的产生原因一般来说是为了预留样式。去除这些空规则则无疑能减少css文件体积
   4. 属性为0时 不加单位
   5. 属性值为浮动小数0.xx，可以省略小数点之前的0
   6. 标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后
   7. 不适用@import前缀，它会影响css的加速速度。
   8. 选择器优化嵌套，尽量避免层级过深。
   9. css雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清楚再使用，
   10. 正确使用display的属性 由于display的作用，某些样式组合会无效，徒增样式体积的同时也会影响解析性能
   11. 不滥用web字体。对于中文网站来说WebFonts可能很陌生，国外却很流行。web fonts通常体积庞大，而且一些浏览器在下载web fonts时会阻塞页面渲染损伤性能。

   **可维护性、健壮性**

   1. 将具有相同属性的样式抽离出来，整合并通过class在页面中进行使用，提高css的可维护性
   2. 样式与内容分离：将css代码定义到外部css中。

