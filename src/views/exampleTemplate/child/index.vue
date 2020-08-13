<template>
  <div class="padding10">
    <el-button type="primary" @click="goPage('/401')">跳转 401</el-button>
    <el-button type="primary" @click="goPage('/403')">跳转 403</el-button>
    <el-button type="primary" @click="goPage('/404')">跳转 404</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    goPage(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>

</style>
