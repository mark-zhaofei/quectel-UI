import TreeList from './src/index'

/* istanbul ignore next */
TreeList.install = function(Vue) {
  Vue.component(TreeList.name, TreeList)
}

export default TreeList
