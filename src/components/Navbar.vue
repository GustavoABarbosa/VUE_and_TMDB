<!--      /-/-/-/-/-/ TEMPLATE BELOW  /-/-/-/-/-/      -->
<template>
  <nav class="navbar">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <!--   Router aqui \/ \/ \/   -->
        <router-link to="/"
          ><a href="/" id="nav-logo"
            ><img src="../assets/new-logo-huggy-dark.svg" alt=""
          /></a> </router-link
      ></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="d-flex align-items-center">
            <b-nav-item href="#"
              ><b-button variant="danger" class="prim-btn" v-b-modal.login-modal
                >Fazer Login</b-button
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!--      /-/-/-/-/-/  LOGIN BELOW  /-/-/-/-/-/      -->
    <b-modal id="login-modal" hide-footer>
      <div class="text-center modal-form">
        <h3>Login</h3>
        <br /><br />
        <b-form class="text-left">
          <label for="form-input-email" required>E-mail:</label>
          <b-form-input
            id="form-input-email"
            class="mb-2 mr-sm-2 mb-sm-0"
          ></b-form-input>
          <br />
          <label for="form-input-password">Senha</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              type="password"
              name="password"
              minlength="8"
              required
              id="form-input-password"
            ></b-form-input> </b-input-group
          ><br />

          <b-form-checkbox
            type="submit"
            class="text-center mb-2 mr-sm-2 mb-sm-0"
            >Lembrar Login</b-form-checkbox
          ><br />
          <b-button id="forgot" v-b-modal.forgot-modal
            >Esqueci minha senha</b-button
          >
          <br />
          <br />
          <div class="text-center float-right">
            <b-button variant="info">Login</b-button>
            <b-button variant="secondary" v-b-modal.register-modal
              >Cadastrar</b-button
            >
          </div>
        </b-form>
      </div>
    </b-modal>

    <!--      /-/-/-/-/-/  REGISTER BELOW  /-/-/-/-/-/      -->
    <b-modal id="register-modal" hide-footer>
      <div class="text-center modal-form">
        <h3>Cadastro</h3>
        <br /><br />
        <b-form class="text-left">
          <label for="form-input-name" required>Nome</label>
          <b-form-input
            id="form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
          ></b-form-input>
          <br />
          <label for="form-input-name" required>E-mail</label>
          <b-form-input
            id="form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
          ></b-form-input>
          <br />
          <label for="form-input-name" required>Confirmar E-mail</label>
          <b-form-input
            id="form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
          ></b-form-input>
          <br />
          <label for="form-input-name" required>Senha</label>

          <b-form-input
            type="password"
            name="password"
            minlength="8"
            required
            id="form-input-password"
          ></b-form-input>
          <br />
          <label for="form-input-conf-password" required>Confirmar Senha</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              type="password"
              name="password"
              minlength="8"
              required
              id="form-input-conf-password"
            ></b-form-input> </b-input-group
          ><br />
          <div class="text-center float-right">
            <b-button variant="info" v-b-modal.register-modal
              >Cadastrar</b-button
            >
          </div>
        </b-form>
      </div>
    </b-modal>
    <!--      /-/-/-/-/-/  FORGOT PASSWORD BELOW  /-/-/-/-/-/      -->
    <b-modal id="forgot-modal" hide-footer>
      <div class="text-center modal-form">
        <h3>Recuperar conta</h3>
        <br /><br />
        <b-form class="text-left">
          <label for="form-input-email" required>E-mail</label>
          <b-form-input class="mb-2 mr-sm-2 mb-sm-0"></b-form-input>
          <br />
          <label for="form-input-email" required>Confirmar E-mail</label>
          <b-form-input class="mb-2 mr-sm-2 mb-sm-0"></b-form-input>
          <br />
          <div class="text-center float-right">
            <b-button variant="info">Enviar e-mail</b-button>
          </div>
        </b-form>
      </div>
    </b-modal>
  </nav>
</template>
<script>
import api from "../services/api";
export default {
  data() {
    return {
      movies: [],
      windowSize: 4,
      currentOffset: 0,
      paginationFactor: 450
    };
  },
  methods: {
    getMovieDetailsRoute(movieId) {
      return `/details/${movieId}`;
    },
    fetchMovies() {
      const movieId = this.$route.params.movieId;
      api
        .get(`/movie/${movieId}/similar`)
        .then(response => {
          this.movies = response.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
<!--      /-/-/-/-/-/ STYLE BELOW  /-/-/-/-/-/      -->
<style>
.navbar {
  background-color: #263645;
  width: 100%;
  margin: 0;
}
#nav-logo {
  margin-left: 20%;
}
.prim-btn {
  border-radius: 20px;
  padding: 0.5em 1.071em;
  font-weight: 400;
  transition: all 200ms;
}
.prim-btn:hover {
  background-color: #c3115a;
  border-color: #c3115a;
}
#nav-collapse {
  margin: 0 8rem 0 8rem;
}
.modal-form {
  color: #000 !important;
}
/* --      /-/-/-/-/-/ MOBILE MODIFICATIONS BELOW  /-/-/-/-/-/      */
@media (max-width: 708px) {
  #nav-logo {
    margin: 0;
  }
}
</style>
<!--      /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/      -->
