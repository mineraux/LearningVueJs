<template>
    <div>
        <h3>Edit the user</h3>
        <p>Coord: {{ $route.query.latitude }}, {{ $route.query.longitude }}</p>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Helllllo boys</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            next()
        } else {
            if(confirm('Are you sure ?')) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>

<style scoped>
</style>

