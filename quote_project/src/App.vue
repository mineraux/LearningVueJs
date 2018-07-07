<template>
    <div class="container">
        <progress-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></progress-bar>
        <input-quote @addQuote="addQuote"></input-quote>
        <quote-list :quoteList="quotes" @quoteDeleted="deleteQuote"></quote-list>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a quote to delete it !
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import progressBar from "./components/ProgressBar.vue"
    import inputQuote from "./components/InputQuote.vue"
    import quoteList from "./components/QuoteList.vue"

    export default {
        data: function(){
            return {
                quotes: [
                    "Nice quote tho !",
                    "An other nice quote mate !"
                ],
                maxQuotes: 10
            }
        },
        components: {
            progressBar,
            inputQuote,
            quoteList
        },
        methods: {
            addQuote(quote) {
                if(this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete a quote before add an other')
                }

                this.quotes.push(quote)
                console.log(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1)
            }
        }
    }
</script>

<style>
    .container {
        max-width: 1100px;
    }
</style>
