<template>
  <div>
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.overview }}</p>
    <p>Release Date: {{ movie.release_date }}</p>
    <p>Vote Average: {{ movie.vote_average }}</p>
    <!-- Add more details as needed -->
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
*{
  color: #fff
}
</style>
