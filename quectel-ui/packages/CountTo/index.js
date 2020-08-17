import CountTo from './src/index'

/* istanbul ignore next */
CountTo.install = function(Vue) {
  Vue.component(CountTo.name, CountTo)
}

export default CountTo
