import QBarChart from './BarChart/index.js'
import QBreadcrumb from './Breadcrumb/index.js'
import QCalendar from './Calendar/index.js'
import QCalendarItem from './CalendarItem/index.js'
import QCharts from './Charts/index.js'
import QCountTo from './CountTo/index.js'
import QCropper from './Cropper/index.js'
import QFormDialog from './FormDialog/index.js'
import QFormTemplate from './FormTemplate/index.js'
import QHeaderSearch from './HeaderSearch/index.js'
import QIndexTabs from './IndexTabs/index.js'
import QInputTree from './InputTree/index.js'
import QNoData from './NoData/index.js'
import QSelectTree from './SelectTree/index.js'
import QSteps from './Steps/index.js'
import QTips from './Tips/index.js'
import QTodoList from './TodoList/index.js'
import QTreeList from './TreeList/index.js'
import QUpload from './Upload/index.js'


const components = [
  QBarChart,
  QBreadcrumb,
  QCalendar,
  QCalendarItem,
  QCharts,
  QCountTo,
  QCropper,
  QFormDialog,
  QFormTemplate,
  QHeaderSearch,
  QIndexTabs,
  QInputTree,
  QNoData,
  QSelectTree,
  QSteps,
  QTips,
  QTodoList,
  QTreeList,
  QUpload,
]

const install = function(Vue, opts = {}) {
  // locale.use(opts.locale)
  // locale.i18n(opts.i18n)

  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$notify = Notification

  Vue.prototype.$QUECTEL_UI = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '2.13.2',
  install,
  QBarChart,
  QBreadcrumb,
  QCalendar,
  QCalendarItem,
  QCharts,
  QCountTo,
  QCropper,
  QFormDialog,
  QFormTemplate,
  QHeaderSearch,
  QIndexTabs,
  QInputTree,
  QNoData,
  QSelectTree,
  QSteps,
  QTips,
  QTodoList,
  QTreeList,
  QUpload
}
