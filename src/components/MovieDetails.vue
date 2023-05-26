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
            ><h2 class="display-4">{{ movie.title }}</h2></b-col
          >
          <b-col class="right-info">
            <b-row>
              <b-col class="middle">
                <!-- Detalhes cetrais-->
                <p>Lançamento: {{ movie.release_date }}</p>
                <p>Nota: {{ movie.vote_average }}</p>
                <!-- Avaliação com LocalStorage-->
                <p>Avaliar filme:</p>
                <div class="star-rating">
                  <span
                    v-for="rating in 5"
                    :key="rating"
                    @click="selectRating(rating)"
                    :class="{ 'active': rating <= selectedRating }"
                  >
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <spam class="selected-count">Seu voto: {{ selectedRating }}</spam>
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
    selectRating(rating) {
      this.selectedRating = rating;
      localStorage.setItem(`movieRating_${this.movieId}`, this.selectedRating);
    },
    loadRating() {
      const storedRating = localStorage.getItem(`movieRating_${this.movieId}`);
      if (storedRating) {
        this.selectedRating = parseInt(storedRating);
      }
    }
  },
  watch: {
    movieId(){
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
}
#info-details {
  display: flex;
  flex-direction: column;
}
.middle {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.star-rating {
  display: inline-block;
}

.star-rating span {
  cursor: pointer;
}

.star-rating i {
  fill: transparent;
  font-size: 1.5rem;
}

.star-rating span i.active {
  fill: #ffc107;
}

.selected-count {
  margin-left: 10px;
  font-weight: bold;
}
</style>
