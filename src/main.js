import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import VueAxios from './plugins/axios'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import './assets/scss/main.scss'

Vue.use(VueAxios)
Vue.config.productionTip = false
new Vue({
  axios,
  store,
  render: h => h(App),
}).$mount('#app')
