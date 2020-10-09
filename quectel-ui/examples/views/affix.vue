
<template>
<div>
  <div>123</div>
  <div>123</div>
  <div>123</div>
  <div>123</div>
  <div>123</div>
  <div>123</div>
  <!-- <div v-for="(i, index) in 10" :key="index">{{i}}</div> -->
    <q-Affix className='main' :offset-top="0">
        <div class="demo-affix">固定在最顶部</div>
    </q-Affix>
    <div v-for="(item,index) in arr" :key="index">{{item}}</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      arr: []
    }
  },
  created() {
    for(let i = 0; i < 100; i++) {
      this.arr.push(i)
    }
  }
}
</script>
<style lang="scss" scoped>
.demo-affix{
  padding: 10px;
  background: $--color-primary;
  color: $--color-white
}
</style>
