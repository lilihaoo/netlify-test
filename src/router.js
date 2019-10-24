import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
// import Editor from './views/Editor.vue'
// import ComponentsPassValue from './views/ComponentsPassValue.vue'

const ComponentsPassValue = () => import('./views/ComponentsPassValue.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'componentsPassValue',
      components: {
        ComponentsPassValue
      },
      meta: {
        keepAlive: true
      }
      // redirect: '/home'
    },
    {
      path: '/about',
      name: 'about',
      components: {
        home: About
      }
      // redirect: '/home'
    },
    // {
    //   path: '/editor',
    //   name: 'editor',
    //   components: {
    //     home: Editor
    //   }
    //   // redirect: '/home'
    // }
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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // meta: {
    //   //   keepAlive: false
    //   // },
    //   components: {
    //     about: About
    //   },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // eslint-disable-next-line
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
