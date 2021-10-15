<template>
  <div id="app">
    <router-view></router-view>
    <div class="app-router">
      <router-link to="/home">首页</router-link>
      <router-link to="/login">登录</router-link>
    </div>
    <img alt="Vue logo" src="./assets/img/logo.png">
    <HelloWorld msg="codewolf cli helps you to create project fastly"/>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created: function () {
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-router a {
  width: 50px;
  background-color: #e6e5e6;
  font-weight: bold;
  line-height: 30px;
  display: inline-block;
  margin-left: 10px;
  height: 30px;
  text-decoration: none;
}
</style>
