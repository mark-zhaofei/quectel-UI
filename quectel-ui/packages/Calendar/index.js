import Calendar from './src/index'

/* istanbul ignore next */
Calendar.install = function(Vue) {
  Vue.component(Calendar.name, Calendar)
}

export default Calendar
