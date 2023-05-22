<!--      /-/-/-/-/-/ TEMPLATE BELOW  /-/-/-/-/-/      -->
<template>
  <div class="show_movies">
    <div>
      <b-form>
        <br />
        <b-input-group prepend="Pesquisar Filme">
          <b-form-input
            id="search-movie"
            label="Pesquisar filme"
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
          class="d-flex flex-column m-2"
          v-for="result in results"
          :key="result.id"
        >
          <img
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
            width="180px"
          />
          <br />
          <h5 class="text-center">{{ result.title }}</h5>
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
      results: ""
    };
  },
  methods: {
    getResult(query) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=4980d7e82610cbc5e6ce236f3a8d508c&query=" +
            query
        )
        .then(response => {
          this.results = response.data.results;
        });
      console.log(this.results);
    }
  }
};
</script>

<!--      /-/-/-/-/-/ STYLE BELOW  /-/-/-/-/-/      -->
<style>
.show_movies {
  margin: 0 5rem;
}

::-ms-clear {
  display: none;
}

.form-control-clear {
  z-index: 10;
  pointer-events: auto;
  cursor: pointer;
}
</style>
