<template>
  <div id="app">
    <AllCategories></AllCategories>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import AllCategories from '@/components/AllCategories'

export default {
  name: 'App',
  components: {
    AllCategories
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
