import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import store from './store'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import moment from 'moment'

Vue.config.devtools = true
Vue.config.productionTip = false
Vue.prototype.$axios = axios

sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  moment,
  render: h => h(App),
}).$mount('#app')
