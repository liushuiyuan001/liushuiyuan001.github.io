# 页面间传值


   1. 路由传参

```javascript
利用vue-router、react-router传值
vue-router
```
   ```javascript
    // 列表页
    this.$router.push({path:'/a',query:{name: 'zs'}})
    // 详情页 注意这里是route。。。
    this.$route.query.name
   ```
   2. vuex/mobx
      
      ###### [详解见vuejs官网](https://cn.vuejs.org/)
   3. localStorage
   ```javascript
    // set
    localStorage.setItem('name','小明')
    // get 
    localStorage.getItem('name') // '小明'
    // clear 清空所有
    localStorage.clear()
   ```
