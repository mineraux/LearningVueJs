<template>
    <div>
        <h3>Some user details</h3>
        <p>User loaded has ID : {{ $route.params.id }}</p>
        <router-link 
            tag="button" 
            :to="link" 
            class="btn btn-primary"
        >
            Edit user
            </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link : { 
                name: 'userEdit', 
                params: { 
                    id: this.$route.params.id 
                }, 
                query: { 
                    latitude: 100,
                    longitude: 200
                },
                hash: '#data'
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        if(true) {
            next()
        } else {
            next(false)
        }
        
    }
}
</script>

<style scoped>
</style>

