import Vue from 'vue'
import App from './App.vue'

export const quotesBus = new Vue({
  methods: {
    addQuote(quote) {
      this.$emit('addQuote', quote)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
