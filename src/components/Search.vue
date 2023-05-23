<!--      /-/-/-/-/-/ TEMPLATE BELOW  /-/-/-/-/-/      -->
<template>
  <div class="show-movies">
    <div class="search-form">
      <b-form>
        <br />
        <b-input-group :prepend="prependText" v-if="showPrepend">
          <b-form-input
            id="search-movie"
            label="Pesquisar filme"
            placeholder="Seu filme favorito aqui!"
            label-size="lg"
            class="mb-2 mr-sm-2 mb-sm-0"
            type="text"
            v-model="query"
            @keyup="getResult(query)"
          />
        </b-input-group>
        <b-form-input
          id="search-movie"
          label="Pesquisar filme"
          placeholder="Pesquisar"
          label-size="lg"
          class="mb-2 mr-sm-2 mb-sm-0"
          type="text"
          v-model="query"
          @keyup="getResult(query)"
          v-else
        />
      </b-form>
    </div>
    <b-container>
      <b-row>
        <b-col
          v-on:click="showInfo()"
          class="movie-card d-flex flex-column m-2"
          v-for="result in results"
          :key="result.id"
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
      results: [],
      prependText: "Pesquisar",
      showPrepend: true
    };
  },
  mounted() {
    this.updatePrependVisibility();
    window.addEventListener("resize", this.updatePrependVisibility);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updatePrependVisibility);
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
    updatePrependVisibility() {
      this.showPrepend = window.innerWidth >= 708;
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
  margin: 0 5rem;
}
.search-form {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
#search-movie {
  width: 25rem;
  background-color: #e9ecef8f;
}
.movie-card {
  align-items: center;
  margin-top: 1rem;
  border: 1px solid #00000057;
  border-radius: 30px;
  font-size: 20px;
  height: 27rem;
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
