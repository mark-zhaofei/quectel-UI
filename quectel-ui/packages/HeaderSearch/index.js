import HeaderSearch from './src/index'

/* istanbul ignore next */
HeaderSearch.install = function(Vue) {
  Vue.component(HeaderSearch.name, HeaderSearch)
}

export default HeaderSearch
