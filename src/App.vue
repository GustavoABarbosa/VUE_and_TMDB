<template>
  <div id="app">
    <Navbar />
    <Search @open-movie-details="openMovieDetailsModal" />
    <Populares @open-movie-details="openMovieDetailsModal" />
    <Separador />
    <MaisVotados @open-movie-details="openMovieDetailsModal" />
    <MovieDetails
    v-if="selectedMovie"
    :movie="selectedMovie"
    @close="closeMovieDetailsModal"/>
    <Footer />
  </div>
</template>

<script>
import Populares from "./components/Populares.vue";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import MaisVotados from "./components/MaisVotados.vue";
import Separador from "./components/Separador.vue";
import Footer from "./components/Footer.vue";
import MovieDetails from "./components/MovieDetails.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Search,
    Populares,
    Separador,
    MaisVotados,
    Footer,
    MovieDetails
},
  data() {
    return {
      selectedMovie:null
    };
  },
  methods:{
    openMovieDetailsModal(movie){
      this.selectedMovie = movie;
    },
    closeMovieDetailsModal(){
      this.selectedMovie = null;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&family=Poppins:wght@200;300;400;500;600&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #2c3e50;
}
html,
body,
#app {
  font-family: "Poppins", "Open Sans", sans-serif;
  padding: 0;
  margin: 0;
}
</style>
