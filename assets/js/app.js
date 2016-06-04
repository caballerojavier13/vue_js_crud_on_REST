import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from './route'

// Plug in the plugins
Vue.use(VueResource)

// Define a root component to represent the app
var App = Vue.extend({})

Vue.http.options.root = "http://localhost:8000/api/v1"

// Start the app
Router.start(App, '#app')