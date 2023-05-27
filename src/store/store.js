import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
  },
  mutations: {
    ADD_MOVIE_TO_FAVORITES(state, movie) {
      state.favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    REMOVE_MOVIE_FROM_FAVORITES(state, movieId) {
      state.favorites = state.favorites.filter(fav => fav.id !== movieId);

      // Atualizar o LocalStorage com a lista atualizada de favoritos
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }
  }
});
