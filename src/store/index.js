import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'

export default new Vuex.Store({
  state: {
    drawer: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
