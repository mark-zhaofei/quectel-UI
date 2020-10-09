import Affix from './Affix/index.js'
import Anchor from './Anchor/index.js'
import AnchorLink from './AnchorLink/index.js'
import BarChart from './BarChart/index.js'
import Breadcrumb from './Breadcrumb/index.js'
import Calendar from './Calendar/index.js'
import CalendarItem from './CalendarItem/index.js'
import Charts from './Charts/index.js'
import CountTo from './CountTo/index.js'
import Cropper from './Cropper/index.js'
import EditView from './EditView/index.js'
import FormDialog from './FormDialog/index.js'
import FormTemplate from './FormTemplate/index.js'
import ButtonListView from './ButtonListView/index.js'
// import HeaderSearch from './HeaderSearch/index.js'
import IndexTabs from './IndexTabs/index.js'
import InputTree from './InputTree/index.js'
import NoData from './NoData/index.js'
import SelectTree from './SelectTree/index.js'
import Steps from './Steps/index.js'
import Tips from './Tips/index.js'
import TodoList from './TodoList/index.js'
import TreeList from './TreeList/index.js'
import Upload from './Upload/index.js'
import split from './split/index.js'
import Time from './Time/index.js'
import TagsList from './TagsList/index.js'
import SelectLazy from './SelectLazy/index.js'
import HighSearch from './HighSearch/index.js'
import Switch from './Switch/index.js'
import Popover from './Popover/index.js'
import draggable from 'vuedraggable'
import Drawer from './Drawer/index.js'

// directive
import Waves from './Waves/index.js'
import Picture from './Picture/index.js'
import Tooltip from './Tooltip/index.js'

const components = [
  BarChart,
  Breadcrumb,
  Calendar,
  CalendarItem,
  Charts,
  CountTo,
  Cropper,
  EditView,
  FormDialog,
  FormTemplate,
  ButtonListView,
  // HeaderSearch,
  IndexTabs,
  InputTree,
  NoData,
  SelectTree,
  Steps,
  Tips,
  TodoList,
  TreeList,
  Upload,
  Affix,
  Anchor,
  AnchorLink,
  split,
  Time,
  TagsList,
  SelectLazy,
  HighSearch,
  Switch,
  Popover,
  draggable,
  Drawer
]

const directive = [
  Waves,
  Picture,
  Tooltip
]

const install = function(Vue, opts = {}) {
  // locale.use(opts.locale)
  // locale.i18n(opts.i18n)

  components.forEach(component => {
    Vue.component(component.name, component)
  })
  directive.forEach(directive => {
    Vue.directive(directive.name, directive)
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
  BarChart,
  Breadcrumb,
  Calendar,
  CalendarItem,
  Charts,
  CountTo,
  Cropper,
  EditView,
  FormDialog,
  FormTemplate,
  ButtonListView,
  // HeaderSearch,
  IndexTabs,
  InputTree,
  NoData,
  SelectTree,
  Steps,
  Tips,
  TodoList,
  TreeList,
  Upload,
  Affix,
  Anchor,
  AnchorLink,
  split,
  Time,
  TagsList,
  SelectLazy,
  HighSearch,
  Switch,
  Popover,
  draggable,
  Drawer
}
