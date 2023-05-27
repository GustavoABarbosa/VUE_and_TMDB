<template>
  <div>
    <h2>Favoritos</h2>
    <ul>
      <li v-for="movie in favorites" :key="movie.id">
        {{ movie.title
        }}<img
          v-bind:src="
            'http://image.tmdb.org/t/p/original' + movie.backdrop_path
          "
          style="width: 200px"
          alt="Poster do filme"
          id="movie-poster"
          class="my-4"
        />
        <button @click="removeFromFavorites(movie)">
          Remover dos Favoritos
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
    movies() {
      // Suponha que você tenha uma lista de filmes
      return [
        { id: 1, title: "Filme 1" },
        { id: 2, title: "Filme 2" },
        { id: 3, title: "Filme 3" }
      ];
    }
  },
  methods: {
    ...mapMutations(["REMOVE_MOVIE_FROM_FAVORITES"]),
    addToFavorites(movie) {
      this.ADD_MOVIE_TO_FAVORITES(movie);
    },
    removeFromFavorites(movie) {
      this.REMOVE_MOVIE_FROM_FAVORITES(movie.id);
    }
  }
};
</script>
