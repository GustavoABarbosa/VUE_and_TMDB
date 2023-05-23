<template>
  <div class="carousel">
    <div class="card-carousel-wrapper">
      <div
        class="card-carousel--navleft"
        @click="moveCarousel(-1)"
        :disabled="atHeadOfList"
      ></div>
      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <h1>Mais votados!</h1>
          <div
            class="card-carousel-cards"
            :style="{ transform: 'translateX(' + currentOffset + 'px)' }"
          >
            <div
              class="card-carousel--card"
              v-for="movie in movies"
              :key="movie.id"
            >
              <img
                class="carousel-img"
                v-bind:src="
                  'http://image.tmdb.org/t/p/w500/' + movie.poster_path
                "
                alt="Card Image"
              />
              <div class="card-carousel--card--footer">
                <h3 class="movie-title">{{ movie.title }}</h3>
                <!-- <p>{{ movie.overview }}</p>      //   PROPRIEDADE DA SINOPSE -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card-carousel--navright"
        @click="moveCarousel(1)"
        :disabled="atEndOfList"
      ></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
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
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.movies.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  mounted() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: { language: "pt-BR", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTgwZDdlODI2MTBjYmM1ZTZjZTIzNmYzYThkNTA4YyIsInN1YiI6IjY0NjdlYzQ4MzNhMzc2MDBlNjdhMDJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KgzWulpj53NgRmKU8A1pQ_PZ-uQS30NvOIitm7I4B9E"
      }
    };

    axios
      .request(options)
      .then(response => {
        this.movies = response.data.results;
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
<style scoped>
.carousel {
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 80vw;
}
.carousel-img {
  width: 400px;
  position: relative;
}

.carousel-img:hover + .card-carousel--card--footer {
  opacity: 1;
}

.card-carousel--overflow-container {
  overflow: hidden;
}

.card-carousel--navleft,
.card-carousel--navright {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  border-top: 2px solid #42b883;
  border-right: 2px solid #42b883;
  cursor: pointer;
  margin: 0 20px;
  transition: transform 150ms linear;
}

.card-carousel--navleft[disabled],
.card-carousel--navright[disabled] {
  opacity: 0.2;
  border-color: black;
}

.card-carousel--navleft {
  transform: rotate(-135deg);
}

.card-carousel--navleft:active {
  transform: rotate(-135deg) scale(0.9);
}

.card-carousel--navright {
  transform: rotate(45deg);
}

.card-carousel--navright:active {
  transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translateX(0px);
}
.card-carousel--card {
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
  position: relative;
}

.card-carousel--card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  border-radius: 4px;
}

.card-carousel--card:hover:before {
  opacity: 1;
}

.card-carousel--card--footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  color: rgb(255, 252, 252);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.card-carousel--card:hover .card-carousel--card--footer {
  opacity: 1;
}

.card-carousel--card--footer h3 {
  margin: 0;
  margin-bottom: 2px;
  font-size: 36px;
  font-weight: 700;
  user-select: none;
}

.card-carousel--card--footer p {
  margin: 0;
  font-size: 14px;
  user-select: none;
}
</style>
