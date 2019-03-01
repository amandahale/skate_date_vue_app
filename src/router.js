import Vue from 'vue'
import Router from 'vue-router'
import LocationsIndex from './views/LocationsIndex.vue'
import LocationsNew from './views/LocationsNew.vue'
import Signup from "./views/Signup.vue"
import Login from "./views/Login.vue"
import Logout from "./views/Logout.vue"

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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/locations/new',
      name: 'locations-new',
      component: LocationsNew
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
    }
  ]
})
