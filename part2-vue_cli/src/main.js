import Vue from 'vue'
import App from './App.vue'

export const serverDetailsBus = new Vue({
  methods: {
    loadServerDetails(server) {
      this.$emit('loadServerDetails', server)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
