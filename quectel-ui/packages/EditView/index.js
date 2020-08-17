import QEditView from './src/index'

/* istanbul ignore next */
QEditView.install = function(Vue) {
  Vue.component(QEditView.name, QEditView)
}

export default QEditView
