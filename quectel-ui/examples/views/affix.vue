<style>
    body{
        /* height: 2000px; */
        overflow: auto;
    }
    .demo-affix{
        width: 100px;
        height: 30px;
        background: #f60;
        color: #fff
    }
</style>
<template>
<div style="overflow: auto; height: 100%">
  <div>123</div>
  <div>123</div>
  <div>123</div>
  <div>123</div>
  <div>123</div>
  <div>123</div>
  <!-- <div v-for="(i, index) in 10" :key="index">{{i}}</div> -->
    <q-Affix>
        <div class="demo-affix">固定在最顶部</div>
    </q-Affix>
    <div v-for="(item,index) in arr" :key="index">{{item}}</div>
</div>
</template>
<script>
    export default {
        data(){
            return {
                arr: []
            }
        },
        created(){
            for(let i = 0 ; i < 100 ; i++){
                this.arr.push(i);
            }
        }
    }
</script>
