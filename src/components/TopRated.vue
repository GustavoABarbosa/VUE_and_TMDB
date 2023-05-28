<template>
  <section>
    <carousel :title="'Mais Votados!'" :movies="movies" />
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
        .get("/movie/top_rated")
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
  background-color: #8905c9;
  background-image: url(../assets/Background_2.png);
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  padding: 0;
  margin: 0;
}


</style>
