import VueRouter from 'vue-router';

// import Home from '/views/Home.vue'

import Home from './views/Home.vue';


import Details from './views/Details.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/details/:movieId', name: 'Details', component: Details },
]

const router = new VueRouter({
  mode: 'history', // Use 'history' mode for clean URLs
  routes,
})

export default router
