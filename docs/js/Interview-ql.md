#### 组件的pureComponent原理和memo

#### hook的useEffect 和 useLayout

#### 函数的高阶组件理解以及问题

#### 闭包理解，以及为什么形成闭包

#### 在项目中用到了哪些设计模式

#### mobx的原理以及对事务的理解

#### hook的cleanup以及和compoentunmounted的区别

#### 链式调用一个数组中都为异步的方法

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

#### 双指针或者快慢对排序后的数组去重

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