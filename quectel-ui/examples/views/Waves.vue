<template>
  <div class="Waves">
    <div class="exampleDiv">
      <div class="title h3">水波纹按钮</div>
      <el-button v-waves>Button</el-button>
      <el-button type="primary" v-waves>Button</el-button>
      <el-button type="success" v-waves>Button</el-button>
      <el-button type="info" v-waves>Button</el-button>
      <el-button type="warning" v-waves>Button</el-button>
      <el-button type="danger" v-waves>Button</el-button>
    </div>
    <div class="exampleDiv">
      <div class="title h3">水波纹区域</div>
      <div v-waves class="WavesDiv">container</div>
      <div v-waves="{color: '#2ab1e8'}" class="WavesDiv">设置水波纹样式</div>
      <div v-waves="{type: 'center'}" class="WavesDiv">水波纹始终从中间扩散</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.Waves{
  padding: 40px;
}
.WavesDiv{
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}
.waves{
  display: inline;
  padding: 10px;
  background: red;
  color: #fff;
}
</style>
