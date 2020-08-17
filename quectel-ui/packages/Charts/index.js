import Charts from './src/index'

/* istanbul ignore next */
Charts.install = function(Vue) {
  Vue.component(Charts.name, Charts)
}

export default Charts
