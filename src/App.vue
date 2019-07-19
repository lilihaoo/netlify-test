<template>
  <div id="app">
    <div id="nav">
      <router-link to="/?id=456"
        >Home</router-link
      >
      |
      <router-link :to="{ name: 'about', params: { id: 123 } }"
        >About</router-link
      >
    </div>
    <!-- keep-alive只对可以切换组件的标签起作用 router-view、components、slot-->
    <!-- router-view 放置name相同的组件切换时，使用router中定义meta属性来控制缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" name="home"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" name="home"></router-view>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
