import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from "@bcwdev/auth0-vue"
import activeShip from "../views/ActiveShip"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ship/:id',
      name: 'active-ship',
      component: activeShip
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})