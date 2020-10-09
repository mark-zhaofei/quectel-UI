<template>
    <el-dialog
      :class="{'changeStyle': changeStyle}"
      :title="$t('message.highFilter')"
      :visible="visible"
      append-to-body
      width="55%"
      :fullscreen="fullscreen"
      :close-on-click-modal="false"
      :show-close='false'
      :before-close="close">
      <div slot="title" class="fj dialog-title">
        <div class="font16 h3"><i class="iconfont iconshaixuan"></i> &nbsp; {{$t('message.highFilter')}}</div>
        <div class="titleIcon">
          <el-tooltip class="item" effect="dark" :content="fullscreen ? $t('message.cancel') + $t('message.screen') : $t('message.screen')" placement="bottom">
            <i class="iconfont contentColor font24 pointer" :class="fullscreen ? 'iconsuoxiaotuichuquanpingshouhui' : 'iconquanping1'" @click="fullscreen = !fullscreen"></i>
          </el-tooltip>
          <i class="iconfont iconiconddgb contentColor font24 pointer" :class="!fullscreen && changeStyle ? 'closeIcon' : ''" @click="close"></i>
        </div>
      </div>
      <div>
        <div class="highItem" v-for="(item, index) in highParams" :key="index">
          <div class="left">
            <el-row :gutter="16">
              <el-col :span="9">
                <el-select v-model="item.column" size="mini" filterable :placeholder="$t('message.pleaseChoose') + $t('message.filterKey')"
                  @change="handleData(item, index)">
                  <el-option v-for="(item, index) of highList" :key="index" :value="item.fieldName" :label="item[labelKey]"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="item.condition" size="mini" :placeholder="$t('message.pleaseChoose')" filterable>
                  <el-option v-for="(item1, index) of item.conditions" :key="index" :value="item1" :label="$t('message')[item1]"></el-option>
                </el-select>
              </el-col>
              <el-col :span="9">

                <!-- 懒加载 -->
                <template v-if="item.flag == 'select' || item.flag == 'dict'">
                  <q-select-lazy
                    v-if="item.column == 'sale_fae' || item.column == 'wicked'"
                    :model="item.column"
                    :form="projectForm"
                    :option="optData"
                    :allData="item.kindList"
                    :placeholder="$t('message.pleaseChoose')"
                    @getData="(params) => {getcurrentData(params, item.kindList)}"
                    @changeData="(val) => {changeData(val, item)}"></q-select-lazy>
                  <el-select v-model="item.value" size="mini" filterable v-else>
                    <el-option v-for="(item2, index) of item.kindList"
                      :key="index"
                      :value="item.flag == 'dict' ? item2.code : item2.value"
                      :label="item2.label"></el-option>
                  </el-select>
                </template>

                <!-- 选择时间、时间日期 -->
                <template v-else-if="item.flag == 'date' || item.flag == 'datetime'">
                  <el-date-picker
                    v-model="item.value"
                    :type="item.flag"
                    size="mini"
                    value-format="timestamp"
                  ></el-date-picker>
                </template>

                <!-- inputTree -->

                <template v-else-if="item.flag == 'tree'">
                  <el-cascader
                    v-model="item.value"
                    :options="item.values"
                    :show-all-levels='false'
                    size="mini"
                    filterable
                    :props="{ checkStrictly: true, emitPath: false }"
                    clearable></el-cascader>
                  <!-- <q-input-tree :option="tree" :treeForm="item" @change="nodeclick"></q-input-tree> -->
                </template>

                <!-- 输入框 -->
                <template v-else-if="item.flag == 'input'">
                  <el-input v-model="item.value" size="mini" :placeholder="$t('message.pleaseEnter')"></el-input>
                </template>

              </el-col>
            </el-row>
          </div>
          <div class="right">
              <el-button icon="el-icon-delete" size="mini" type="warning" circle @click="deleteItem(index)"></el-button>
          </div>
        </div>
        <div class="addBtn">
          <el-link type="primary" :underline="false" @click='addCondition'> <i class="el-icon-plus"></i> {{$t('message.filterCondition')}}</el-link>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="clear" size="mini" type="danger" @click="reset">{{$t('message.clear')}}</el-button>
        <div>
          <el-button @click="close" size="mini">{{$t('message.cancel')}}</el-button>
          <el-button type="primary" @click="saveDialog" size="mini">{{$t('message.confirm')}}</el-button>
        </div>
      </span>
    </el-dialog>

