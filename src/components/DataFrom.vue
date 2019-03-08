<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="createTime"
      label="创建时间"
      width="200">
    </el-table-column>
    <el-table-column
      fixed
      prop="bandName"
      label="公司名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="productNames"
      label="产品名称"
      width="550">
    </el-table-column>
    <el-table-column
      prop="payChannel"
      label="支付方式"
      width="120">
    </el-table-column>
    <el-table-column
      prop="telephone"
      label="联系电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="payChannel"
      label="支付方式"
      width="120">
    </el-table-column>
    <el-table-column
      prop="status"
      label="支付状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
  import {getDataList} from "../api"
  export default {

    data() {
      return {
        tableData: []
      }
    },

    methods: {
      async getData() {
          // 请求参数
        let params = {
            interface:'',
            sign:'456',
            locale:'zh_CN',
            appKey:'001',
            appVersion:'2.0',
            method:'eleapseOrder',
            messageFormat:'json/xml',
          }
          // 获取数据
        let {data} = await getDataList(params)
        data.forEach(element => {
          element.productNames = element.productNames.slice(1)
        });
        this.tableData = data
      }
    },

    created() {
      this.getData()
    },
  }
</script>