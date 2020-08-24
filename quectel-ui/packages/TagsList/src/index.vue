<template>
  <div>
    <slot name='top'></slot>
    <div class="tagsList">
      <div class="left" v-if="label" :style="{width: labelWidth || '120px', 'text-align': labelPosition}">
        {{label}} ：
      </div>
      <div class="right">
        <div class="tagsTop" :style="{'max-height': maxHeight}">
          <el-tag class="tagItem" v-for="(item, index) in list" :key="index" :closable="String(item.closable) === 'false' ? false : true" :type="item.type" @click="click(item, index)" @close="close(item, index)">{{item[valueKey]}}</el-tag>
        </div>
        <div class="tagsBottom" v-if="add">
         <slot name="add"></slot>
        </div>
      </div>
    </div>
    <slot name='bottom'></slot>
  </div>
</template>

<script>
export default {
  name: 'QTagsList',
  props: {
    maxHeight: { // 已选标签最大高度
      type: String,
      default: () => {
        return '120px'
      }
    },
    label: { // 已选标签label
      type: String,
      default: () => {
        return '已选择修改项'
      }
    },
    labelWidth: { // 标签宽度
      type: String,
      default: () => {
        return '120px'
      }
    },
    labelPosition: { // 标签对齐方式
      type: String,
      default: () => {
        return 'right'
      }
    },
    list: { // 标签列表
      type: Array,
      default: () => {
        return []
      }
    },
    add: { // 是否支持新增tags
      type: Boolean,
      default: () => {
        return false
      }
    },
    valueKey: { // 标签名称Key
      type: String,
      default: () => {
        return 'name'
      }
    }
  },
  methods: {
    click(item, index) {
      this.$emit('click', item, index)
    },
    close(item, index) {
      this.$emit('close', item, index)
    }
  }
}
</script>

<style lang='scss' scoped>
.tagsList{
  @include fj(flex-start);
  padding-bottom: 20px;
  .left{
    width: 120px;
  }
  .right{
    @include fc(flex-start);
    align-items: flex-start;
    flex: 1;
    background: $--color-bg;
    overflow: hidden;
    .tagItem{
      margin-right: 10px;
      margin-bottom: 8px;
    }
    .tagsTop{
      flex: 1;
      text-align: left;
      padding: 10px;
      overflow-y: auto;
    }
    .tagsBottom{
      width: 100%;
      height: 40px;
      box-shadow:inset 0px 15px 10px -15px rgba(0,0,0,0.1);
    }
  }
}
</style>
