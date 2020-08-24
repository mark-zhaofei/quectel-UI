<template>
  <div class="padding10 tabs-container">
    <q-index-tabs :innerList="tabList"
                @tabClick='tabClick'
                @tabRemove="tabRemove"></q-index-tabs>
  </div>
</template>

<script>
import tableView from './table.vue'
export default {
  name: 'tabs',
/* eslint-disable */
  components: { tableView },
  data() {
    return {
      formData: {
        tabPosition: 'top',
        tabType: '', // 标签风格
        closable: false,
        stretch: false
      },
      tabList: [
        {
          label: this.$t('menu.tabs') + 1,
          name: 'one',
          disabled: false,
          render: (h) => {
            return h(tableView, { ref: 'one' })
          }
        },
        {
          label: this.$t('menu.tabs') + 2,
          name: 'two',
          disabled: false,
          render: (h) => {
            return h(tableView, { ref: 'two' })
          }
        },
        {
          label: this.$t('menu.tabs') + 3,
          name: 'three',
          disabled: false,
          render: (h) => {
            return h(tableView, { ref: 'three' })
          }
        }
      ]
    }
  },
  methods: {
    /* 标签点击*/
    tabClick(item) {
      this.$message.success(`您点击了标签【${item.name}】`)
    },
    /**
     * 标签删除
    */
    tabRemove(item) {
      this.$message.error(`您点击了标签【${item}】的删除按钮！`)
    }
  }
}
</script>

<style lang='scss' scoped>
.tabs-container{
  width: 100%;
  height: 100%;
}
</style>
