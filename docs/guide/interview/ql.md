# ql

1. 组件的pureComponent原理和memo
2. hook的useEffect 和 useLayout
3. 函数的高阶组件理解以及问题
4. 闭包理解，以及为什么形成闭包
5. 在项目中用到了哪些设计模式
6. mobx的原理以及对事务的理解
7. hook的cleanup以及和compoentunmounted的区别

```
cleanup是在函数组件每次重新render时执行，compoententunmounted是在组件卸载时运行
```

8. 链式调用一个数组中都为异步的方法,后一个依赖前一个的输出参数

```javascript
function testAsync(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(n)
            resolve(n + 1)
        },1000 * 2 * n)
    })
}
let asyncList = [testAsync,testAsync,testAsync]
// async function A(arr)  {
//     let pre = 0
//     for (let item of arr) {
//         let result = await item(pre)
//         pre = result
//     }
//     return pre
// }

// A(asyncList)

function B(arr) {
  return arr.reduce((pre,curr) => {
        return pre.then(r => {
            return curr(r)
        })
    },Promise.resolve(0))
}
B(asyncList)
```

#### 双指针对排序后的数组去重

```javascript
let arr = [1,2,3,4,4,5,6]
let b = [...new Set(arr)]
arr.reduce((pre,curr) => {
  if(pre[pre.length - 1] === curr) {
          return pre
      }
      pre.push(curr)
      return pre
},[])

function D(arr) {
 for(let i = arr.length - 1; i > 0; i--) {
     if(arr[i] === arr[i-1]) {
         arr.splice(i,1)
       }
    }
}
```