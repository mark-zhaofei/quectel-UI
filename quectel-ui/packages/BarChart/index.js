import BarChart from './src/index'

/* istanbul ignore next */
BarChart.install = function(Vue) {
  Vue.component(BarChart.name, BarChart)
}

export default BarChart
