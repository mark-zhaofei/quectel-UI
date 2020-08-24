<template>
  <el-select v-model="form[value]" size="mini" clearable filterable remote :remote-method="remoteMethod"
    :loading="loading" v-el-select-loadmore="loadmore" :form="form"
    :placeholder="placeholder" @change="change">
    <slot name="option">
      <el-option v-for="(item, index) of optData" :key="index" :label="item.label" :value="item[id]"></el-option>
    </slot>
  </el-select>
</template>
<script>
export default {
  name: 'QSelectLazy',
  directives: {
    'el-select-loadmore': {
      bind(el, binding) {
        // 获取element-ui定义好的scroll盒子
        const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
        SELECTWRAP_DOM.addEventListener('scroll', function() {
          /**
            * scrollHeight 获取元素内容高度(只读)
            * scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
            * clientHeight 读取元素的可见高度(只读)
            * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
            * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
            */
          const condition = this.scrollHeight - this.scrollTop <= this.clientHeight
          if (condition) {
            binding.value()
          }
        })
      }
    }
  },
  components: {},
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: ''
    },
    option: {
      type: Array,
      default: () => []
    },
    allData: {
      type: Array,
      default: () => []
    },
    form: {
      type: Object,
      default: () => {}
    },
    label: {
      type: String,
      default: 'name'
    },
    id: {
      type: String,
      default: 'userId'
    }
  },
  data() {
    return {
      loading: false,
      params: {
        pageSize: 10,
        pageNumber: 1
      },
      optData: [],
      allOptData: [],
      value: this.model
    }
  },
  computed: {
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.optData = this.allOptData.filter(item => {
            const name = item.label.toLowerCase()
            return name.indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.$emit('getData')
      }
    },
    loadmore() {
      this.params.pageSize = this.params.pageSize + 10
      this.$emit('getData', this.params)
    },
    change(val) {
      this.form[this.model] = val
      this.$emit('changeData', val)
    }
  },
  mounted() {
  },
  watch: {
    option: {
      handler(val) {
        this.optData = val
      },
      immediate: true,
      deep: true
    },
    allData: {
      handler(val) {
        this.allOptData = val
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="scss">
</style>
