<template>
  <div id="app">
    <Navbar/>
    <ShowMovies />
  </div>
</template>
<script>
import ShowMovies from "./components/ShowMovies";
import Navbar from './components/Navbar';
export default {
  name: "App",
  components: {
    Navbar,
    ShowMovies
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
