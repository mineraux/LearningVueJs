import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash){
      return { selector: to.hash }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
