import NoData from './src/index'

/* istanbul ignore next */
NoData.install = function(Vue) {
  Vue.component(NoData.name, NoData)
}

export default NoData
