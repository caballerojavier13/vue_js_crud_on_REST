import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './components/home.vue'
import UserListComponent from './components/users/user_list.vue'
import UserAddComponent from './components/users/user_add.vue'
import UserEditComponent from './components/users/user_edit.vue'

Vue.use(VueRouter)

// Create a router instance
var Router = new VueRouter({
    //history: true,
    //linkActiveClass: 'active'
})

// Define routes
Router.map({
    '/': {
        component: HomeComponent
    },
    '/users':{
        component: UserListComponent
    },
    '/users/add':{
        component: UserAddComponent
    },
    '/users/edit/:user_id':{
        component: UserEditComponent
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