<template>
  <div class="form-template-view">
    <slot name="header"></slot>
    <div class="search-header">
      <div v-if="innerObj.pageTitle" class="pageTitle">
        <i class="iconfont iconshouye_shugang_shijiantixing color-primary"></i>
        <span>{{innerObj.pageTitle}}</span>
      </div>
      <div :style="{display: 'flex',flex: 1,'flex-direction': innerObj.buttonAlign === 'right' ? 'row-reverse' : 'row'}">
        <!-- 按钮列 -->
        <div class="left" :style="{'justify-content': innerObj.buttonAlign === 'right' ? 'flex-end' : 'flex-start'}">
          <span v-if="innerObj.add">
            <el-button
                    type="primary"
                    size="mini"
                    icon="el-icon-plus"
                    @click="add">{{$t('message.add') + (innerObj.addTitle || innerObj.pageTitle || '')}}</el-button>
          </span> 
          <span v-for="(item, index) in innerObj.buttonList" :key="index">
            <el-dropdown v-if="item.dropdown && !item.hidden" :trigger="item.trigger || 'hover'" placement='bottom' :hide-on-click='false'>
              <el-button :type="item.type || 'primary'" :size="item.size || 'mini'" :icon="item.icon" @click="topBtnClick(item.func, item)" :plain='item.plain'>
                {{item.label}}
                <i v-if='item.icon' :class="(item.icon && String(item.icon) !== 'true') ? 'item.icon' : 'el-icon-arrow-down el-icon--right'" ></i>
              </el-button>
              <el-dropdown-menu slot="dropdown" v-if="item.options && item.options.length">
                <el-dropdown-item v-for="(child, cIndex) in item.options" :key="cIndex">
                  <span @click="topBtnClick(child.func, child)">{{child.label}}</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button v-else-if="!item.hidden" :type="item.type || 'primary'" :size="item.size || 'mini'" :icon="item.icon" @click="topBtnClick(item.func, item)" :plain='item.plain'>{{item.label}}</el-button>
          </span>
        </div>
        <!-- 搜索列 -->
        <div class="right" :style="{'justify-content': innerObj.buttonAlign === 'right' ? 'flex-start' : 'flex-end'}">
          <slot name="top"></slot>
          <div v-for="(item, index) in formList"
              :key="index">
            <!--
            输入框
            bind: 绑定值   --必填
            formType：input  --必填
            尺寸： size
            类型：type
            输入框头部图标 prefixIcon
            输入框尾部图标 suffixIcon
          -->
            <div v-if="item.formType === 'input'">
              <el-input v-model="originalWatch[item.bind]"
                        :size="item.size || 'mini'"
                        :type="item.type || 'text'"
                        :prefix-icon="item.prefixIcon"
                        :suffix-icon="item.suffixIcon"
                        :clearable="item.clearable"
                        @clear="clear"
                        :placeholder="item.placeholder || $t('message.pleaseEnter')"
                        @keyup.enter.native="searchData">
              </el-input>
            </div>
            <!-- 下拉框树，筛选带有层级结构的数据
                tree: {
                  inputVal: 'deptId', 字段绑定值value
                  trees: [],
                  defaultProps: {
                    children: 'children',
                    label: 'name'
                  }
                }
                treeForm: 原始参数
            -->
            <div v-if="item.formType === 'inputTree'">
              <input-tree :option="item.options"
                          :treeForm="originalWatch[item.bind]"
                          :placeholder="item.placeholder || $t('message.pleaseChoose')"
                          :clearable="item.clearable"
                          @change="searchData">
              </input-tree>
            </div>
            <!--
            输入框
            bind: 绑定值   --必填
            formType：date --必填
            显示类型： type  // 可选 year/month/date/week/ datetime/datetimerange/daterange
            范围选择时开始日期的占位内容 startPlaceholder
            范围选择时结束日期的占位内容 endPlaceholder
            是否使用箭头进行时间选择  timeArrowControl
            显示在输入框中的格式  format  // yyyy-MM-dd HH:mm:ss
            绑定值的格式。 valueFormat
            是否显示清除按钮  clearable
            禁用  disabled
            只读  readonly
          -->
            <div v-if="item.formType === 'date'">
              <el-date-picker
                v-model="originalWatch[item.bind]"
                :size="item.size || 'mini'"
                :type="item.type || 'datetimerange'"
                :picker-options="item.pickerOptions || {}"
                :time-arrow-control="item.timeArrowControl || false"
                :format="item.format || 'yyyy-MM-dd HH:mm:ss'"
                :value-format="item.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
                :clearable="item.clearable || true"
                :disabled="item.disabled || false"
                :readonly="item.readonly || false"
                range-separator="-"
                :start-placeholder="item.startPlaceholder || $t('message.StartDate')"
                :end-placeholder="item.endPlaceholder || $t('message.EndDate')">
              </el-date-picker>
            </div>
            <!--
            选择框
            -------------必填--------
            formType：select
            bind: 绑定值
            options: 数据源

            ------------可选----------
            尺寸： size
            多选 multiple
            多选时最多限制 multipleLimit  0不限制
            筛选 filterable
            清空 clearable
          -->
            <div v-if="item.formType === 'select'">
              <el-select v-model="originalWatch[item.bind]"
                        :size="item.size || 'mini'"
                        :placeholder="item.placeholder || $t('message.pleaseChoose')"
                        :multiple="item.multiple || false"
                        :filterable="item.filterable || false"
                        :clearable="item.clearable || false"
                        :multiple-limit="item.multipleLimit || 0">
                <el-option v-for="select in item.options"
                          :key="item.valueKey ? select[item.valueKey] : select.value"
                          :label="item.labelKey ? select[item.labelKey] : select.label"
                          :value="item.valueKey ? select[item.valueKey] : select.value">
                </el-option>
              </el-select>
            </div>
            <!--
              级联选择器
              -------------必填--------
              formType：cascader --必填
              bind: 绑定值   --必填
              options: 数据源  --必填

              ------------可选----------
              尺寸： size
              多选 multiple
              清空 clearable
              是否显示选中值的完整路径 showAllLevels
              是否严格的遵守父子节点不互相关联 checkStrictly
              emitPath 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
            -->
            <div v-if="item.formType === 'cascader'">
              <el-cascader v-model="originalWatch[item.bind]"
                          :size="item.size || 'mini'"
                          :options="item.options"
                          :clearable="item.clearable || false"
                          :show-all-levels="item.showAllLevels || false"
                          :placeholder="item.placeholder || $t('message.pleaseEnter')"
                          :props="{
                          expandTrigger: item.expandTrigger || 'click',
                          multiple: item.multiple || false,
                          checkStrictly: item.checkStrictly || false,
                          emitPath: item.emitPath || false,
                          value: item.valueKey || 'value',
                          label: item.labelKey || 'label',
                          children: item.childrenKey || 'children',
                          disabled: item.disabledKey || 'disabled'
                        }">
              </el-cascader>
            </div>
          </div>
          <div v-if="formList && formList.length">
            <el-button type="primary"
                      size="mini"
                      @click="searchData">{{$t('message.search')}}</el-button>
          </div>
          <span v-if="innerObj.highFilter">
            <!-- 高级筛选 -->
            <el-button :type="innerObj.highFilterType || 'success'" :changeStyle="innerObj.highFilterStyle" size="mini" @click='highFilterClick'>{{$t('message.highFilter')}}</el-button>
            <!-- 清空高级筛选 -->
            <el-button size="mini" @click="resetHigh">{{$t('message.clear') + $t('message.highFilter')}}</el-button>
          </span>
        </div>
      </div>
      <!-- 显示隐藏表格列 -->
      <el-popover
        v-if="innerObj.tableData.options && innerObj.tableData.options.editDataHead"
        placement="bottom"
        trigger="click">
        <div class="selfDefine">
          <div class="selfDefineItem" v-for="(item, index) in innerObj.tableData.dataHead" :key="index">
            <el-checkbox :checked="!item.hidden" @change="(val)=>{return checkboxClick(index,val)}">{{item.label}}</el-checkbox>
          </div>
        </div>
        <el-button slot="reference" class="popoverButton" size="mini">{{$t('message.selfDefine')}}</el-button>
      </el-popover>
    </div>
    <slot name="top-after"></slot>
    <div class="search-content"
         :style="{height: height || '680px'}">
      <!--
        表格封装
        innerObj.tableData  表格数据
        -----------------必填--------------
        dataBody：数据源
        -----------------可选--------------
        option： 表格设置
       -->
      <el-table v-if="innerObj.tableData"
                :ref="innerObj.tableData.options && innerObj.tableData.options.ref ? innerObj.tableData.options.ref : 'table'"
                v-loading="loading"
                element-loading-text="数据正在加载中"
                :header-cell-style="headerStyle || {}"
                :show-header='innerObj.tableData.options && innerObj.tableData.options.showHeader'
                :data="innerObj.tableData.dataBody"
                :border="innerObj.tableData.options && (innerObj.tableData.options.border || innerObj.tableData.options.mergeTable)"
                :stripe="innerObj.tableData.options && innerObj.tableData.options.stripe && String(innerObj.tableData.options.stripe) === 'false' ? false : true"
                :height="innerObj.tableData.options && innerObj.tableData.options.height ? innerObj.tableData.options.height : '100'"
                :max-height="innerObj.tableData.options ? innerObj.tableData.options.maxHeight : null"
                :emptyText="innerObj.tableData.options && innerObj.tableData.options.emptyText ? innerObj.tableData.options.emptyText : '暂无数据'"
                :default-sort="innerObj.tableData.options && innerObj.tableData.options.defaultSort ? innerObj.tableData.options.defaultSort : {}"
                highlight-current-row
                :row-key="innerObj.tableData.options && innerObj.tableData.options.rowKey ? innerObj.tableData.options.rowKey : 'id'"
                :tree-props="innerObj.tableData.options && innerObj.tableData.options.treeProps ? innerObj.tableData.options.treeProps : { hasChildren: 'hasChildren', children: 'children' }"
                :span-method="innerObj.tableData.options && innerObj.tableData.options.mergeTable ? arraySpanMethod : null"
                @selection-change="handleSelectionChange"
                @sort-change="sortChange"
                @header-dragend="headerDragend"
                :default-expand-all="innerObj.tableData.options && innerObj.tableData.options.expandAll ? innerObj.tableData.options.expandAll : false"
                @cell-mouse-enter='cellMouseEnter'
                @cell-mouse-leave='cellMouseLeave'
                @cell-dblclick='dblclick'>
        <!--
          列循环
         -->
        <!-- 列样式调整 -->
        <!-- <el-table-column width="1" fixed="left" style="opacity: 0;"></el-table-column> -->
        <!-- 序号列 -->
        <el-table-column v-if="innerObj.tableData.options && innerObj.tableData.options.indexType"
                         :type="innerObj.tableData.options.indexType || 'index'"
                         :label="innerObj.tableData.options.indexLabel || '序号'"
                         :align="innerObj.tableData.options.indexAlign || 'left'"
                         :reserve-selection="innerObj.tableData.options && innerObj.tableData.options.indexType === 'selection' ? true : false"
                         fixed="left">
        </el-table-column>
        <template v-for="(v, index) in innerObj.tableData.dataHead">
          <!-- 自定义表头 -->
          <!-- <el-table-column v-if="v.header && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
          </el-table-column> -->

          <!-- 操作按钮列 -->
          <el-table-column v-if="v.render && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'"
                            :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <render-button slot="reference"
                             :item="v"
                             :row="scope.row"
                             :render="v.render"
                             :index="scope.$index">
              </render-button>
            </template>
          </el-table-column>

          <!-- 图片 -->
          <el-table-column v-else-if="v.img && !v.hidden"
                           :label="v.label"
                           :width="v.width || 120"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope"
                      v-if="v.img">
              <el-tooltip effect="dark" :content="$t('message.view') + $t('message.picture')" placement="top">
                <div class="imgBox" v-picture='scope.row[v.prop]'>
                  <img class="img"
                      :src="scope.row[v.prop]">
                </div>
              </el-tooltip>
            </template>
          </el-table-column>

          <!-- 嵌套表头 动态修改表格列显示与嵌套表头 慎同时使用 -->
          <el-table-column v-else-if="v.columns && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'center'"
                           :show-overflow-tooltip="v.showOverflowTooltip || true" :key="index">
            <template>
              <div v-for="(col, index) in v.columns"
                   :key="index">
                <el-table-column :label="col.label"
                                 :prop="col.prop"
                                 :align="col.align || 'left'"
                                 :show-overflow-tooltip="v.showOverflowTooltip || true"></el-table-column>
              </div>
            </template>
          </el-table-column>

          <!-- 文字链接 -->
          <el-table-column v-else-if="v.link && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <el-link :type="v.linkType || 'primary'"
                       @click="linkClick(scope.row, v.prop, scope.$index)">{{scope.row[v.prop] | noString}}</el-link>
            </template>
          </el-table-column>

          <!--
            tag标签
            size: 大小
          -->
          <el-table-column v-else-if="v.tag && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <el-tag :type="v.type || 'success'"
                      :size="v.size || 'mini'" :effect="v.effect || 'light'" :hit="v.hit || false">{{scope.row[v.prop] | noString}}</el-tag>
            </template>
          </el-table-column>

          <!--
            Switch 开关
          -->
          <el-table-column v-else-if="v.switch && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <el-switch v-model="scope.row[v.prop]"
                         :active-color="v.activeColor"
                         :inactive-color="v.inactiveColor"
                         :active-text="v.activeText"
                         :inactive-text="v.inactiveText"
                         :active-value="v.activeValue"
                         :inactive-value="v.inactiveValue"
                         :disabled="scope.row[v.disabledKey] || scope.row['disabled']"
                         @change="switchChange(scope.row, v.prop, scope.$index)">
              </el-switch>
            </template>
          </el-table-column>

          <!--
            Rate 评分组件
            disabled	是否为只读
            allowHalf	是否允许半选
            colors icon颜色
            showText 是否显示文字
           -->
          <el-table-column v-else-if="v.rate && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <el-rate v-model="scope.row[v.prop]"
                       :colors="v.colors"
                       :show-text="v.showText || false"
                       :disabled="scope.row[v.disabledKey] || scope.row['disabled']"
                       :allow-half="v.allowHalf || false"></el-rate>
            </template>
          </el-table-column>

          <!--
            单选组
            -------------必填--------
            formType：cascader --必填
            bind: 绑定值   --必填
            options: 数据源  --必填

            ------------可选----------
            禁用 disabled
            是否显示边框 border
          -->
          <el-table-column v-else-if="v.radioGroup && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <el-radio-group v-model="scope.row[v.prop]" 
                            :disabled="scope.row[v.disabledKey] || scope.row['disabled']" 
                            :size="v.size || 'mini'">
              <span v-if="v.button">
                <el-radio-button v-for="(radio, rIndex) in (v.options || scope.row[v.optionsKey])" 
                                :key="rIndex" 
                                :label="v.valueKey ? radio[v.valueKey] : radio.value" 
                                :border='radio.border'>{{v.labelKey ? radio[v.labelKey] : radio.label}}</el-radio-button>
              </span>
              <span v-else>
                <el-radio v-for="(radio, _index) in (v.options || scope.row[v.optionsKey])" 
                          :key="_index" 
                          :label="v.valueKey ? radio[v.valueKey] : radio.value" 
                          :border='radio.border'>{{v.labelKey ? radio[v.labelKey] : radio.label}}</el-radio>
              </span>
            </el-radio-group>
            </template>
          </el-table-column>
         

          <!--
            多选
            -------------必填--------
            formType：checkbox --必填
            bind: 绑定值   --必填
            options: 数据源  --必填

            ------------可选----------
            禁用 disabled
            是否显示边框 border
          -->
          <el-table-column v-else-if="v.checkboxGroup"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <el-checkbox-group v-model="scope.row[v.prop]" 
                                :disabled="scope.row[v.disabledKey] || scope.row['disabled']" 
                                :border='v.border'>
                <el-checkbox
                v-for="(check, _index) in  (v.options || scope.row[v.optionsKey])" 
                :key="_index" 
                :label="v.valueKey ? check[v.valueKey] : check.value" 
                :disabled="check.disabled">{{v.labelKey ? check[v.labelKey] : check.label}}</el-checkbox>
              </el-checkbox-group>
            </template>
          </el-table-column>

          <!-- input 输入框 -->
          <el-table-column v-else-if="v.input && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <el-input v-model="scope.row[v.prop]"
                        :size="v.size || 'mini'"
                        :type="v.inputType || 'text'"
                        :prefix-icon="v.prefixIcon"
                        :suffix-icon="v.suffixIcon"
                        :clearable="v.clearable"
                        :disabled="scope.row[v.disabledKey] || scope.row['disabled']"
                        :placeholder="v.placeholder || $t('message.pleaseEnter')"></el-input>
            </template>
          </el-table-column>

          <!-- select 选择框 -->
          <el-table-column v-else-if="v.select && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <el-select v-model="scope.row[v.prop]"
                         :size="v.size || 'mini'"
                         :placeholder="v.placeholder || $t('message.pleaseEnter')"
                         :multiple="v.multiple || false"
                         :filterable="v.filterable || false"
                         :clearable="v.clearable || false"
                         :disabled="scope.row[v.disabledKey] || scope.row['disabled']"
                         :multiple-limit="v.multipleLimit || 0">
                <el-option v-for="item in v.options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>

          <!-- 
            popoverOption 弹出框

            ----必填
            content 弹出内容
           -->
          <el-table-column v-else-if="v.popoverOption && !v.hidden"
                           :label="v.label"
                           :width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'" :key="index">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <q-popover :option='v.popoverOption' 
                         :scope='scope' 
                         :text="v.prop"
                         :disabled="typeof v.popoverOption.disabled === 'function' ? v.popoverOption.disabled(scope) : v.popoverOption.disabled">
              </q-popover>
            </template>
          </el-table-column>

          <!-- 其他 -->
          <el-table-column v-else-if="!v.hidden"
                           :prop="v.prop"
                           :label="v.label"
                           :min-width="v.width"
                           :fixed="v.fixed"
                           :align="v.align || 'left'"
                           :sortable="v.sortable || false" :key="index"
                           :resizable="v.resizable || true"
                           :show-overflow-tooltip="v.showOverflowTooltip || true">
            <template slot="header" v-if="v.header">
              {{v.label}}
              <el-tooltip class="item"
                          v-if="v.tooltip"
                          effect="dark"
                          :content="v.tooltip"
                          placement="top">
                <i :class="v.tooltipClass || 'el-icon-question color-primary'"></i>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <el-popover
                placement="left"
                trigger="hover"
                :disabled="!v.edit"
                :content="$t('message.click')+$t('message.edit')"
                >
                <span slot="reference" :class="v.edit ? 'ellipsisLink' : ''">{{scope.row[v.prop] | noString}}</span>&nbsp;
              </el-popover>
              <span v-if="v.hoverRow" class="hoverEdit">
                <span @click="hoverRowClick(scope.row, v.prop, scope.$index)" :ref="'edit' + scope.row[innerObj.tableData.options && innerObj.tableData.options.rowKey ? innerObj.tableData.options.rowKey : 'id']" style="display: none">&nbsp;{{String(v.hoverRow) === 'true' ? $t('message.change') : v.hoverRow}}</span>
              </span>
            </template>
          </el-table-column>

        </template>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pagination-view"
         v-if="innerObj.tableData.options && innerObj.tableData.options.page">
      <el-pagination :page-sizes="[10,20, 50, 100, 200, 300, 500]"
                     :page-size="originalWatch.pageSize"
                     @current-change="currentChange"
                     layout="total, prev, pager, next, sizes"
                     :total="innerObj.totalCount"
                     :current-page="originalWatch.pageNumber"
                     @size-change="handleSizeChange"
                     background></el-pagination>
    </div>
    <q-high-search ref="high" :visible='highVisible' :highList='innerObj.highList' @close='highClose' @save='highSave'></q-high-search>
    <slot name="dialogs"></slot>
  </div>
