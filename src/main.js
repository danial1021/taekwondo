import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(far)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.prototype.$http = axios

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common.Authorization = token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
