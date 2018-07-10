<template>
    <div>
        <h1>The User page</h1>
        <hr>
        <button @click.prevent="navigateToHome" class="btn btn-primary">Go to Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
</style>

