import Cropper from './src/index'

/* istanbul ignore next */
Cropper.install = function(Vue) {
  Vue.component(Cropper.name, Cropper)
}

export default Cropper
