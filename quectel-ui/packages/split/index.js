
import Split from './src/index'

/* istanbul ignore next */
Split.install = function(Vue) {
  Vue.component(Split.name, Split)
}

export default Split
