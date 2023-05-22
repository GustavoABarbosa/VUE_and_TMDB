<!--      /-/-/-/-/-/ TEMPLATE BELOW  /-/-/-/-/-/      -->
<template>
  <div class="navbar">
    <div>
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="#"
          ><a href="#"
            ><img
              id="nav-logo"
              src="../assets/new-logo-huggy-dark.svg"
              alt=""/></a
        ></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav class="d-flex align-items-center"
              ><div>
                <b-dropdown id="dropdown-1" text="Categorias" class="m-md-2">
                </b-dropdown>
              </div>
              <b-nav-item href=#>Cadastre-se</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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
template {
  margin: 0;
}
.navbar {
  width: 100vw;
  padding: 0.45rem;
  display: flex;
  flex-direction: row;
  background-color: #263645;
}
#nav-collapse {
  margin: 0 8rem 0 8rem;
}
.b-navbar-brand {
  margin-left: 10%;
}
</style>
<!--      /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/      -->
