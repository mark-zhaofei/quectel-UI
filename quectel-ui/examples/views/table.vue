<template>
  <div class="padding10 container">
    <q-form-template :inner-obj='innerObj'
                    height='600px'
                    :tableSort='tableSort'
                    ref="template"
                    :treeCheck='treeCheck'
                    @treeCheckChange='treeCheckChange'
                    @treecheckHead='treecheckHead'
                    @add='add'
                    @searchData='searchData'
                    @topBtnClick="topBtnClick">
      <q-high-search slot="dialogs" ref="high"></q-high-search>
    </q-form-template>
  </div>
</template>

<script>
export default {
  name: 'tableView1',
  data() {
    return {
      tableSort: false,
      treeCheck: {
        check: { check: true, indeterminate: true }
      },
      innerObj: { // 表格需要的参数
        add: true,
        buttonAlign: 'right',
        highFilter: true,

        highList: [],
        pageTitle: '123',
        buttonList: [
          { type: ' ', label: '其他按钮', func: '1' },
          { type: ' ', label: '带icon', icon: 'el-icon-grape', func: '2' }
        ],
        formList: [
          {
            formType: 'input',
            bind: 'key',
            type: 'text',
            clearable: true,
            prefixIcon: 'el-icon-search'
          }, {
            formType: 'select',
            bind: 'select',
            options: [{ label: 1, value: 1 }, { label: 2, value: 2 }]
          }, {
            formType: 'date',
            bind: 'date'
          }, {
            formType: 'cascader',
            bind: 'cascader',
            options: [
              { label: 1, value: 1, children: [{ label: 2, value: 2 }] },
              { label: 2, value: 2 }
            ]
          }
        ],
        tableData: {
          options: {
            rowKey: 'id',
            tableFormRef: 'tableFormRef',
            ref: '22ref',
            showHeader: false,
            // indexType: 'index',
            expandAll: true,
            spanKey: ['steps', 'name'],
            page: true,
            mergeTable: false,
            editDataHead: true
          },
          footerButtomList: [
            { type: 'primary', label: '其他按钮', func: '1' },
            { type: 'danger', label: '带icon', icon: 'el-icon-grape', func: '2' },
            { dropdown: true, type: 'text', icon: 'el-icon-more', options: [
              { type: 'primary', label: '其他按钮', func: '1' }]
            }
          ],
          dataBody: [{
            id: '2',
            name: 'cedfcerferve',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            check: true,
            switch: 'Y',
            chekboxValue: [],
            data: [
              { name: '123' },
              { name: '123' },
              { name: '123' },
              { name: '123' },
              { name: '123' },
              { name: '123' },
              { name: '123' },
              { name: '123' },
              { name: '123' }
            ],
            steps: 2,
            children: [
              { id: 21,
                check: true,
                name: '',
                img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
                rate: 2,
                switch: 'Y',
                data: [
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' }
                ],
                chekboxValue: [],
                steps: 2 },
              { id: 22,
                name: '',
                img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
                rate: 2,
                switch: 'Y',
                check: true,
                chekboxValue: [],
                data: [
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' }
                ],
                steps: 2 }
            ]
          }, {
            id: 3,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y',
            steps: 2,
            check: true,
            chekboxValue: [],
            children: [
              { id: 31,
                name: '11',
                check: true,
                img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
                rate: 2,
                switch: 'Y',
                data: [
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' }
                ],
                steps: 2, chekboxValue: [] },
              { id: 32,
                name: '11',
                check: true,
                img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
                rate: 2,
                switch: 'Y',
                data: [
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' },
                  { name: '123' }
                ],
                steps: 2, chekboxValue: [] }
            ]
          }, {
            id: 4,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 3,
            switch: 'Y',
            check: true,
            steps: '1',
            isIndeterminate: true,
            chekboxValue: []
          }, {
            id: 5,
            check: true,
            name: '张三',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y',
            steps: '2',
            chekboxValue: []
          }, {
            id: 6,
            check: true,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y',
            steps: '2',
            chekboxValue: []
          }, {
            id: 7,
            check: true,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y',
            steps: '2',
            chekboxValue: []
          }, {
            title: '111', reasonType: '1111', chekboxValue: [],
            id: 'PERSONAL',
            options: [
              { value: '1', label: 'message.reason_type1_check1' }, // 工作内容重复、单一，不具备挑战
              { value: '2', label: 'message.reason_type1_check2' }, // 职业发展方向不符
              { value: '3', label: 'message.reason_type1_check2' }, // 有更好的发展平台
              { value: '4', label: 'message.reason_type1_check2' }, // 深造（考研、出国留学）
              { value: '5', label: 'message.reason_type1_check2' } // 创业
            ]
          }],
          treeCheck: {
            img: {
              check: true,
              indeterminate: false
            },
            name: {
              check: true,
              indeterminate: false
            }
          },
          dataHead: [
            { prop: 'rate', label: this.$t('message.name') },
            { prop: 'rate', label: this.$t('message.name') },
            { prop: 'rate', label: this.$t('message.name') },
            { prop: 'check', label: 'img', treeCheck: true },
            { prop: 'name', label: this.$t('message.name') },
            { prop: 'name', label: this.$t('message.name') },
            { prop: 'name', label: '双击事件' },
            { prop: 'name', label: this.$t('message.name') },
            { prop: 'switch', label: this.$t('message.name') },
            { prop: 'chekboxValue', label: 'examContent', checkboxGroup: true, optionsKey: 'options' },
            {
              prop: 'createTime',
              label: this.$t('message.operate'),
              align: 'left',
              width: 160,
              hoverRow: true,
              render: (h) => {
                return h('i', {
                  class: 'iconfont iconyinhangqia pointer my-handle'
                })
              }
            }
          ]
        },
        originalWatch: {
          pageNumber: 1,
          pageSize: 10,
          key: '',
          select: '',
          date: '',
          orderBy: '',
          orderDirection: '',
          workStatus: 'IN_SERVICE'
        },
        totalCount: 0
      }
    }
  },
  methods: {
    treecheckHead(value, prop) {
      console.log(value, prop)
      this.$set(this.treeCheck[prop], 'indeterminate', value)
      console.log(this.treeCheck)
    },
    treeCheckChange(value, row, index, prop) {
      console.log(value, row, index, prop)
    },
    init(data, state) {
      console.log(data, state)
    },
    searchData() {
      console.log('this.innerObj.originalWatch', this.innerObj.originalWatch)
    },
    add() {
      this.$message.success('您点击了新增按钮')
      const tableFormRef = this.innerObj.tableData.options.tableFormRef
      this.$refs.template.$refs[tableFormRef].validate((valid, option) => {
        console.log(valid, option)
      })
    },
    /**
     * 其他按钮点击
    */
    topBtnClick(func, item) {
      switch(func) {
        case '1':
          this.$message.success(`您点击了按钮【${item.label}】`)
          break
        case '2':
          this.$message.success(`您点击了按钮【${item.label}】`)
          break
      }
    }
  },
  watch: {
    'treeCheck': {
      deep: true,
      immediate: true,
      handler(val) {
        console.log(val)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.container{
  // background: red;
  flex: 1;
}
</style>
