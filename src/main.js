import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
