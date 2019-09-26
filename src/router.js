import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-smoothie',
      name: 'add-smoothie',
      component: () => import(/* webpackChunkName: "about" */ './views/ModifySmoothie.vue')
    },
    {
      path: '/edit-smoothie/:slug',
      name: 'edit-smoothie',
      component: () => import(/* webpackChunkName: "about" */ './views/ModifySmoothie.vue')
    }
  ]
})
