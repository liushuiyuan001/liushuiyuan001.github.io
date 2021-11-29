### 一、JavaScript基础

<br/>

#### 1.手写 Object.create

思路：将传入的对象作为原型

```javascript
function create(obj) {
  function F(){}
  F.prototype = obj
  return new F()
}
```

#### 2. 手写instanceof方法

instanceof 运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置

实现步骤：

1. 首先获取类型的原型
2. 然后获取对象的原型
3. 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为null，因为原型链最终为null

具体实现：

```javascript
function myInstanceof(left,right){
  let proto = Object.getPrototypeOf(left)
	const prototype = right.prototype
  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while(true) {
    if(!proto) return false
    if(proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
```

#### 3. 手写new操作符

在调用new的过程中会发生以下四件事情

1. 首先创建一个新的空对象

2. 设置原型 将对象的原型设置为函数的prototype对象

3. 让函数的this指向这个对象 指向构造函数的代码 为这个新对象添加属性

4. 判断函数的返回值类型 如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

   ```javascript
   function objectFactory(){
     let newObject = null
     let constructor = Array.prototype.shift.call(arguments)
     let result = null
     // 判断参数是否是一个函数
     if (typeof constructor !== "function") {
       console.error("tYpe error")
       return
     }
     // 新建一个空对象 对象的原型为构造函数的 prototype 对象
     newObject = Object.create(constructor.prototype)
     // 将 this 指向新建对象 并执行函数
     result = constructor.apply(newObject,arguments)
     console.log(result)
     // 判断返回对象
     let flag = result && (typeof result === 'object' || typeof result === 'funtion')
     console.log(flag)
     return flag ? result : newObject
   }
   // 使用方法
   objectFactory(Foo,3,4)
   ```

   

#### 4. 手写Promise

```javascript
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
	// 保存初始化状态
	var self = this

	// 初始化状态
	this.state = PENDING
	
	// 用于保存 resolve 或者 rejected 传入的值
	this.value = null
	
	// 用于保存 resolve 的回调函数
	this.resolvedCallbacks = []
	
	// 用于保存 reject 的回调函数
	this.rejectedCallbacks = []
	
	// 状态转变为 resolved 方法
	function resolve(value) {
		// 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
		if (value instanceof MyPromise) {
			return value.then(resolve, reject)
		}
	
		// 保证代码的执行顺序为本轮事件的末尾
		// setTimeout(() => {
		// 只有状态为pending时才能转变
		if (self.state === PENDING) {
			// 只有状态为 pending 时才能转变
			self.state = RESOLVED
	
			// 设置传入的值
			self.value = value
	
			// 执行回调函数
			self.resolvedCallbacks.forEach(callback => {
				callback(value)
			})
	
		}
		// })
	}
	
	// 状态转变为 rejected 方法
	function reject(value) {
		// 保证代码的执行顺序为本轮事件循环的末尾
		// setTimeout(() => {
		// 只有状态为 pending 时才能转变
		if (self.state === PENDING) {
			// 修改状态
			self.state = REJECTED
	
			// 设置传入的值
			self.value = value
	
			// 执行回调函数
			self.rejectedCallbacks.forEach(callback => {
				callback(value)
			})
		}
		// })
	}
	
	// 将两个方法传入函数执行
	try {
		fn(resolve, reject)
	} catch (error) {
		// 遇到错误时，捕获错误 执行reject函数
		reject(error)
	}

}

// MyPromise.prototype.then = function (onResolved, onRejected) {
// 	// 首先判断两个参数是否为函数类型 因为这个两个参数是可选参数
// 	onResolved = typeof onResolved == "function" ? onResolved : function (value) {
// 		return value
// 	}

// 	onRejected = typeof onRejected == "function" ? onRejected : function (error) {
// 		return error
// 	}

// 	// 如果是等待状态 则将函数加入对应列表中
// 	if (this.state === PENDING) {
// 		this.resolvedCallbacks.push(onResolved)
// 		this.rejectedCallbacks.push(onRejected)
// 	}

// 	// 如果状态已经凝固，则直接执行对应状态的函数
// 	if (this.state === RESOLVED) {
// 		onResolved(this.value)
// 	}

// 	if (this.state === REJECTED) {
// 		onRejected(this.value)
// 	}
// }
```



#### 5.手写 Promise.then

```javascript
MyPromise.prototype.then = function (onResolved, onRejected) {
	// 保存前一个promise的this
	const self = this
	return new MyPromise((resolve, reject) => {
		// 封装前一个promise成功时执行的函数
		let fulfilled = () => {
			try {
				const result = onResolved(self.value) // 承前
				return result instanceof MyPromise ? result.then(resolve, reject) : resolve(result) // 启后
			} catch (error) {
				reject(error)
			}
		}
		// 封装前一个promise失败时执行的函数
		let rejected = () => {
			try {
				const result = onRejected(self.value)
				return result instanceof MyPromise ? result.then(resolve, reject) : reject(result)
			} catch (error) {
				reject(error)
			}
		}
		switch (self.state) {
			case PENDING:
				self.resolvedCallbacks.push(fulfilled)
				self.rejectedCallbacks.push(rejected)
				break;
			case RESOLVED:
				fulfilled()
				break
			case REJECTED:
				rejected()
				break
			default:
				break;
		}
	})
}

function testMyPromise() {
	return new MyPromise((resolve, reject) => {
		setTimeout(() => {
			resolve(100)
		}, 3000)
	})
}
testMyPromise().then(res => {
	console.log('123456', res)
})
```



#### 6.手写Promise.all

