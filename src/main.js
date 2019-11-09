import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'



import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader'


Vue.component('GshopHeader',GshopHeader)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
