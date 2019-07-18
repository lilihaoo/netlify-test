import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        home: Home
      },
      // redirect: '/home'
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: {
    //     home: Home
    //   },
    //   meta: {
    //     keepAlive: true
    //   }
    // },
    {
      path: '/about',
      name: 'about',
      // meta: {
      //   keepAlive: false
      // },
      components: {
        about: About
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // eslint-disable-next-line
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