// 1. 核心思路
// 1. 接收一个Promise实例的数组或具有Iterator接口的对象作为参数
// 2. 这个方法返回一个新的Promise对象
// 3. 遍历传入的参数 用Promise.resolve() 将参数“包一层” 使其变成一个promise对象
// 4. 参数所有回调成功才是成功 返回值数组与参数顺序一致
// 5. 参数数组其中一个失败 则触发失败状态 第一个触发失败的Promise错误信息作为Promise.all的错误信息

// 2.实现代码
// 一般来说 Promise.all 用来处理多个并发请求 也是为了页面数据构造的方法，将一个页面所用到的在不同接口的数据一起请求过来，不过 如果其中一个接口失败了，多个请求也就失败了 页面可能啥也出不来，这就看当前页面的耦合程度了

```javascript
function promiseAll(promises) {
	return new Promise(function (resolve, reject) {
		if (!Array.isArray(promises)) {
			throw new TypeError("argument must be a array")
		}
		let resolveCounter = 0
		let promiseNum = promises.length
		let resolvedResult = []
		for (let i = 0; i < promiseNum; i++) {
			Promise.resolve(promises[i]).then(value => {
				resolveCounter++
				resolvedResult[i] = value
				if (resolveCounter === promiseNum) {
					return resolve(resolvedResult)
				}
			}, error => {
				return reject(error)
			})
		}

	})

}

// test 
let p1 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve(1)
	}, 1000)
})

let p2 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve(2)
	}, 2000)
})

let p3 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve(3)
	}, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
	console.log('res', res)
})
```

#### 7. 手写 Promise.race
// 改方法的参数是 Promise 实例数组，然后其then注册的回调方法是数组中的某一个
// Promise 的状态变为fulfilled的时候就执行，因为Promise的状态只能改变一次
// 那么我们只需要把Promise.race中产生的Promise对象的resolve方法 注入到数组中的每一个Promise实例中的回调函数中即可

```javascript
Promise.race = function (args) {
	return new Promise(function (resolve, reject) {
		for (let i = 0; i < args.length; i++) {
			args[i].then(resolve, reject)
		}
	})
}
```

#### 8. 手写防抖函数

// 函数防抖是指在事件被触发n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求

```javascript
function debounce(fn, wait) {
	let timer = null

	return function () {
		let context = this
		let args = arguments
	
		// 如果此时存在定时器的话 则取消之前的定时器重新计时
		if (timer) {
			clearTimeout(timer)
			timer = null
		}
	
		// 设置定时器 使事件间隔指定事件后执行
		timer = setTimeout(() => {
			fn.apply(context, args)
		}, wait)
	}

}
```

#### 9. 手写节流函数

// 函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发时间的回调函数执行，如果在同一个单位时间内
// 某事件被触发多次，只有一次能生效。节流可以使用在scroll函数的事件监听上，通过事件节流来降低事件调用的频率

```javascript
function throttle(fn, delay) {
	let curTime = Date.now();

	return function () {
		let context = this
		let args = arguments
		let nowTime = Date.now();
		// 如果两次时间间隔超过了指定事件 则执行函数
		if (nowTime - curTime >= delay * 1000) {
			curTime = Date.now()
			return fn.apply(context, args)
		}
	}

}
```

#### 10. 手写类型判断函数

```javascript
function getType(value) {
	// 判断数据是null的情况
	if (value === null) {
		return 'null'
	}
	// 判断数据是引用类型的情况
	if (typeof value === 'object') {
		const typeStr = Object.prototype.toString.call(value)
		const str = typeStr.split(' ')[1]
		const type = str.substr(0, str.length - 1)
		return type.toLowerCase()
	} else {
		return typeof value
	}
}
```

#### 13. 手写bind函数

```javascript
// bind函数的实现步骤
// 1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用call等方式调用的情况
// 2. 保存当前函数的引用，获取其余传入参数值
// 3. 创建一个函数返回
// 4. 函数内部使用apply来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的this给apply调用，其余情况都传入指定的上下文对象。

Function.prototype.myBind = function (context) {
	// 判断调用函数是否为函数
	if (typeof this !== 'function') {
		throw new TypeError('Error')
	}

	// 获取参数
	var args = [...this.arguments].slice(1)
	var fn = this
	return function Fn() {
		// 根据调用方式 传入不同绑定值
		return fn.apply(
			this instanceof Fn ? this : context,
			args.concat(...arguments)
		)
	}
}
```

#### 14. 函数柯里化的实现

```javascript
// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
function curry(fn, args) {
	// 获取函数需要的参数长度
	let length = fn.length
	args = args || []

	return function () {
		let subArgs = args.slice(0)

		// 拼接得到现有的所有参数
		for (let i = 0; i < arguments.length; i++) {
			subArgs.push(arguments[i])
		}

		// 判断参数的长度是否已经满足函数所需参数的长度
		if (subArgs.length >= length) {
			// 如果满足 执行函数
			return fn.apply(this, subArgs)
		} else {
			// 如果不满足，递归返回柯里化的参数，等待参数的传入
			return curry.call(this, fn, subArgs)
		}
	}
}
```

#### 15. 实现AJAX请求

```javascript
function customAjax() {
	const SEVER_URL = '/server'
	const xhl = new XMLHttpRequest()
	// 创建 Http 请求
	xhr.open("GET", SEVER_URL, true)
	// 设置状态监听函数
	xhr.onreadystatechange = function () {
		if (this.readyState !== 4) return
		// 当请求成功时
		if (this.status === 200 || this.status === 304) {
			handle(this.response)
		} else {
			console.log(this.statusText)
		}
	}
	// 设置请求失败的监听函数
	xhr.onerror = function () {
		console.log(this.statusText)
	}
	// 设置请求头信息
	xhr.responseType = "json"
	xhr.setRequestHeader("Accept", "application/json")
	// 发送 Http 请求
	xhr.send(null)
}
```

