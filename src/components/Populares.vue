<template>
  <section>
    <carousel :title="'Filmes populares'" :movies="movies" />
  </section>
</template>

<script>
import api from "../services/api";
import Carousel from "./Carousel.vue";

export default {
  components: {
    Carousel
  },
  data() {
    return {
      movies: []
    };
  },
  methods: {
    fetchMovies() {
      api
        .get("/movie/popular")
        .then(response => {
          this.movies = response.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  mounted() {
    this.fetchMovies();
  }
};
</script>

<style scoped>
section {
  margin: 20px 0 40px;
  color: #666a73;
  background-color: #2c3e50;
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
  padding: 0;
  margin: 0;
}
</style>
