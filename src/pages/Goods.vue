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
      > </el-table-column>
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
        prop="createdAtFormat"
        label="创建时间"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="updatedAtFormat"
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
          <el-button
            @click="removeGood(scope.row)"
            type="text"
            size="small"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalCount"
      @current-change="handleCurrentChange"
      :page-size="5"
    >
    </el-pagination>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>确认删除商品？</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="sureDeleteGood"
        >确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="更新产品信息"
      :visible.sync="updateShow"
      width="30%"
    >
      <form-submit
        :ruleForm="updateData"
        :flag="true"
        :uploadPicture="updateData.picture"
      ></form-submit>
    </el-dialog>

  </div>
</template>

<script>
import goodApi from "../api/good";
import FormSubmit from "../components/formSubmit";

export default {
  components: {
    FormSubmit,
  },
  data() {
    return {
      tableData: [],
      totalCount: 0,
      dialogVisible: false,
      updateShow: false,
      deleteId: "",
      updateData: {
        name: "",
        subName: "",
        introduce: "",
        price: "",
        stock: "",
      },
    };
  },
  created() {
    this.getGoodList();
  },
  methods: {
    getGoodList(pageIndex = 1) {
      goodApi.getlist(pageIndex, 5).then((res) => {
        console.log(res);
        this.tableData = res.data.goodList;
        this.totalCount = res.data.count;
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      let pageIndex = val;
      this.getGoodList(pageIndex);
    },
    // 修改商品
    handleClick(row) {
      let id = row.id;
      this.updateShow = true;
      goodApi.getDetail(id).then((res) => {
        console.log(res);
        this.updateData = res.data;
      });
    },
    // 删除
    removeGood(row) {
      let id = row.id;
      this.dialogVisible = true;
      this.deleteId = id;
      // this.sureDeleteGood(id);
    },
    sureDeleteGood() {
      let id = this.deleteId;
      goodApi.deleteGood(id).then((res) => {
        console.log(res);
        if (res.errno === 0) {
          this.dialogVisible = false;
          this.$message({
            type: "success",
            message: "删除成功",
          });
          this.getGoodList();
        }
      });
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