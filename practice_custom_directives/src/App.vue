<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <button v-customOn:click="clicked" class="btn btn-primary">Click me</button>
                <div style="width: 200px; height: 200px; background-color: lightcoral" v-customOn:mouseenter="mouseEntered" v-customOn:mouseleave="mouseLeft"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'customOn': {
                bind(el, binding, vnode) {
                    // el.onClick = function () {
                    //     binding.value()
                    // }
                    const type = binding.arg
                    const fn = binding.value
                    el.addEventListener(type, fn)
                }  
            }
        },
        methods: {
            clicked() {
                alert('Nice custom click listener directives !')
            },
            mouseEntered() {
                alert('Mouse enter !')
            },

            mouseLeft() {
                alert('Mouse left !')
            },
        }
    }
</script>

<style>

</style>
