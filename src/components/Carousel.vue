<template>
  <section class="carousel">
    <div class="carousel-wrapper">
      <div
        class="carousel-left-arrow"
        @click="moveCarousel(-1)"
        :disabled="atHeadOfList"
      ></div>
      <div class="card-carousel">
        <div class="carousel-container">
          <h1>{{ title }}</h1>
          <div
            class="carousel-cards"
            :style="{ transform: 'translateX(' + currentOffset + 'px)' }"
          >
            <template v-for="movie in movies" v-if="movie.poster_path">
              <router-link :to="getMovieDetailsRoute(movie.id)">
                <div class="cards-carousel" :key="movie.id">
                  <img
                    class="carousel-img"
                    :src="getImageUrl(movie.poster_path)"
                    alt="Card Image"
                  />
                  <div class="cards-carousel-footer">
                    <h3 class="movie-title">{{ movie.title }}</h3>
                    <p>
                      <i class="star fa-solid fa-star"></i>
                      {{ movie.vote_average }}
                    </p>
                  </div>
                </div>
              </router-link>
            </template>
          </div>
        </div>
      </div>
      <div
        class="carousel-right-arrow"
        @click="moveCarousel(1)"
        :disabled="atEndOfList"
      ></div>
    </div>

  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    movies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      windowSize: 5,
      currentOffset: 0,
      paginationFactor: 370
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <
        this.paginationFactor * -1 * (this.movies.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    getMovieDetailsRoute(movieId) {
      return `/details/${movieId}`;
    },
    getImageUrl(posterPath) {
      return `http://image.tmdb.org/t/p/original/${posterPath}`;
    }
  }
};
</script>

<style scoped>
.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #ffffff;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 79vw;
}
.carousel-img {
  width: 350px;
  position: relative;
}

.carousel-img:hover + .cards-carousel-footer {
  opacity: 1;
}

.carousel-container {
  overflow: hidden;
}

.carousel-left-arrow,
.carousel-right-arrow {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  cursor: pointer;
  margin: 0 20px;
  transition: transform 150ms linear;
}

.carousel-left-arrow[disabled],
.carousel-right-arrow[disabled] {
  opacity: 0.2;
  border-color: black;
}

.carousel-left-arrow {
  transform: rotate(-135deg);
}

.carousel-left-arrow:active {
  transform: rotate(-135deg) scale(0.9);
}

.carousel-right-arrow {
  transform: rotate(45deg);
}

.carousel-right-arrow:active {
  transform: rotate(45deg) scale(0.9);
}

.carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translateX(0px);
}
.cards-carousel {
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

.cards-carousel:before {
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

.cards-carousel:hover:before {
  opacity: 1;
}

.cards-carousel-footer {
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

.cards-carousel:hover .cards-carousel-footer {
  opacity: 1;
}

.cards-carousel-footer h3 {
  margin: 0;
  margin-bottom: 2px;
  font-size: 36px;
  font-weight: 700;
  user-select: none;
}

.cards-carousel-footer p {
  margin: 0;
  font-size: 14px;
  user-select: none;
}
</style>
