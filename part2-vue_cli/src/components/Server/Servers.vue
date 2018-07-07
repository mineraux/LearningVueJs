<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <rm-server v-for="server in servers" :server="server" :key="server.id">
            </rm-server>
        </ul>
    </div>
</template>

<script>
    import rmServer from './Server.vue'

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Critical' },
                    { id: 3, status: 'Unknown' },
                    { id: 4, status: 'Normal' }
                ]
            }
        },
        components : {
            rmServer
        }
    }
</script>

<style>
</style>