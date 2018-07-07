<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">No server selected</p>
        <div v-else>
            <p>Server {{ server.id }}</p>
            <p>Status : {{ server.status }}</p>
            <button @click="changeServerStatus">Set server {{ server.id }} status to 'Normal'</button>
        </div>
        
    </div>
</template>

<script>
    import { serverDetailsBus } from '../../main.js'

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
            changeServerStatus() {
                this.server.status = 'Normal'
            }
        },
        created(){
            serverDetailsBus.$on('loadServerDetails', (server) => {
                this.server = server
            })
        }
    }
</script>
            
<style>
</style>
            