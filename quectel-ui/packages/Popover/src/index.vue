<template>
  <div>
    <el-popover
      :disabled='disabled'
      :placement="option.placement || 'top'"
      :title="option.title"
      :width="option.popoverWidth || '200'"
      :trigger="option.trigger || 'hover'">
      <!-- 弹出框内容显示表格 -->
      <div v-if="option.table">
        <q-form-template :innerObj='innerObj' height='300px'></q-form-template>
      </div>
      <!-- 弹出框内容显 render 内容 -->
      <div v-else-if="option.render">
        <render-view :render='option.render'
                     :row="scope.row"
                     :index="scope.$index"></render-view>
      </div>
      <!-- 弹出框内容显示列表 -->
      <div v-else-if="isArray(scope.row[option.content])">
        <el-row v-for="(content, c) in scope.row[option.content]" :key="c" class="contentItem">
          <el-col :span="12">{{scope.row[content.label]}}: </el-col>
          <el-col :span="12">{{scope.row[content.prop]}}</el-col>
        </el-row>
      </div>
      <!-- 弹出框内容显示对象 -->
      <div v-else-if="isObject(scope.row[option.content])">
        {{scope.row[option.content]}}
      </div>
      <!-- 弹出框内容是字符串 -->
      <div v-else class="text-center">{{scope.row[option.content]}}</div>
      <div slot="reference">
        <slot></slot>
        <el-button v-if="option.popoverType === 'button'" size="mini">{{scope.row[text] | noString}}</el-button>
        <el-link v-if="option.popoverType === 'link'" size="mini">{{scope.row[text] | noString}}</el-link>
        <span v-else size="mini" class="pointer font12 color-primary">{{scope.row[text] | noString}}</span>
      </div>
    </el-popover>
  </div>
</template>

<script>
import format from 'utils/format'
export default {
  name: 'QPopover',
  props: {
    text: {
      type: String,
      default: () => {
        return this.$t('message.view')
      }
    },
    disabled: {
      type: [Boolean, Function],
      default: () => {
        return false
      }
    },
    option: {
      type: Object,
      default: () => {
        return {}
      }
    },
    content: null,
    scope: null
  },
  data() {
    return {
      innerObj: {
        tableData: {
          dataBody: [],
          dataHead: []
        }
      }
    }
  },
  created() {
    if(this.option.table) {
      this.innerObj.tableData.dataBody = this.scope.row[this.option.table.data]
      this.innerObj.tableData.dataHead = this.option.table.column
    }
  },
  methods: {
    isArray(obj) {
      return format.isArray(obj)
    },
    isObject(obj) {
      return format.isObject(obj)
    }
  },
  components: {
    renderView: {
      functional: true,
      props: {
        row: Object,
        render: Function,
        index: Number
      },
      render: (h, ctx) => {
        const params = ctx.props.row
        const index = ctx.props.index
        return ctx.props.render(h, params, index)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.contentItem{
  padding: 4px;
  border-bottom: 1px solid $--color-gray-e;
}
</style>
