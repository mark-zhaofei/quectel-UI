
// import Vue from 'vue'
import './picture.css'
import { MessageBox } from 'element-ui'
function handleClick(el, binding) {
  function handle() {
    const img = `<img src=${binding.value}>`
    MessageBox({
      title: ' ',
      customClass: 'messageImgBox',
      center: true,
      dangerouslyUseHTMLString: true,
      message: `<div class='messageImg'>${img}</div>`,
      showCancelButton: false,
      showConfirmButton: false
    })
  }
  return handle
}

export default {
  name: 'Picture',
  bind(el, binding) {
    el.addEventListener('click', handleClick(el, binding), false)
  }
}
