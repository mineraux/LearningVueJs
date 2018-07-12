<template>
  <div id="app">
    <div class="container">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <hr>
        <app-counter></app-counter>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue'
  import Result from './components/Result.vue'
  import AnotherResult from './components/AnotherResult.vue'

  export default {
    name: 'app',
    components: {
      appCounter: Counter,
      appResult: Result,
      appAnotherResult: AnotherResult
    }
  }
</script>

<style>
</style>