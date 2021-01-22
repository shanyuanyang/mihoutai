<!--  -->
<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="name"
        label="商品名称"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="subName"
        label="副标题"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="introduce"
        label="介绍"
        width="300"
      >
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="stock"
        label="总库存"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="picture"
        label="图片"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="createdAt"
        label="创建时间"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="updatedAt"
        label="更新时间"
        width="200"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "小米7",
          subName: "7777",
          introduce:
            "介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍",
          price: "200",
          stock: "10000",
          picture: "img",
          createdAt: "2020-01-22",
          updatedAt: "2020-01-22",
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>
<style scoped>
.el-pagination {
  text-align: right;
  margin-top: 30px;
}
</style>