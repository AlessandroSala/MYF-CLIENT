import Router from 'vue-router'
import Vue from 'vue'

import Home from './components/Home.vue'
import Operations from './components/Operations.vue'
import Investments from './components/Investments.vue'
import User from './components/User.vue'
import About from './components/About.vue'
import Tools from './components/Tools.vue'
import Statistics from './components/Statistics.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/operations',
      name: 'operations',
      component: Operations
    },
    {
      path: '/investments',
      name: 'investments',
      component: Investments
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})