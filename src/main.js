import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueCookies)

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')

