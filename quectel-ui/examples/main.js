import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mixin from './mixins'

import './plugins/element.js'
import '../theme/index.css'
import '../element-variables.scss'
import './assets/styles/index.scss'

import QuectelUI from '../packages/index'
import i18n from './i18n'

// 全局filter
import filters from 'utils/filters'
Es6Promise.polyfill()

Vue.config.productionTip = false
Object.keys(filters).forEach(function(key) {
  Vue.filter(key, filters[key])
})

Vue.mixin(Mixin)
Vue.use(QuectelUI)

// new Vue({
//   el: '#app',
//   router,
//   store,
//   i18n,
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
