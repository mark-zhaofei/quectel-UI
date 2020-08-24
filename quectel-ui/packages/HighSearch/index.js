import HighSearch from './src/index'

/* istanbul ignore next */
HighSearch.install = function(Vue) {
  Vue.component(HighSearch.name, HighSearch)
}

export default HighSearch
