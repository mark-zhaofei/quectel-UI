import TagsList from './src/index'

/* istanbul ignore next */
TagsList.install = function(Vue) {
  Vue.component(TagsList.name, TagsList)
}

export default TagsList
