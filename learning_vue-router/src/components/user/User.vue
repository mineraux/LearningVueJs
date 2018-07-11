<template>
    <div>
        <h1>The User page</h1>
        <hr>
        <button @click.prevent="navigateToHome" class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push('/')
        }
    },
    // Setup a watcher to upload the user id
    //(in this case to access user page, the component is reloaded because we need to go from home page)
    // watch: {
    //     '$route'(to, from) {
    //         this.id = to.params.id
    //     }
    // }
}
</script>

<style scoped>
</style>

