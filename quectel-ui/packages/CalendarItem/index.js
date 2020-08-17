import CalendarItem from './src/index'

/* istanbul ignore next */
CalendarItem.install = function(Vue) {
  Vue.component(CalendarItem.name, CalendarItem)
}

export default CalendarItem
