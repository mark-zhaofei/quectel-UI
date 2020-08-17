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
import * as filters from 'utils/filters'

Vue.config.productionTip = false
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.mixin(Mixin)
Vue.use(QuectelUI)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
