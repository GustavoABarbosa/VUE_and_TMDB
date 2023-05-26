<template>
  <div>
    <MovieDetails :movie="movie" :movieId="movie.id" v-if="movie" />
    <Recommendations :movie="movie" v-if="movie" />
  </div>
</template>

<script>
import api from "../services/api";
import MovieDetails from "../components/MovieDetails.vue";
import Recommendations from "../components/Recommendations.vue"

export default {
  data() {
    return {
      movie: {}
    };
  },
  methods: {
    fetchMovie(movieId) {
      api
        .get(`movie/${movieId}`)
        .then(response => {
          this.movie = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  watch: {
    "$route.params.movieId"(newMovieId) {
      console.log(newMovieId);
      this.fetchMovie(newMovieId);
    },
    movie(newMovie) {
      console.log("Movie updated:", newMovie);
      // Aqui você pode executar qualquer ação desejada quando o objeto movie é atualizado.
    }
  },
  created() {
    this.fetchMovie(this.$route.params.movieId);
  },
  components: { MovieDetails, Recommendations }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&family=Poppins:wght@200;300;400;500;600&display=swap");

* {
  color: #fff;
}
</style>
