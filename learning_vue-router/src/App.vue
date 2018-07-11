<template>
  <div id="app">
      <div class="container">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Routing</h1>
          <hr>
          <router-view name="header-top"></router-view>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
          <router-view name="header-bottom"></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  name: 'app',
  components: {
    appHeader: Header
  }
}
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s linear;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 1s linear;
    opacity: 0;
  }
</style>
