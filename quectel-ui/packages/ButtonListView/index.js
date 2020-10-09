import ButtonListView from './src/index.vue'

/* istanbul ignore next */
ButtonListView.install = function(Vue) {
  Vue.component(ButtonListView.name, ButtonListView)
}

export default ButtonListView
