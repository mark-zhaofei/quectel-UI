<template>
  <div class="padding10 container">
    <el-switch v-model="tableSort"></el-switch>
    <q-form-template :inner-obj='innerObj'
                    height='600px'
                    :tableSort='tableSort'

                    @add='add'
                    @searchData='searchData'
                    @topBtnClick="topBtnClick">
      <!-- <div slot="header" class="padding10" style="background: #ccc">slot-header</div>
      <div slot="top" style="background: #ccc">slot-top</div>
      <div slot="top-after" style="background: #ccc">top-after</div> -->
      <q-high-search slot="dialogs" ref="high"></q-high-search>
    </q-form-template>
    <q-form-template :inner-obj='innerObj'
                    height='600px'
                    :tableSort='tableSort'
                    
                    @add='add'
                    @searchData='searchData'
                    @topBtnClick="topBtnClick">
      <!-- <div slot="header" class="padding10" style="background: #ccc">slot-header</div>
      <div slot="top" style="background: #ccc">slot-top</div>
      <div slot="top-after" style="background: #ccc">top-after</div> -->
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
      innerObj: { // 表格需要的参数
        add: true,
        buttonAlign: 'right',
        highFilter: true,
        pageTitle: '123',
        buttonList: [
          { type: 'primary', label: '其他按钮', func: '1' },
          { type: 'danger', label: '带icon', icon: 'el-icon-grape', func: '2' },
          {  dropdown: true, type: 'text', icon: 'el-icon-more', options: [
            { type: 'primary', label: '其他按钮', func: '1' },
          ] }
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
            ref: 'ref11',
            indexType: 'selection',
            spanKey: ['name', 'rate'],
            arraySpanMethod: (row, column) => {
              const span = column['property'] + '-span'
              if(row[span]){
                  return row[span]
              }
            },
            page: true,
            mergeTable: false,
            editDataHead: true
          },
          dataBody: [{
            id: '1',
            name: '',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 1,
            switch: 'N',
            data: [
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'}
            ],
            options: [
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 }
            ]
          }, {
            id: '2',
            name: '',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y',
            data: [
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'}
            ]
          }, {
            id: 3,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y'
          }, {
            id: 4,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 3,
            switch: 'Y'
          }, {
            id: 5,
            name: '张三',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y'
          }, {
            id: 6,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y'
          }, {
            id: 7,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y'
          }],
          dataHead: [
            { prop: 'name', label: this.$t('message.name') },
            { prop: 'img', label: this.$t('message.name'), img: true },
            { prop: 'name', label: this.$t('message.name') },
            { prop: 'name', label: this.$t('message.name'), width: 190, optionsKey: 'options' },
            { prop: 'name', label: this.$t('message.name')},
            { prop: 'rate', label: this.$t('message.name')},
            { prop: 'name', label: this.$t('message.name') },
            { prop: 'name', label: '双击事件' },
            { prop: 'name', label: this.$t('message.name'), sortable: 'custom' },
            { prop: 'switch', label: this.$t('message.name'), activeValue: '张三', inactiveValue: '123' },
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
      },
      innerObj2: { // 表格需要的参数
        add: true,
        buttonAlign: 'right',
        highFilter: true,
        pageTitle: '123',
        buttonList: [
          { type: 'primary', label: '其他按钮', func: '1' },
          { type: 'danger', label: '带icon', icon: 'el-icon-grape', func: '2' },
          {  dropdown: true, type: 'text', icon: 'el-icon-more', options: [
            { type: 'primary', label: '其他按钮', func: '1' },
          ] }
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
            ref: '22ref',
            indexType: 'selection',
            spanKey: ['name', 'rate'],
            arraySpanMethod: (row, column) => {
              const span = column['property'] + '-span'
              if(row[span]){
                  return row[span]
              }
            },
            page: true,
            mergeTable: false,
            editDataHead: true
          },
          dataBody: [{
            id: '1',
            name: '',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 1,
            switch: 'N',
            data: [
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'}
            ],
            options: [
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 }
            ]
          }, {
            id: '2',
            name: '',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y',
            data: [
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'},
                {name: '123'}
            ]
          }, {
            id: 3,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y'
          }, {
            id: 4,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 3,
            switch: 'Y'
          }, {
            id: 5,
            name: '张三',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y'
          }, {
            id: 6,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y'
          }, {
            id: 7,
            name: '123',
            img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556906815,2402486002&fm=26&gp=0.jpg',
            rate: 2,
            switch: 'Y'
          }],
          dataHead: [
            { prop: 'name', label: this.$t('message.name') },
            { prop: 'img', label: this.$t('message.name'), img: true },
            { prop: 'name', label: this.$t('message.name') },
            { prop: 'name', label: this.$t('message.name'), width: 190, optionsKey: 'options' },
            { prop: 'name', label: this.$t('message.name')},
            { prop: 'rate', label: this.$t('message.name')},
            { prop: 'name', label: this.$t('message.name') },
            { prop: 'name', label: '双击事件' },
            { prop: 'name', label: this.$t('message.name'), sortable: 'custom' },
            { prop: 'switch', label: this.$t('message.name'), activeValue: '张三', inactiveValue: '123' },
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
    init(data, state) {
      console.log(data, state)
    },
    searchData() {
      console.log('this.innerObj.originalWatch', this.innerObj.originalWatch)
    },
    add() {
      this.$message.success('您点击了新增按钮')
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
  }
}
</script>

<style lang='scss' scoped>
.container{
  // background: red;
  flex: 1;
}
</style>
