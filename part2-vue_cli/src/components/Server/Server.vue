<template>
    <li class="list-group-item" @click="loadServerDetails">
        Server #{{ server.id }}
        Server Status : {{ server.status }}
    </li>
</template>

<script>
    import { serverDetailsBus } from '../../main.js'

    export default {
        props: ['server'],
        methods: {
            loadServerDetails(){
                serverDetailsBus.loadServerDetails(this.server)
            }
        }
    }
</script>

<style>
</style>

