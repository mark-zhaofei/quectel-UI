
import Anchor from './src/index'

/* istanbul ignore next */
Anchor.install = function(Vue) {
  Vue.component(Anchor.name, Anchor)
}

export default Anchor
