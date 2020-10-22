import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Greeting from '../views/Greeting.vue'
import Indoor from '../views/Indoor.vue'
import Come from '../views/Come.vue'
import AdminLogin from '../views/AdminLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/greeting',
    name: 'Greeting',
    component: Greeting
  },
  {
    path: '/indoor',
    name: 'Indoor',
    component: Indoor
  },
  {
    path: '/come',
    name: 'Come',
    component: Come
  },
  {
    path: '/admin',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '*',
    name: '404',
    component: Home
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
