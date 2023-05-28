<template>
  <section>
    <carousel :title="'Filmes favoritos'" :movies="favorites" />
  </section>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  components: {
    Carousel
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    }
  }
};
</script>


<style scoped>
.carousel {
  margin: 20px 0 40px;
  background-color: #2c3e50;
  color: #666a73;
  height: 70vh;
  margin-bottom: 0;
  padding: 0;
}
</style>
