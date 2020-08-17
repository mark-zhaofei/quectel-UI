import TodoList from './src/index'

/* istanbul ignore next */
TodoList.install = function(Vue) {
  Vue.component(TodoList.name, TodoList)
}

export default TodoList
