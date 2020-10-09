<template>
  <div>
    点击查看图片详情：
    <div class="Picture">
      <img v-picture='img' :src="img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: 'https://gw.alicdn.com/tfs/TB1JVUKfiDsXe8jSZR0XXXK6FXa-2880-1500.png'
    }
  }
}
</script>

<style lang='scss' scoped>
.Picture{
  padding: 40px;
  max-width: 400px;
  max-height: 400px;
  img{
    width: auto;
    height: auto;
    max-width: 400px;
  }
}
</style>
