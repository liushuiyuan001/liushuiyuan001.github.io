### vue组件传值上

   1. 父传子（props）
   ```
    Farther.vue
       <Son :monery="moneryFarther"></Son> 
    Son.vue
      // 推荐
      props:{
         monery:{
            type:Number,
            default: 0
         }
      }
      // 或者
      props:{monery}

   ```
   2. 子传父（通过事件回调机制，父监听子事件，子emit父监听的事件）
   ```
    Farther.vue
       <Son @play="changePlay"></Son> 
       changePlay(reason){
          console.log('家庭作业写完了？不写完不准出去玩')
       }
    Son.vue
      <div @click="wantPlay"></div>
      wantPlay(){
         this.$emit('play','我想出去玩')
      }

   ```
   3. vuex/mobx
      ###### [详解见vuejs官网](https://cn.vuejs.org/)
   4. localStorage
   ```
		// set
		localStorage.setItem('name','小明')
		// get 
		localStorage.getItem('name') // '小明'
		// clear 清空所有
		localStorage.clear()
   ```
   5. 事件总线
   ```
		1.挂载在全局原型上
		Vue.prototype.$bus = new Vue();
		2.监听事件
		this.$bus.$on("customEvent", data => {
			console.log(data);
		});
		3.触发事件
		this.$bus.$emit("customEvent", "触发了事件总线");
   ```
