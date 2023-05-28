<template>
  <div id="details" class="container">
    <b-col class="content">
      <b-row
        ><img
          v-bind:src="
            'http://image.tmdb.org/t/p/original' + movie.backdrop_path
          "
          alt="Poster do filme"
          id="movie-poster"
          class="my-4"
        />
      </b-row>
      <div id="info-details">
        <b-row class="left-info text-center">
          <b-col
            ><h2 class="display-4">{{ movie.title }}</h2>
            <button
              class="button-favorite"
              :class="{
                'button-remove': isInFavorites(movie),
                'button-add': !isInFavorites(movie)
              }"
              @click="toggleFavorite(movie)"
            >
              {{
                isInFavorites(movie)
                  ? "Remover dos Favoritos"
                  : "Adicionar aos Favoritos"
              }}
            </button>
          </b-col>
          <b-col class="right-info mt-3">
            <b-row>
              <b-col class="middle">
                <!-- Detalhes cetrais-->
                <p>Lançamento: {{ movie.release_date }}</p>
                <p>Nota: {{ movie.vote_average }}</p>
                <!-- Avaliação com LocalStorage-->
                <p>Avaliar filme:</p>
                <div class="star-rating">
                  <div
                    v-for="rating in 5"
                    :key="rating"
                    @click="selectRating(rating)"
                    :class="{ active: rating <= selectedRating }"
                    class="star-icon"
                  >
                    <b-icon
                      class="star-icon mx-1"
                      icon="star-fill"
                      font-scale="1"
                    ></b-icon>
                  </div>
                </div>
                <p class="text-center">Seu voto: {{ selectedRating }}</p>
              </b-col>
              <b-col class="genres text-center">
                <p>Gêneros:</p>
                <p class="m-0" v-for="genre in movie.genres" :key="genre.id">
                  {{ genre.name }}
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <div class="mt-4">
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </b-col>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    movie: {
      type: Object,
      required: true
    },
    movieId: {
      required: true
    }
  },
  data() {
    return {
      selectedRating: 0
    };
  },
  methods: {
    ...mapMutations(["REMOVE_MOVIE_FROM_FAVORITES"]),
    addToFavorites(movie) {
      this.ADD_MOVIE_TO_FAVORITES(movie);
    },
    removeFromFavorites(movie) {
      this.REMOVE_MOVIE_FROM_FAVORITES(movie.id);
      const favorites = this$store.state.favorites;
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    selectRating(rating) {
      this.selectedRating = rating;
      localStorage.setItem(`movieRating_${this.movieId}`, this.selectedRating);
    },
    loadRating() {
      const storedRating = localStorage.getItem(`movieRating_${this.movieId}`);
      if (storedRating) {
        this.selectedRating = parseInt(storedRating);
      }
    },
    addToFavorites(movie) {
      this.$store.commit("ADD_MOVIE_TO_FAVORITES", movie);
    },
    isInFavorites(movie) {
      return this.$store.state.favorites.some(fav => fav.id === movie.id);
    },
    toggleFavorite(movie) {
      if (this.isInFavorites(movie)) {
        this.removeFromFavorites(movie);
      } else {
        this.addToFavorites(movie);
      }
    }
  },
  watch: {
    movieId() {
      this.loadRating();
    }
  },
  mounted() {
    this.loadRating();
  }
};
</script>

<style>
#movie-poster {
  width: 100%;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
}
#info-details {
  display: flex;
  flex-direction: column;
}
.left-info{
  display: flex;
  align-items: center;
  margin: 0
}
.button-add,
.button-remove {
  height: 45px;
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  transition: all ease-in 300ms;
  width: 25rem;
}
.button-add {
  background: rgb(245, 0, 112);
  background: linear-gradient(
    54deg,
    rgba(245, 0, 112, 1) 50%,
    rgba(137, 4, 201, 1) 100%
  );
  opacity: 1
}
.button-add:hover{
  transform: scale(1.05);
  box-shadow: 0 0 50px rgba(245, 0, 112, 0.6);
}
.button-remove {
  background: rgb(137, 4, 201);
  background: linear-gradient(
    54deg,
    rgba(137, 4, 201, 1) 0%,
    rgba(245, 0, 112, 1) 50%
  );
  opacity: 0.5;
}
.button-remove:hover {
  opacity: 1;
}
.middle {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.star-icon {
  display: inline-block;
  color: rgba(255, 255, 255, 0.3);
}

.star-rating {
  display: inline-block;
}

.star-rating div {
  cursor: pointer;
}

.star-rating div i {
  color: transparent;
  font-size: 1.5rem;
}

.star-rating div.active .star-icon {
  color: #ffc107 !important;
  fill: #ffc107 !important;
}
.star-icon:hover {
  color: rgba(255, 216, 100, 0.562);
}
</style>
