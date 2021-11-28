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
   4. 调试友好 Promise的调试很差 由于没有代码块 你不能在一个返回表达式的箭头函数中设置dua难点 如果你在一个then代码块中使用调试器的步进 step-over功能，调试器并不会进入后续的then代码块，因为调试器只能跟踪同步代码的每一步。

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

   

