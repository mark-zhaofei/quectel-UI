import IndexTabs from './src/index'

/* istanbul ignore next */
IndexTabs.install = function(Vue) {
  Vue.component(IndexTabs.name, IndexTabs)
}

export default IndexTabs
