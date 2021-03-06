// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import constVal from './components/config/const'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.prototype.$constVal = constVal

Vue.use(Vuex)
Vue.use(VeeValidate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
