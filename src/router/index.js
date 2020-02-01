import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Artworks from '../views/Artworks.vue'
import About from '../views/About.vue'
import Detail from '../views/Detail.vue'
import PostArtwork from '../views/PostArtwork.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/artworks',
    name: 'artworks',
    component: Artworks
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/artworks/:id',
    name: 'art_detail',
    component: Detail
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/post-artwork',
    name: 'post-artwork',
    component: PostArtwork,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('post-artwork');
  else next();
});

export default router
