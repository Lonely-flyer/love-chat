<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Element from 'element-ui'；

export default {
  name: 'App',
  // components: {Element},
  data() {
      return {
        nav:'ture'
      };
    },
    mounted() {
      //事件监听滚动条
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleSelect(key, keyPath) {
      this.activeIndex = key;
      console.log(key, keyPath)
      },
      handleScroll(nav) {
        //获取导航到顶部的距离
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop == 0) {
          this.nav = true;
          return;
        } else {
          this.nav = false
        }
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0px;
}
* {
  margin: 0;
  padding: 0;
}
/* html {font-size: 62.5%!important;
 10÷16=62.5% */
 /* } */

</style>
