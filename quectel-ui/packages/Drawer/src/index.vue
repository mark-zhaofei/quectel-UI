<template>
  <div class="q-drawer">
    <el-drawer
      :append-to-body='option.appendToBody'
      :size="option.size"
      :modal="String(option.modal) === 'false' ? false : true"
      :modal-append-to-body="option.modalToBody"
      :visible.sync="option.visible"
      :direction="option.direction"
      :before-close="handleClose"
      :show-close='false'
      :wrapperClosable='option.wrapperClosable'
      @open='open'
      @opened='opened'
      @close='handleClose'>
      <div slot="title">
        <div class="q-drawer-header">
          <div class="left">
            <i :class="option.titleIcon"></i> {{option.title}}
          </div>
          <div class="right" v-if="String(option.showClose) === 'false' ? false : true">
            <i class="iconfont iconiconddgb" @click="handleClose"></i>
          </div>
        </div>
      </div>
      <div class="drawer-container">
        <div class="drawer-content">
          <slot></slot>
        </div>
        <div class="drawer-footer" v-if="footer">
          <slot name="footer"></slot>
          <div>
          <span v-for="(item, index) in footerbutton" :key="index" class="btnItem">
            <el-dropdown v-if="item.dropdown && !item.hidden" :trigger="item.trigger || 'hover'" placement='top' :hide-on-click='false'>
              <el-button :type="item.type || 'primary'" :size="item.size || 'mini'" :icon="item.icon" @click="btnClick(item.func, item)">
                {{item.label}}
                <i v-if='item.icon' :class="(item.icon && String(item.icon) !== 'true') ? 'item.icon' : 'el-icon-arrow-down el-icon--right'" ></i>
              </el-button>
              <el-dropdown-menu slot="dropdown" v-if="item.options && item.options.length">
                <el-dropdown-item v-for="(child, cIndex) in item.options" :key="cIndex">
                  <span @click="btnClick(child.func, child)">{{child.label}}</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button v-else-if="!item.hidden" :type="item.type || 'primary'" :size="item.size || 'mini'" :icon="item.icon" @click="btnClick(item.func, item)">{{item.label}}</el-button>
          </span>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'QDrawer',
  props: {
    footer: { // 是否显示底部
      type: Boolean,
      default: () => {
        return true
      }
    },
    footerbutton: {
      type: Array,
      default: () => {
        return []
      }
    },
    option: { // 一些配置
      type: Object,
      default: () => {
        return {
          // direction          打开反向 ltr：从左往右开  rtl：从右往左开  ttb：从上往下开  btt：从下往上开
          // modal              是否显示遮罩
          // withHeader         是否显示标题
          // title              标题
          // visible            显示隐藏
          // showClose          是否显示关闭按钮
          // size               大小  100  /  %
          // wrapperClosable    点击遮罩层是否可关闭
          // titleIcon          标题图标
        }
      }
    }
  },
  methods: {
    // 关闭前回调
    handleClose() {
      this.$emit('close')
    },
    // 打开的回调
    open() {
      this.$emit('open')
    },
    // 打开动画结束时的回调
    opened() {
      this.$emit('opened')
    },
    // 点击自定义按钮
    btnClick(func, item) {
      this.$emit('btnClick', func, item)
    }
  }
}
</script>

<style lang='scss' scoped>
.q-drawer{
  /deep/.el-drawer{
    .el-drawer__body{
      overflow: hidden;
    }
    .el-drawer__header{
      padding: 0;
      margin: 0;
    }
  }
  /deep/.ltr{
    border-radius: 0 20px 20px 0;
  }
  /deep/.ttb{
    border-radius: 0 0 20px 20px;
  }
  /deep/.btt{
    border-radius: 20px 20px 0 0;
  }
  /deep/.rtl{
    border-radius: 20px 0 0 20px;
  }
  .q-drawer-header{
    @include fj;
    align-items: center;
    padding: 8px 20px;
    color: $--color-white;
    font-size: $--text-16;
    font-weight: 550;;
    background: linear-gradient(to right, $--color-primary, $--color-success);
    background-image: -webkit-linear-gradient(90deg,$--color-primary 0%,$--color-success 100%);
    background-image: -moz-linear-gradient(90deg,$--color-primary 0%,$--color-success 100%);
    background-image: -o-linear-gradient(90deg,$--color-primary 0%,$--color-success 100%);
    box-shadow:  0 0 15px rgba(0, 0, 0, 0.2);
    .left{
      flex: 1;
      i{
        font-size: $--text-18;
        margin-right: 8px;
      }
    }
    .right{
      width: 80px;
      text-align: right;
      i{
        font-size: $--text-24;
        cursor: pointer;
      }
    }
  }
  .drawer-container{
    @include fc(flex-start);
    height: 100%;
    overflow: hidden;
    .drawer-content{
      flex: 1;
      width: 100%;
      overflow-y: auto;
      padding: 20px;
    }
    .drawer-footer{
      @include fj(flex-end);
      align-items: center;
      height: 60px;
      width: 100%;
      padding: 0 20px;
      box-shadow:  0 0 10px rgba(0, 0, 0, 0.07);
      .btnItem{
        margin-left: 10px;
      }
      // background: red;
    }
  }
}
</style>
