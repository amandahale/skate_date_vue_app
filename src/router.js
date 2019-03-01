import Vue from 'vue'
import Router from 'vue-router'
import Signup from "./views/Signup.vue"
import Login from "./views/Login.vue"
import Logout from "./views/Logout.vue"
import LocationsIndex from './views/LocationsIndex.vue'
import LocationsShow from './views/LocationsShow.vue'
import LocationsNew from './views/LocationsNew.vue'
import LocationsEdit from './views/LocationsEdit.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'locations-index',
      component: LocationsIndex
    },
    { 
      path: "/signup", 
      name: "signup", 
      component: Signup 
    },
    { 
      path: "/login", 
      name: "login", 
      component: Login 
    },
    { 
      path: "/logout", 
      name: "logout", 
      component: Logout 
    },
    {
      path: '/locations/:id',
      name: 'locations-show',
      component: LocationsShow
    },
    {
      path: '/locations/new',
      name: 'locations-new',
      component: LocationsNew
    },
    {
      path: '/locations/:id/edit',
      name: 'locations-edit',
      component: LocationsEdit
    },

  ]
})
