import FormDialog from './src/index'

/* istanbul ignore next */
FormDialog.install = function(Vue) {
  Vue.component(FormDialog.name, FormDialog)
}

export default FormDialog
