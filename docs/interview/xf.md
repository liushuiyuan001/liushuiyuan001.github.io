1. useRef和useState的区别

   ```
   1. useState是异步的,useRef是同步的
   2. useState会触发视图更新,useRef不会
   3. useRef是引用类型，一个变了另外一个也会变
   ```

2. Promise.all

   ```javascript
   Promise.all = function(promises) {
       return new Promise(function(resolve,reject) {
           if(!Array.isArray(promises)) {
               throw new Error('arguments must be a array')
           }
           let resolvedCounter = 0
           let promiseNum = promises.length
           let resolvedResult = []
           for(let i = 0; i < promiseNum; i++) {
               Promise.resolve(promises[i]).then(value => {
                   resolvedCounter++
                   resolvedResult[i] = value
                   if(resolvedCounter === promiseNum) {
                       return resolve(resolvedResult)
                   }
               }, error => {
                   return reject(error)
               })
           }
       })
   }
   ```

3. React高阶组件的概念以及出现的问题

4. vue和react的区别

