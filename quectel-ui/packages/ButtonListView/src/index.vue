<template>
  <div>
    <span v-for="(item, index) in buttonList" :key="index" :class="align === 'left' ? 'marginRight' : 'marginLeft'">
      <el-dropdown v-if="item.dropdown && !item.hidden" :trigger="item.trigger || 'hover'" placement='bottom' :hide-on-click='false'>
        <el-button :type="item.type || 'primary'" :size="item.size || 'mini'" :icon="item.icon" @click="topBtnClick(item.func, item)" :plain='item.plain'>
          {{item.label}}
          <i v-if='item.icon' :class="(item.icon && String(item.icon) !== 'true') ? 'item.icon' : 'el-icon-arrow-down el-icon--right'" ></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" v-if="item.options && item.options.length" :disabled='item.disabled'>
          <span v-for="(child, cIndex) in item.options" :key="cIndex">
            <el-dropdown-item v-if="!child.hidden" :disabled='child.disabled'>
              <span @click="topBtnClick(child.func, child)">{{child.label}}</span>
            </el-dropdown-item>
          </span>
        </el-dropdown-menu>
      </el-dropdown>
      <el-badge v-else-if="!item.hidden" :max="item.badgeMax || 99" :value="item.badge" :class="item.badge ? 'item' : ''" :type="item.badgeType || 'primary'" :hidden='!item.badge' :is-dot='item.badgeDot'>
        <el-button :type="item.type || 'primary'" :size="item.size || 'mini'" :disabled='item.disabled' :icon="item.icon" @click="topBtnClick(item.func, item)" :plain='item.plain'>{{item.label}}</el-button>
      </el-badge>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ButtonListView',
  props: {
    align: {
      type: String,
      default: () => {
        return ''
      }
    },
    buttonList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    topBtnClick(func, child) {
      this.$emit('topBtnClick', func, child)
    }
  }
}
</script>

<style lang='scss' scoped>
// .left {
//   flex: 1;
//   @include flex-wrap;
//   > * {
//     margin: 0 5px 10px 5px;
//     float: left;
//   }
//   min-width: 200px;
// }
.marginRight{
  margin-right: 10px;
}
.marginLeft{
  margin-left: 10px;
}
.item{
  margin-right: 18px;
}
</style>
