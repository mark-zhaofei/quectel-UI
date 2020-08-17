import InputTree from './src/index'

/* istanbul ignore next */
InputTree.install = function(Vue) {
  Vue.component(InputTree.name, InputTree)
}

export default InputTree
