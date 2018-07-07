<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-full-name v-model="userData.fullName"></app-full-name>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" id="email" class="form-control" v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="Password">Password</label>
                        <input type="text" id="Password" class="form-control" v-model="userData.password">
                    </div>

                    <div class="form-group">
                        <span>Allow us to store your data ?</span>
                        <label for="yes">
                            <input type="radio" id="yes" value="Yes" v-model="canDataBeStored"> Yes
                        </label>
                        <label for="no">
                            <input type="radio" id="no" value="No" v-model="canDataBeStored"> No
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName}}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ canDataBeStored }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'
    export default {
        data() {
            return {
                userData: {
                    fullName: ' Robin Minervini',
                    email:'',
                    password:''
                },
                canDataBeStored: "No",
                isSubmitted: false
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
