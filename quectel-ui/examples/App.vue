
<template>
    <div class="container">
        <ul class="ul">
            <li><router-link tag='span' to="/affix">Affix 吸顶组件</router-link></li>
            <li><router-link tag='span' to="/anchor">Anchor 锚点组件</router-link></li>
            <li><router-link tag='span' to="/split">Split 伸缩框组件</router-link></li>
            <li><router-link tag='span' to="/time">Time 时间组件</router-link></li>
            <li><router-link tag='span' to="/table">Table 表格组件</router-link></li>
            <li><router-link tag='span' to="/tabs">Tabs 标签页组件</router-link></li>
            <li><router-link tag='span' to="/dialog">Dialog 弹框组件</router-link></li>
            <li><router-link tag="span" to='/switch'>Switch 开关组件</router-link></li>
            <li><router-link tag="span" to='/tagsList'>tagsList 开关组件</router-link></li>
            <li><router-link tag="span" to='/Drawer'>Drawer 开关组件</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
<style lang="scss" scoped>
.ul{
  padding: 20px;
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