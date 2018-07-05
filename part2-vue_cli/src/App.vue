<template>
    <div class="container">
        <rm-header></rm-header>
        <hr>
        <div class="row">
            <rm-servers></rm-servers>
            <rm-serverDetails></rm-serverDetails>
        </div>
        <hr>
        <rm-footer></rm-footer>
    </div>
</template>

<script>
    import rmHeader from './components/Shared/Header.vue'
    import rmFooter from './components/Shared/Footer.vue'
    import rmServers from './components/Server/Servers.vue'
    import rmServerDetails from './components/Server/ServerDetails.vue'

    export default {
        components : {
            rmHeader,
            rmFooter,
            rmServers,
            rmServerDetails
        }
    }
</script>

<style>

</style>
