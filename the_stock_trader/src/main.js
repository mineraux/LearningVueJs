import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = "https://vuejs-stock-trader-66838.firebaseio.com/"

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes,
  store
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