</template>
<script>
// import format from 'utils/format'
export default {
  name: 'QHighSearch',
  props: {
    changeStyle: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    visible: {
      type: Boolean,
      default: false
    },
    highList: {
      type: Array,
      default: () => {
        return []
      }
    },
    highType: {
      type: String,
      default: 'custom'
    },
    labelKey: {
      type: String,
      default: () => {
        return 'labelName'
      }
    }
  },
  data() {
    return {
      fullscreen: false,
      highParams: [{
        column: '',
        condition: '',
        value: ''
      }],
      tree: {
        inputVal: 'id',
        trees: [],
        defaultProps: {
          children: 'children',
          label: 'name'
        }
      },
      // 当前页
      pageNumber: 1,
      // 每页大小
      pageSize: 10,
      optData: [],
      projectForm: {
        sale_fae: '',
        wicked: ''
      }
    }
  },
  methods: {
    getParmas() {
      // this.highParams.map((item) => {
      //   if (item.flag === 'date' && this.highType === 'custom') {
      //     item.value = format.timeFormat(item.value)
      //   } else if (item.flag === 'date') {
      //     item.value = new Date().getTime(item.value)
      //   }
      // })
      return this.highParams
    },
    saveDialog() {
      const parmas = this.getParmas()
      this.$emit('save', parmas)
    },
    reset() {
      this.highParams = [{
        column: '',
        condition: '',
        value: ''
      }]
      this.close()
    },
    close() {
      const parmas = this.getParmas()
      this.$emit('close', parmas)
    },
    addCondition() {
      var existIndex = this.highParams.findIndex(item => {
        return !item.condition || !item.value
      })
      if (existIndex > -1) {
        this.$message.warning(this.$t('message.highSearchCondition'))
      } else {
        this.highParams.push({
          column: '',
          condition: '',
          value: ''
        })
      }
    },
    deleteItem(index) {
      this.highParams.splice(index, 1)
    },
    handleData(item, index) {
      // 每次重置
      this.$set(item, 'condition', '')
      this.$set(item, 'value', '')
      this.projectForm[item.column] = ''
      var exist = this.highList.find(res => {
        return res.fieldName === item.column
      })
      console.log('exist', exist)
      if (exist) {
        this.$set(this.highParams[index], 'conditions', exist.conditions)
        this.$set(this.highParams[index], 'flag', exist.fieldType)
        this.$set(this.highParams[index], 'kindList', exist.values)
        this.$set(this.highParams[index], 'values', exist.values)
        this.tree.trees = exist.values
        if (exist.fieldName === 'customer_id' && exist.values) {
          exist.values.forEach(res => {
            this.$set(res, 'name', res.customerName)
          })
        } else if ((exist.fieldName === 'wicked' || exist.fieldName === 'sale_fae') && exist.values) {
          // exist.values.forEach(res => {
          //   this.$set(res, 'name', this.getName(res))
          // })
          this.optData = exist.values.slice(0, 10)
        }
      } else {
        this.projectForm = {
          sale_fae: '',
          wicked: ''
        }
      }
    },
    nodeclick(data, node, self, treeForm) {
      var existIndex = this.highParams.findIndex(res => {
        return res.column === treeForm.column
      })
      if (existIndex > -1) {
        this.$set(this.highParams[existIndex], 'value', data.id)
      }
    },
    getcurrentData(params, alLlist) {
      if (!params) {
        this.optData = alLlist
      } else {
        this.optData = alLlist.slice(
          params.pageSize * (params.pageNumber - 1),
          params.pageSize * params.pageNumber)
      }
    },
    changeData(val, item) {
      this.$set(item, 'value', val)
    }
  }
}
</script>

<style lang='scss' scoped>
.titleIcon{
  i + i{
    padding-left: 20px;
  }
}
/deep/.el-dialog__body{
  padding: 20px;
}
/deep/.el-select, .input-select, .el-dropdown, .user-select{
  width: 100%;
}
.highItem{
  @include fj();
  margin-bottom: 10px;
  .left{
    flex: 1;
  }
  .right{
    width: 60px;
    text-align: right;
  }
}
.addBtn{
  padding-top: 10px;
  font-size: 12px;
}
.dialog-footer{
  @include fj;
  .clear{
    align-self: flex-start
  }
}

.changeStyle{
  /deep/.el-dialog__footer{
    padding: 14px 20px;
    // border-top: 10px solid rgba(42, 177, 232, 0.05);
    box-shadow:  0 0 10px rgba(0, 0, 0, 0.07);
    // background: rgba(42, 177, 232, 0.03);
  }
  /deep/.el-dialog__header{
    padding-bottom: 0;
    border: none;
  }
  /deep/.el-dialog{
    padding: 0;
    border-radius: 16px;
    // overflow: hidden;
  }
  .dialog-title{
    border-radius: 16px 16px 0 0;
    position: relative;
    padding: 10px 20px;
    color: $--color-white;
    box-shadow:  0 0 10px rgba(0, 0, 0, 0.3);
    background: linear-gradient(to right, $--color-primary, $--color-success);
    background-image: linear-gradient(90deg,$--color-primary 0%,$--color-success 100%);
    background-image: -webkit-linear-gradient(90deg,$--color-primary 0%,$--color-success 100%);
    background-image: -moz-linear-gradient(90deg,$--color-primary 0%,$--color-success 100%);
    background-image: -o-linear-gradient(90deg,$--color-primary 0%,$--color-success 100%);
    i{
      color: $--color-white;
    }
    .closeIcon{
      position: absolute;
      right: -36px;
      top: -30px;
      font-size: 30px;
      color: $--color-white;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      padding-left: 0;
      border-radius: 34px;
      font-weight: 600;
      transition: all 0.6s ease-in;
    }
  }
}

</style>
