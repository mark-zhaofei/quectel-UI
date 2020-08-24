import SelectLazy from './src/index'

/* istanbul ignore next */
SelectLazy.install = function(Vue) {
  Vue.component(SelectLazy.name, SelectLazy)
}

export default SelectLazy
