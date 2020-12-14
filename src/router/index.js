// module
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from '../store'

// components
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Greeting from '../views/Greeting.vue'
import Indoor from '../views/Indoor.vue'
import Come from '../views/Come.vue'
import AdminLogin from '../views/AdminLogin.vue'
import test from '../views/test.vue'

const requireAuth = (to, from, next) => {
  axios.post('/token/verify', { token: store.state.token })
    .then(resp => {
      const tokenVal = resp.data.success
      console.log(tokenVal)
      if (tokenVal === true) return next()
      else { // false
        store.dispatch('logout')
          .then(() => {
            next('/admin')
          })
        console.log(store.getters.isAuthenticated)
      }
    })
    .catch(err => {
      console.log(err.message)
    })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // 로그인 여부에 따른 페이지 접속 테스트
    path: '/test',
    name: 'test',
    component: test,
    beforeEnter: requireAuth
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
