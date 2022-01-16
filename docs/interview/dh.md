1. 项目中的难点和取得的成绩

2. Event Loop

3. vue的更新是在微任务还是宏任务之后?  nextTick 是promise

4. Http1.0 http1.1 http2.0 和 https

   Http2 多路复用的具体实现原理

   https 具体的过程

5. vue-router的原理以及自己实现的话怎么实现

6. 怎样判断两个对象是否相等

   ```javascript
   let a = {name: undefined,age: 13}
   let b = {name1: undefined,age: 13}
   
   function shallowEqual(a,b) {
       const keysA = Object.keys(a)
       const keysB = Object.keys(b)
       if(keysA.length !== keysB.length){
           return false
       }
       for(let i = 0; i < keysA.length; i++){
           if(!b.hasOwnProperty(keysA[i]) || !Object.is(a[keysA[i]],b[keysA[i]])){
               return false
           }
       }
   
       return true
   }
   console.log(shallowEqual(a,b))
   ```