<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <!-- CSS animations -->
                <!-- <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show"> My info alert </div>
                </transition>

                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="show"> My info alert </div>
                </transition>

                <transition enter-active-class="animated bounce" leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show"> My info alert </div>
                </transition> -->

                <!-- <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info"> This is some info</div>
                    <div class="alert alert-warning" v-else key="warning"> This is some warning</div>
                </transition> -->
                
                <hr>
                <!-- JS animation -->

                <button class="btn btn-primary" @click="load = !load">Load / Relove Element</button>
                <br><br>

                <!-- :css = false because we don't need css class vuejs adds (using dynamic attribute because we need to pass a bolean not a string) -->
                <transition 
                    @before-enter="beforeEnter" 
                    @enter="enter" 
                    @after-enter="afterEnter" 
                    @enter-cancelled="enterCancelled" 
                    
                    @before-leave="beforeLeave" 
                    @leave="leave" 
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                >
                    <div style="width: 300px; height: 100px; background-color: lightcoral" v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary" 
                    @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"
                >
                    Toggle Components
                </button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li 
                            class="list-group-item" 
                            v-for="(number, index) in numbers" 
                            :key="number" 
                            @click="removeItem(index)" 
                            style="cursor:pointer"> 
                            {{ number }}
                        </li>
                    </transition-group>
                </ul>
                
                
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue'
    import SuccessAlert from './SuccessAlert.vue'

    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade',
                load: true,
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');

                this.elementWidth = 100
                el.style.width = this.elementWidth + 'px'
            },
            enter(el, done){
                console.log('enter')

                let round = 1
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px'
                    round ++

                    if ( round > 20) {
                        clearInterval(interval)

                        // We need to tell to VueJS when the animation is finished
                        // when we don't use css animation
                        done()
                    }
                }, 20)
            },
            afterEnter(el) {
                console.log('after enter')
            },
            enterCancelled(el) {
                console.log('enter cancelled')
            },
            beforeLeave(el) {
                console.log('before leave')

                this.elementWidth = 300
                el.style.width = this.elementWidth + 'px'
            },
            leave(el, done) {
                console.log('leave')
                
                let round = 1
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px'
                    round ++

                    if ( round > 20) {
                        clearInterval(interval)

                        // We need to tell to VueJS when the animation is finished
                        // when we don't use css animation
                        done()
                    }
                }, 20)
            },
            afterLeave(el) {
                console.log('after leave')
            },
            leaveCancelled(el) {
                console.log('leave cancelled')
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length)
                this.numbers.splice(pos, 0, this.numbers.length + 1)
            },
            removeItem(index) {
                this.numbers.splice(index, 1)
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity .5s ;
    }

    .fade-leave {
    }

    .fade-leave-active {
        transition: opacity .5s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in .5s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {
    }

    .slide-leave-active {
        animation: slide-out .5s ease-out forwards;
        transition: opacity .5s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform .5s 
    } 

    @keyframes slide-in {
        from {
            transform: translateY(20px)
        } 
        to {
            transform: translateY(0)
        }
    }

        @keyframes slide-out {
        from {
            transform: translateY(0)
        } 
        to {
            transform: translateY(20px)
        }
    }
</style>
