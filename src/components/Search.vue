<!--      /-/-/-/-/-/ TEMPLATE BELOW  /-/-/-/-/-/      -->
<template>
  <div class="show-movies">
    <div class="search-form">
      <b-form>
        <br />
        <b-input-group>
          <b-form-input
            id="search-movie"
            label="Pesquisar filme"
            placeholder="Procurar filme"
            label-size="lg"
            class="mb-2 mr-sm-2 mb-sm-0"
            type="text"
            v-model="query"
            @keyup="getResult(query)"
          />
        </b-input-group>
      </b-form>
    </div>
    <b-container>
      <b-row>
        <b-col
          v-on:click="showInfo()"
          class="movie-card d-flex flex-column m-2"
          v-for="result in results"
          :key="result.id"
          @click="openMovieDetails(movie)"
        >
          <img
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
            class="img-size"
          />
          <br />
          <p class="text-center">{{ result.title }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<!--      /-/-/-/-/-/ SCRIPT BELOW  /-/-/-/-/-/      -->
<script>
import axios from "axios";

export default {
  name: "search",
  data() {
    return {
      query: "",
      results: []
    };
  },
  methods: {
    getResult() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=4980d7e82610cbc5e6ce236f3a8d508c&query=${this.query}`
        )
        .then(response => {
          this.results = response.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },
    openMovieDetails(movie){
      this.$emit('open-movie-details', movie);
    },
    showInfo(query) {
      this.query = query;
      this.getResult();
    }
  }
};
</script>

<!--      /-/-/-/-/-/ STYLE BELOW  /-/-/-/-/-/      -->
<style>
.show-movies {
  margin: 0;
  background-image: url(../assets/Background_1.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.search-form {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
#search-movie {
  width: 25rem;
  background-color: #0000007e;
  color: #ff0068;
  border: 1px solid #ff0068;
  border-radius: 20px;
  box-shadow: 0 0 10px #ff0068;
}
#search-movie::placeholder {
  color: #ff0068;
  opacity: 1;
}
.movie-card {
  align-items: center;
  margin-top: 1rem;
  font-size: 18px;
  height: 27rem;
  color: #fff;
  background: rgba(255, 0, 104, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 500ms;
}
.movie-card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.192);
}
.img-size {
  margin-top: 2rem;
  display: flex;
  width: 180px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
/* --      /-/-/-/-/-/ MOBILE MODIFICATIONS BELOW  /-/-/-/-/-/      */
@media (max-width: 708px) {
  #search-movie {
    width: 15rem;
  }
  .prepend-hide {
    display: none;
  }
}
</style>
