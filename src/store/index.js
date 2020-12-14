import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'

export default new Vuex.Store({
  state: {
    drawer: null,
    status: '',
    token: localStorage.getItem('token') || ''
  },

  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token) {
      state.status = 'success'
      state.token = token
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    }
  },

  actions: {
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: '/user/login', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            console.log(user.id)
            console.log(user.name)
            localStorage.setItem('token', token)
            axios.defaults.headers.common.Authorization = token
            commit('auth_success', { token })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },

    logout ({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common.Authorization
        resolve()
      })
    }
  },

  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    getToken: state => state.token
  },

  modules: {
  }
})
