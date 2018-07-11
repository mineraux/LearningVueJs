import Home from './components/Home.vue'
import Header from './components/Header.vue'

// Normal import
// import User from './components/user/User.vue'
// import UserStart from  './components/user/UserStart.vue'
// import UserEdit from './components/user/UserEdit.vue'
// import UserDetails from './components/user/UserDetails.vue'

// Lazyly loading routes
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user')
}

// 'user' is a group name to load several file on the same call (instead of splitting the loading of every vue file)
// Here we will have 1 call with User.vue and UserStart.vue loaded at the same time and UserEdit and UserDetails
// loaded when we need each of them 

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    })
}

const UserDetails = resolve => {
    require.ensure(['./components/user/UserDetails.vue'], () => {
        resolve(require('./components/user/UserDetails.vue'))
    })
}

export const routes = [
    { path: '', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        {  path: '', component: UserStart },
        {  path: ':id', component: UserDetails, beforeEnter: (toolbar, from, next) => {
            next()
        } },
        {  path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ] },
    { path: '/redirect-me', redirect: '/user' },
    { path: '*', redirect: '/' }
]