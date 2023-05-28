<template>
  <main id="app">
    <Navbar />
    <router-view />
    <Footer />
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&family=Poppins:wght@200;300;400;500;600&display=swap");
@import "@fortawesome/fontawesome-free/css/all.css";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body,
#app {
  font-family: "Poppins", "Open Sans", sans-serif;
  padding: 0;
  margin: 0;
  background-color: #2c3e50;;
  color: #fff
}

::-webkit-scrollbar{
    width: 15px;
}
::-webkit-scrollbar-track{
    border-radius: 0px;
    background-color: #2c3e50;
}
::-webkit-scrollbar-thumb{
    background: linear-gradient(0deg, #4f2c50 0%, #aa00ff 50%, #432c50 100%);
    border-radius: 0px;
}


</style>
