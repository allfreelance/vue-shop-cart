import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueRouter)

import Vuex from 'vuex'
import { store } from './store/store'

Vue.use(Vuex)

const router = new VueRouter({
  routes: Routes
})

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
