<template>
  <div id="app">
    <Navbar/>
    <Search />
    <Populares />
    <MaisVotados />
    <Detalhes/>
  </div>
</template>

<script>

import Populares from './components/Populares.vue'
import Search from "./components/Search";
import Navbar from './components/Navbar';
import Detalhes from './components/Detalhes.vue'
import MaisVotados from './components/MaisVotados.vue'

export default {
  name: "App",
  components: {
    Navbar,
    Search,
    Populares,
    MaisVotados,
    Detalhes
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
</style>
