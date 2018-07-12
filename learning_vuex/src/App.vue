<template>
  <div id="app">
    <div class="container">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <br>
        <app-another-counter></app-another-counter>
        <input type="text" v-model="value">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue'
  import AnotherCounter from './components/AnotherCounter.vue'
  import Result from './components/Result.vue'
  import AnotherResult from './components/AnotherResult.vue'
  import * as types from './store/types'

  export default {
    name: 'app',
    components: {
      appCounter: Counter,
      appAnotherCounter: AnotherCounter,
      appResult: Result,
      appAnotherResult: AnotherResult
    },
    computed: {
      value: {
        get() {
          return this.$store.getters[types.VALUE]
        },
        set(value) {
          this.$store.dispatch(types.UPDATE_VALUE, value)
        }
      }
    },
    methods : {
      updateValue(event) {
        this.$store.dispatch(types.UPDATE_VALUE, event.target.value)
      }
    }
  }
</script>

<style>
</style>