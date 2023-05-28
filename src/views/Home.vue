<template>
  <div>
    <Search @open-movie-details="openMovieDetailsModal" />
    <Popular @open-movie-details="openMovieDetailsModal" />
    <TopRated @open-movie-details="openMovieDetailsModal" />
    <Favorites v-if="hasFavorites" />
    <MovieDetails
      v-if="selectedMovie"
      :movie="selectedMovie"
    />
  </div>
</template>

<script>
import Search from "../components/Search";
import Popular from "../components/Popular.vue";
import TopRated from "../components/TopRated.vue";
import Favorites from "../components/Favorites.vue"
import MovieDetails from "../components/MovieDetails.vue";

export default {
  name: "Home",
  components: {
    Search,
    Popular,
    TopRated,
    Favorites,
    MovieDetails
},
  data() {
    return {
      selectedMovie: null,
    };
  },
  computed: {
    hasFavorites(){
      return this.$store.state.favorites.length > 0;
    }
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
