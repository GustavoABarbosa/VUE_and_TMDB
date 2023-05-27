<template>
  <div>
    <Search @open-movie-details="openMovieDetailsModal" />
    <Populares @open-movie-details="openMovieDetailsModal" />
    <MaisVotados @open-movie-details="openMovieDetailsModal" />
    <Favoritos v-if="!isEmptyTrue" />
    <MovieDetails
      v-if="selectedMovie"
      :movie="selectedMovie"
    />
  </div>
</template>

<script>
import Search from "../components/Search";
import Populares from "../components/Populares.vue";
import SeparadorBaixo from "../components/SeparadorBaixo.vue";
import MaisVotados from "../components/MaisVotados.vue";
import SeparadorCima from "../components/SeparadorCima.vue"
import Favoritos from "../components/Favoritos.vue"
import MovieDetails from "../components/MovieDetails.vue";

export default {
  name: "App",
  components: {
    Search,
    Populares,
    SeparadorBaixo,
    MaisVotados,
    SeparadorCima,
    Favoritos,
    MovieDetails
},
  data() {
    return {
      selectedMovie: null,
      isFavoritesEmpty: true
    };
  },
  methods: {
    fetchMovies() {
      api
        .get("/movie/popular")
        .then(response => {
          this.movies = response.data.results;
          this.isFavoritesEmpty = this.$store.state.favorites.length === 0;
        })
        .catch(error => {
          console.error(error);
        });
    },
    openMovieDetailsModal(movie) {
      this.selectedMovie = movie;
    },
    closeMovieDetailsModal() {
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
  color: #fff;
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
