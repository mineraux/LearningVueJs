<template>
    <div>
        <h3>Some user details</h3>
        <p>User loaded has ID : {{ $route.params.id }}</p>
        <router-link 
            tag="button" 
            :to="{ 
                name: 'userEdit', 
                params: { id: $route.params.id }, 
                query: { latitude: 100, longitude: 200 }
            }" 
            class="btn btn-primary"
        >
            Edit user
            </router-link>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>

