1.  EvenLoop理解

   ```javascript
       setTimeout(() => {
            console.log(111)
            let  p = new Promise((resolve,reject) => {
            console.log(333)
                   resolve()
            })
            p.then(() => {
                  console.log(444)
            })
   
       })
   
       setTimeout(() => {
           console.log(222)
       })
   ```

2. Dom事件冒泡和捕获

3. 事件代理
4. 节流

5. 数组去重

   ```javascript
    const arr = [{id:1,name:'sss'},{id:2,name:'sss'},{id: 1, name:'sss'}]
   //1. 指定key
   // let hash = {}
   // let result = arr.reduce((pre,curr) => {
   //     if(!hash[curr.id]) {
   //         hash[curr.id] = true
   //         pre.push(curr)
   //     }
   //     return pre
   // },[])
   // console.loh(result)
   
   
   // 2. 不指定key
   // let wkMap = new Map()
   
   // let result  = arr.reduce((pre,curr) => {
   
   //         if(!wkMap.has(curr)){
   //                pre.push(curr)
   //                wkMap.set(curr)
   //         }
        
   //         return pre
   
   // },[])
   
   // console.log(result)
   
   
   // 3. 
   // let hash = {}
   // let result = []
   // for(let i = 0; i < arr.length; i++) {
   //   const item = arr[i]
   //   const key = JSON.stringify(item)
   //   // 顺序不同不行
   //   if(!hash[key]) {
   //      result.push(item)
   //      hash[key] = true 
   //   }
   
   // }
   // console.log(result)
   ```

6. this指向

   ```javascript
   function MyNew(name) {
       console.log(this)
       // this
       this.name = name
   }
   const p = new MyNew('zs')
   ```

7. PureComponent

   ```javascript
   // Class PureComponent  原理 shouldComponetUpdate（preState,preProps）{ return false }
   // function memo  ->  preProps ,preProps
   // function(props) {
            
   // }
   
   // 父传子参数
   function Foo(props) {
       const [count,setCount] = useState(0)
   }
   
   function Bar(props) {
       // 函数
   //     useCallback  
   //     props.xxx() => [{li:xxx},{li:xxx},{li:xxx}]
   
   // dom的变化
   
   //     useMemo
   //     props.xxx  =>  [{li:xxx},{li:xxx},{li:xxxx}]
   }
   ```

8. 函数组件和类组件区别