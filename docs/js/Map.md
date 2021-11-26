### Map
  与对象不同之处：对象是字符串键-任意类型值，Map是任意类型键-任意类值值
```javascript
	const m = new Map();
	const o = {p: 'Hello World'}

	m.set(o, "content")
	m.get(o) // "content"

	m.has(o) // true
	m.delete(o) // true
	m.has(o) // false
	m.delete(o) // undefined

	const p = {name: '小明'}
	m.set(p, "content")
	// 清空所有值
	m.clear()
	m.get(p) // undefined

	const q = {name: '蘑菇'}
	m.set(q, "content")
	// 返回所有键名的迭代器（Object.keys返回的所有键名的数组）
	m.keys() //MapIterator
	m.values() //MapIterator
	m.entries() //MapIterator [key,value]
```
   用一个二维数组初始化，里层的数组是一个长度为2的数组，第一个元素会被初始化为key，第二个元素会被初始化为value
```javascript
	const m = new Map([
		['name', '张三'],
		['title', 'Author']
	])
	//使用ES6的展开运算符...和keys，values可以方便将Map转为数组
	[...m.keys()] // ['name','title']
	[...m.values()] // ['张三','Author']
```

​	Map中的key是有序的  Object的key是无序的