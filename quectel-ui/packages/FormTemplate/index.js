import FormTemplate from './src/index'

/* istanbul ignore next */
FormTemplate.install = function(Vue) {
  Vue.component(FormTemplate.name, FormTemplate)
}

export default FormTemplate
