<template>
  <div id="details">
    <div class="content">
      <img
        v-bind:src="'http://image.tmdb.org/t/p/original' + movie.backdrop_path"
        alt="Poster do filme"
        id="movie-poster"
      />
      <div id="info-details">
        <div>
          <h2>{{ movie.title }}</h2>
          <br />
        </div>
        <div>
          <p>Release Date: {{ movie.release_date }}</p>
          <p>Vote average: {{ movie.vote_average }}</p>
        </div>
        <div>
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </div>
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
#details {
  color: #fff;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 10rem;
  margin: 2.5rem 10rem;

  border: 1px solid #000;
  border-radius: 25px;
}
#movie-poster {
  width: 100%;
}
#info-details {
  display: block;
}
</style>
