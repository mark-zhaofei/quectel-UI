<template>
  <div class="edit-input relative">
    <div class="list-item">
      <div class="absolute color-subTitle">{{label + '：'}}</div>
      <div :style="{'padding-left': qt.tools.wordWidth(label)}">
        <div class="edit-panel">
          <!-- 文字和编辑按钮 -->
          <div v-show="!visible">
            <span class="edit-item inline-block relative pr4">
              <span>
                <slot name="content">{{name || '--'}}</slot>
              </span>
              <span v-show="editable" class="edit-btn absolute">
                <i class="el-icon-edit pointer color-link-hover h18" @click="edit"></i>
              </span>
            </span>
          </div>
          <!-- 取消确定图标 -->
          <div v-show="visible">
            <span class="inline-block">
              <slot name="input"></slot>
            </span>
            <span class="relative inline-block bg-gray bd height-title-mini" style="left: -5px">
              <span class="bd-right p1 pointer" @click="cancel">
                <i class="el-icon-close"></i>
              </span>
              <span class="p1 pointer" @click="sure">
                <i class="el-icon-check"></i>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QEditView',
  components: {
  },
  props: {
    length: {
      type: Number,
      default: 4
    },
    property: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    // 校验属性
    prop: {
      type: String,
      default: ''
    },
    // 校验表单数据
    form: {
      type: Object,
      default: () => {}
    },
    // 校验规则
    rules: {
      type: Object,
      default: () => {}
    },
    // 是否可编辑，默认为可编辑
    editable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    sure() {
      this.$emit('sure')
    },
    edit() {
      this.$emit('edit')
    }
  },
  mounted() {
  },
  watch: {
    visible() {
    }
  }
}
</script>

<style lang="scss">
.edit-input {
  .list-item {
    line-height: 28px;
    min-height: 28px;
    .edit-panel {
      .edit-item {
        line-height: 28px;
      }
      .edit-item:hover {
        .edit-btn {
          display: inline-block;
        }
      }
      .edit-btn {
        top: 0;
        right: 5px;
        display: none;
      }
      .el-form-item, .el-input, .el-select {
        width: 250px;
      }
      .el-input__inner {
        border-radius: 4px 0 0 4px;
      }
      .el-form-item {
        margin-bottom: 0;
      }
    }
  }
}
</style>
