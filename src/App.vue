<template>
  <div id="app">
    <div id="nav">
      <router-link to="/fun/">Stocks</router-link> |
      <router-link to="/fun/gifPage">GIF</router-link> |
      <router-link to="/fun/about">About</router-link>
    
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/scss/_reset.scss";
@import "@/scss/_helpers.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(240, 240, 240);
  min-height: 100vh;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.button{
  padding: 15px;
  cursor: pointer;
  display: inline-block;
  background: #42b983;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  transition: box-shadow .1s;
  &:hover{
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.22);
  }
}
</style>
