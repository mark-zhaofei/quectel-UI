
<template>
  <el-container class="container">
    <el-header class="header">
      <el-tabs v-model="activeIndex" type="border-card">
        <el-tab-pane name="affix"><router-link tag='span' to="/affix" slot="label">Affix 吸顶组件</router-link></el-tab-pane>
        <el-tab-pane name="split"><router-link tag='span' to="/split" slot="label">Split 伸缩框组件</router-link></el-tab-pane>
        <el-tab-pane name="time"><router-link tag='span' to="/time" slot="label">Time 时间组件</router-link></el-tab-pane>
        <el-tab-pane name="table"><router-link tag='span' to="/table" slot="label">Table 表格组件</router-link></el-tab-pane>
        <el-tab-pane name="tabs"><router-link tag='span' to="/tabs" slot="label">Tabs 标签页组件</router-link></el-tab-pane>
        <el-tab-pane name="dialog"><router-link tag='span' to="/dialog" slot="label">Dialog 弹框组件</router-link></el-tab-pane>
        <el-tab-pane name="switch"><router-link tag='span' to="/switch" slot="label">Switch 开关组件</router-link></el-tab-pane>
        <el-tab-pane name="tagsList"><router-link tag='span' to="/tagsList" slot="label">tagsList 开关组件</router-link></el-tab-pane>
        <el-tab-pane name="Drawer"><router-link tag='span' to="/Drawer" slot="label">Drawer 开关组件</router-link></el-tab-pane>
        <el-tab-pane name="noData"><router-link tag='span' to="/noData" slot="label">noData 暂无数据</router-link></el-tab-pane>
        <el-tab-pane name="charts"><router-link tag='span' to="/charts" slot="label">charts 图表</router-link></el-tab-pane>
        <el-tab-pane name="button"><router-link tag='span' to="/button" slot="label">button 按钮</router-link></el-tab-pane>
        <el-tab-pane name="progress"><router-link tag='span' to="/progress" slot="label">progress 进度条</router-link></el-tab-pane>
        <el-tab-pane name="pictureCrop"><router-link tag='span' to="/pictureCrop" slot="label">pictureCrop 图片剪裁</router-link></el-tab-pane>
        <el-tab-pane name="calendar"><router-link tag='span' to="/calendar" slot="label">calendar 日历</router-link></el-tab-pane>
        <el-tab-pane name="timeLine"><router-link tag='span' to="/timeLine" slot="label">timeLine 时间轴</router-link></el-tab-pane>
        <el-tab-pane name="steps"><router-link tag='span' to="/steps" slot="label">steps 步骤条</router-link></el-tab-pane>
        <el-tab-pane name="treeView"><router-link tag='span' to="/treeView" slot="label">treeView 树形控件</router-link></el-tab-pane>
        <el-tab-pane name="Tooltip"><router-link tag='span' to="/Tooltip" slot="label">Tooltip 自定义指令</router-link></el-tab-pane>
        <el-tab-pane name="Picture"><router-link tag='span' to="/Picture" slot="label">Picture 自定义指令</router-link></el-tab-pane>
        <el-tab-pane name="Waves"><router-link tag='span' to="/Waves" slot="label">Waves 自定义指令</router-link></el-tab-pane>
      </el-tabs>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 'affix'
    }
  },
  watch: {
    '$route': {
      deep: true,
      immediate: true,
      handler() {
        this.activeIndex = this.$route.name
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  @include fc();
  height: 100vh;
  // overflow: hidden;
  .header{
    height: 60px;
    width: 100%;
    overflow: hidden;
  }
  .main{
    flex: 1;
    overflow-y: auto;
    width: 100%;
    // background: red;
  }
}
.ul{
  padding: 20px;
  // background: red;
}
li{
  display: inline-block;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin: 10px;
  border-right: 1px solid #ccc;
  padding: 10px;
  color: red;
  cursor: pointer;
}
</style>
