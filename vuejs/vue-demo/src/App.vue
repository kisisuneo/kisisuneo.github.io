<template>
  <div id="app">
    <Header/>
    <Todos/>
  </div>
</template>

<script>
import Header from './components/HeaderPage'
import Todos from "./components/TodosPage.vue";

export default {
  name: 'App',
  components: {Header, Todos}
};
</script>

<style>
#app{
  font-family: Arial, Helvetica, sans-serif;
}
</style>