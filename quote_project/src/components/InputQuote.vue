<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col_sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
                <h4>Quote</h4>
                <textarea rows="3" class="form-control" v-model="quote"></textarea>
                <button class="btn btn-primary" type="submit" @click.prevent="addQuote()">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    // import { quoteBus } from '../main.js' 

    export default{
        data: function() {
            return {
                quote: ''
            }
        },
        methods: {
            addQuote() {
                if(this.quote.length > 0) {
                    this.$emit("addQuote", this.quote)
                    this.quote = ""
                }
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin-top: 20px;
    }
</style>

