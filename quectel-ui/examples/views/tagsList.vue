<template>
  <div class="padding10">
    是否可拖拽: &nbsp;<el-switch v-model="isSort"></el-switch>
    <el-row>
      <el-col :span="12">
        <q-tags-list :isSort='isSort' maxHeight='100px' :list='tagsList' valueKey='name'></q-tags-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSort: true,
      tagsList: [
        { name: '姓名', closable: false, type: 'info', disabled: true },
        { name: '工号', closable: false, disabled: true },
        { name: '邮箱', closable: false },
        { name: '手机号', closable: false },
        { name: '司龄', closable: false },
        { name: '入职时间', closable: false }
      ]
    }
  }
}
</script>

<style>

</style>
