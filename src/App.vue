<template>
  <div id="nav">
    <!-- <router-link to="/">Dashboard</router-link> -->
    <!-- <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> -->
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.logo {
  width: 100px;
  height: 100px;
}
.register input, .login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: 0 auto 30px auto;
}
.register button, .login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>
