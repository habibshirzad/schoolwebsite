<template>
  <div id="app">
    <a href="about.vue">about</a>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <PostComponent /> -->
    <!-- <LandingComponent /> -->
    <about/>

  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import LandingComponent from './components/LandingComponent.vue'
import about from './components/about.vue'

export default {
  name: 'app',
  components: {
    // PostComponent,
    // LandingComponent,
    about
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
