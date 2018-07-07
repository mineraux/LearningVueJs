import Vue from 'vue'
import App from './App.vue'

// Declare the mixin globally (don't do that, not performant at all but if you want to, this is how to do)
Vue.mixin({
  created() {
    console.log('Global Mixin - Created hook tho');
    
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
