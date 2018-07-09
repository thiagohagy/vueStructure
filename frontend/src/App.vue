<template>
  <div id="app">
    <h1>Home</h1>
      <app-header></app-header>
      <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue';

  export default {
    components: {
      'app-header': Header
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
  }
</style>
