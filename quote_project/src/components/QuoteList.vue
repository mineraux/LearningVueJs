<template>
    <div class="row">
        <single-quote v-for="(quote, index) in quoteList" :key="index" @click.native="deleteQuote(index)">
            {{ quote }}
        </single-quote>
    </div>


</template>

<script>
    import singleQuote from './SingleQuote.vue'

    export default{
        props: ['quoteList'],
        components: {
            singleQuote
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index)
            }
        }
    }
</script>

<style scoped>
</style>

