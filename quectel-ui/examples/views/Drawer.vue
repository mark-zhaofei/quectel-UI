<template>
  <div>
    <div class="padding10">
      <el-button @click='drawerOption.visible = true'>打开 Drawer</el-button>
    </div>
    <!-- 抽屉 -->
    <q-drawer :option="drawerOption" @close='drawerOption.visible = false' :footerbutton='footerbutton' @btnClick='btnClick'>
      <div>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>1111</p>
        <p>33333</p>
      </div>
    </q-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return{
      drawerOption: {
        titleIcon: 'iconfont iconicon_bangzhuwendang',
        title: this.$t('message.turnPositFormTitle'),
        visible: true,
        wrapperClosable: true,
        size: '50%',
        direction: 'rtl'
      },
      footerbutton: [
        {label: '自定义按钮1', func: '1'},
        {label: '自定义按钮2', func: '2'},
        {label: '自定义按钮3', func: '3'},
        {label: '自定义按钮4', func: '4'}
      ]
    }
  },
  methods: {
    btnClick(func, item) {
      this.$message.success(item.label)
    }
  }
}
</script>

<style lang='scss' scoped>
.notGiveTips{
  padding: 10px;
  padding-left: 130px;
}
</style>
