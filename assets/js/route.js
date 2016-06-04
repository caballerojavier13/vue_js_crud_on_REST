import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './components/pages/home.vue'

Vue.use(VueRouter)

// Create a router instance
var Router = new VueRouter({
    history: true,
    linkActiveClass: 'active'
})

// Define routes
Router.map({
    '/': {
        name: 'home',
        component: HomeComponent
    }
})

/*
Router.beforeEach(function (transition) {
    if (transition.to.auth && !Auth.user.authenticated) {
        transition.redirect('/account/login')
    } else if (transition.to.guest && Auth.user.authenticated) {
        transition.redirect('/')
    } else {
        transition.next()
    }
})
*/

module.exports = Router