</template>

<script>
// import ellipsisView from '../ellipsisView'
// import { InputTree } from 'components'
import Sortable from 'sortablejs'
import resize from './mixins/resize'
import format from 'utils/format'
export default {
  name: 'QFormTemplate',
  mixins: [resize],
  props: {
    tableSort: { // 表格行排序 必须设置row-key
      type: Boolean,
      default: () => {
        return false
      }
    },
    sortHandle: {
      type: String, 
      default: () => {
        return ''
      }
    },
    innerObj: {
      type: Object,
      required: true,
      default: () => {
        return {}
      }
    },
    height: {
      type: String,
      default: () => {
        return '680px'
      }
    }
  },
  data() {
    return {
      sortable: null,
      spanArr: [],
      highVisible: false,
      dataBodyObj: {},
      headerStyle: { // 表头样式
        background: '#f8f9fb !important',
        color: '#333333'
      },
      loading: false,
      originalWatch: this.innerObj.originalWatch // 需被检测刷新数据
    }
  },
  mounted() {
    if(this.innerObj&& this.innerObj.tableData && this.innerObj.tableData.options && this.innerObj.tableData.options.mergeTable) {
      // this.getSpanArr(this.innerObj.tableData.dataBody)
     this.innerObj.tableData.dataBody = this.mergeTableRow(this.innerObj.tableData.dataBody, this.innerObj.tableData.options.spanKey || [])
    }
    // 行排序
    if(this.tableSort) {
      this.rowDrop()
    }
  },
  methods: {
    //行拖拽
    rowDrop() {
      const _this = this
      const $document = this.$refs[_this.innerObj.tableData.options.ref].$el || document
      const tbody = $document.querySelector('.el-table__body-wrapper tbody')
      if(!this.tableSort && this.sortable) {
        this.sortable.destroy()
        return false
      }
      this.sortable = Sortable.create(tbody, {
        sort: _this.tableSort,
        disabled: !_this.tableSort,
        handle: _this.sortHandle,  //拖动列表项中的句柄选择器
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.innerObj.tableData.dataBody.splice(oldIndex, 1)[0]
          _this.innerObj.tableData.dataBody.splice(newIndex, 0, currRow)
          _this.$emit('onEnd', _this.innerObj.tableData.dataBody)
        }
      })
    },
    isArray(obj) {
      return format.isArray(obj)
    },
    isObject(obj) {
      return format.isObject(obj)
    },
    /**
     * 鼠标移入单元格
    */
   cellMouseEnter(row, column, cell, event) {
    const option = this.innerObj.tableData.options
    const key = option && option.rowKey ? option.rowKey : 'id'
    if(this.$refs['edit' + row[key]] && this.$refs['edit' + row[key]].length) {
      this.$refs['edit' + row[key]].map(item => {
        item.style.display = 'inline-block'
      })
    }
    this.$emit('cellMouseLeave', row, column, cell, event)
   },
   /**
    * 鼠标移出单元格
   */
  cellMouseLeave(row, column, cell, event) {
    const option = this.innerObj.tableData.options
    const key = option && option.rowKey ? option.rowKey : 'id'
    if(this.$refs['edit' + row[key]] && this.$refs['edit' + row[key]].length) {
      this.$refs['edit' + row[key]].map(item => {
        item.style.display = 'none'
      })
    }
    this.$emit('cellMouseLeave', row, column, cell, event)
  },
  /**
   * hover 行点击事件
  */
  hoverRowClick(row, prop, index) {
   this.$emit('hoverRowClick', row, prop, index)
  },
  /**
   * 清空高级筛选
  */
   resetHigh() {
     this.$refs.high.reset()
   },
    /**
     * 点击高级搜索
    */
   highFilterClick() {
     this.highVisible = true
   },
   /**
    * 高级筛选取消
   */
  highClose(value) {
    this.innerObj.originalWatch = {
      ...this.originalWatch,
      ...value
    }
    this.$emit('searchData')
    this.highVisible = false
  },
  /**
   * 高级筛选保存
  */
  highSave(value) {
    this.innerObj.originalWatch = {
      ...this.originalWatch,
      ...value
    }
    this.$emit('searchData')
        this.highVisible = false
  },
    /**
     * 拖动表头
    */
    headerDragend(newWidth, oldWidth, column) {
      if (this.$refs.ellipsisView && this.$refs.ellipsisView.length) {
        this.$nextTick(() => {
          for (let i = 0; i < this.$refs.ellipsisView.length; i++) {
            if (this.$refs.ellipsisView[i]._props.index === column.property) {
              this.$refs.ellipsisView[i].parentWidth = newWidth - 30
            }
          }
        })
      }
    },
    /**
     * 双击事件
    */
    dblclick(row, column, cell, event) {
      this.$emit('dblclick', row, column, cell, event)
    },
    /**
     * 清空搜索框值
    */
    clear() {
      this.$emit('searchData')
    },
    /**
     * 自定义表头点击
    */
    checkboxClick(index, val) {
      this.$set(this.innerObj.tableData.dataHead[index], 'hidden', !val)
    },
    /**
     * 头部按钮点击
    */
    topBtnClick(func, item) {
      this.$emit('topBtnClick', func, item)
    },
    handleSelectionChange(val) {
      this.$emit('selectionChange', val)
    },
    /**
     *  用于多选表格，清空所选项
    */
    clearSelection() {
      this.$refs[this.innerObj.tableData.options.ref || 'table'].clearSelection()
    },
    /**
     *  用于多选表格，切换某一行的选中状态，
    */
    toggleRowSelection(arr, selected = null) {
      const option = this.innerObj.tableData.options
      const key = option && option.rowKey ? option.rowKey : 'id'
      arr.forEach(element => {
        if (this.dataBodyObj[key]) {
          this.$refs[this.innerObj.tableData.options.ref || 'table'].toggleRowSelection(this.dataBodyObj[element[key]], selected)
        }
      })
    },

    /**
     * 重新布局
     */
    doLayout() {
      let ref = this.innerObj.tableData.options && this.innerObj.tableData.options.ref ? this.innerObj.tableData.options.ref : 'table'
      let that = this
      setTimeout(() => {
        that.$refs[ref].doLayout()
      }, 100)
    },
    /**
      * 切换每页条数
      */
    handleSizeChange(val) {
      this.originalWatch.pageSize = val
      this.$emit('searchData')
    },
    /**
     *  分页
    */
    currentChange(val) {
      this.originalWatch.pageNumber = val
      this.$emit('searchData')
    },
    /**
      * 搜索
      */
    searchData() {
      this.originalWatch.pageNumber = 1
      this.$emit('searchData')
    },
    /**
     * 新增
    */
    add() {
      this.$emit('add')
    },
    /**
     * 表格排序事件
    */
    sortChange(column) {
      const sort = column.order.replace(/ending/g, '')
      // this.originalWatch.orderBy = column.prop
      // this.originalWatch.orderDirection = sort
      this.$set(this.originalWatch, 'orderBy', column.prop)
      this.$set(this.originalWatch, 'orderDirection', sort)
      this.originalWatch.pageNumber = 1
      this.$emit('searchData')
    },
    /**
     * switch change
    */
    switchChange(row, prop, index) {
      this.$emit('switchChange', row, prop, index)
    },
    /**
     * 文字链接点击
     */
    linkClick(row, prop, index) {
      this.$emit('linkClick', row, prop, index)
    },
    /**
     * 合并单元格
    */
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      // 外层的合并方法
      if(this.innerObj&& this.innerObj.tableData && this.innerObj.tableData.options && this.innerObj.tableData.options.mergeTable && this.innerObj.tableData.options.arraySpanMethod) {
        return this.innerObj.tableData.options.arraySpanMethod(row, column, rowIndex, columnIndex)
      } else { // 默认合并方法
        const span = column['property'] + '-span'
        if(row[span]){
            return row[span]
        }
      }
    },
   mergeTableRow(data, merge) {
      if (!merge || merge.length === 0) {
        return data;
      }
      merge.forEach((m) => {
        const mList = {};
        data = data.map((v, index) => {
          const rowVal = v[m];
          // console.log('mList[rowVal] && mList[rowVal].newIndex === index', mList[rowVal] && mList[rowVal].newIndex === index, mList[rowVal])
          if (mList[rowVal] && mList[rowVal].newIndex === index && data[mList[rowVal]['index']][m]) {
            mList[rowVal]['num']++;
            mList[rowVal]['newIndex']++;
            data[mList[rowVal]['index']][m + '-span'].rowspan++;
            v[m + '-span'] = {
              rowspan: 0,
              colspan: 0
            };
          } else {
            mList[rowVal] = { num: 1, index: index, newIndex: index + 1 };
            v[m + '-span'] = {
              rowspan: 1,
              colspan: 1
            };
          }
          return v;
        });
      });
      return data;
    }
  },
  components: {
    // InputTree,
    renderButton: {
      functional: true,
      props: {
        row: Object,
        render: Function,
        index: Number,
        item: {
          type: Object,
          default: null
        }
      },
      render: (h, ctx) => {
        const params = ctx.props.row
        const index = ctx.props.index
        return ctx.props.render(h, params, index)
      }
    }
    // ellipsisView
  },
  watch: {
    tableSort() {
      this.rowDrop()
    },
    'innerObj.tableData.dataBody': {
      deep: true,
      immediate: true,
      handler() {
        const tableData = this.innerObj.tableData
        const option = this.innerObj.tableData.options
        const key = option && option.rowKey ? option.rowKey : 'id'
        const _that = this
        if (tableData.options && tableData.options.indexType && tableData.options.indexType === 'selection') {
          tableData.dataBody.forEach(item => {
            _that.dataBodyObj[item[key]] = item
          })
        }
      }
    }
    // 'innerObj.tableData.dataHead': {
    //   deep: true,
    //   immediate: true,
    //   handler(val) {
    //     this.columnList = val.filter(item => {
    //       return !item.hidden
    //     })
    //     console.log('this.columnList', val, this.columnList)
    //   }
    // }
  },
  computed: {
    formList() {
      const obj = this.innerObj
      if (obj.formList && obj.formList.length) {
        const arr = obj.formList.filter(item => {
          return !item.hidden
        })
        return arr
      } else {
        return []
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.ellipsisLink:hover{
 border-bottom: 1px solid $--color-primary;
 color: $--color-primary;
 transition: all 0.5s;
 cursor: pointer;
}
.form-template-view {
  background: $--color-white;
  padding: 10px;
  @include flex-column;
  .el-select {
    width: 160px;
  }
  .search-header {
    @include flex-nowrap;
    justify-content:  space-between;
    .pageTitle{
      align-self: flex-start;
      @include fj(center);
      padding-top: 6px;
      padding-right: 10px;
      max-width: 100px;
      line-height: 14px;
      span{
        font-size: 14px;
        font-weight: 550;
      }
    }
    .popoverButton{
      display: flex;
      align-self: flex-end;
      margin-left: 10px;
    }
    .left {
      flex: 1;
      @include flex-wrap;
      > * {
        margin: 0 0 10px 10px;
        float: left;
      }
      min-width: 200px;
    }
    .right {
      flex: 2;
      @include flex-wrap;
      // justify-content: flex-end;
      flex-direction: row;
      .el-input {
        width: 160px;
      }
      .el-cascader {
        width: 160px;
      }
      > * {
        margin: 0 10px 10px 0;
        // float: left;
      }
    }
  }

  .search-content {
    flex: 1;
    height: 680px; // 必须设，随意传值，但一定不能是百分比，否则在IE上会出现无限加载的BUG
    // overflow-y: auto;
    .el-table {
      height: 100% !important;
      .inline-block {
        float: left;
        p {
          margin: 0;
          padding: 0;
          img {
            width: 60px;
            height: 60px;
            display: block;
          }
          span {
            line-height: 28px;
            margin-right: 10px;
          }
        }
        .el-button {
          margin-right: 10px;
        }
        &:last-child {
          .el-button {
            margin-right: 0;
          }
        }
      }
      .popover-span {
        width: 150px;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        @include ellipsis;
      }
      .hoverEdit{
        padding-left: 10px;
        cursor: pointer;
        color: $--color-primary;
        font-size: $--text-12;
      }
    }
    .imgBox {
      @include fj;
      justify-content: center;
      align-items: center;
      width: 46px;
      height: 46px;
      overflow: hidden;
      padding: 4px;
      border-radius: 6px;
      background: $--color-bg;
      cursor: pointer;
      img {
        width: auto;
        height: auto;
        max-width: 40px;
        max-height: 40px;
      }
    }
  }
  .pagination-view {
    padding: 20px 0;
    text-align: right;
  }
}
.contentItem{
  // display: inline-block;
  padding: 4px;
  border-bottom: 1px solid $--color-gray-e;
}
.selfDefine{
  width: auto;
  min-width: 100px;
  height: auto;
  max-height: 200px;
  overflow-y: auto;
  text-align: left;
  .selfDefineItem{
    padding: 4px 6px;
  }
}
</style>
