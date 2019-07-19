import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line
import router from './router'
import store from './store'
// import Permission from './permission'

// const per = new Permission(router)
// const config = {
//   requestUrl: 'http://2.35.28.145',
//   client_id: 'csxt',
//   client_secret: '0deb8f86c153858c5607e5cdeba94bec'
// }
// per.init(config)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
