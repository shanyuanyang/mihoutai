<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="副标题" prop="subName">
        <el-input v-model="ruleForm.subName"></el-input>
      </el-form-item>
      <el-form-item label="介绍" prop="introduce">
        <el-input type="textarea" v-model="ruleForm.introduce"></el-input>
      </el-form-item>
      <el-form-item label="单价" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="stock">
        <el-input v-model="ruleForm.stock"></el-input>
      </el-form-item>
      <el-upload
        class="upload-demo"
        drag
        action="http://localhost:3000/api/utils/upload"
        :on-preview="handlePreview"
        :on-success="handleSuccess"
        with-credentials="true"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <!-- <img v-if="picture" :src="picture" class="avatar" /> -->
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import goodApi from "../api/good";
export default {
  data() {
    return {
      picture: "111",
      ruleForm: {
        name: "",
        subName: "",
        introduce: "",
        price: "",
        stock: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        subName: [{ required: true, message: "请输入副标题", trigger: "blur" }],
        introduce: [
          { required: true, message: "请输入商品详情", trigger: "blur" },
        ],
        price: [{ required: true, message: "请输入单价", trigger: "blur" }],
        stock: [{ required: true, message: "请输入库存", trigger: "blur" }],
      },
    };
  },
  created() {},
  computed: {},
  methods: {
    handlePreview() {},
    handleSuccess(res) {
      console.log(res);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let { name, subName, introduce, price, stock } = this.ruleForm;
          let picture = "1000.png";
          let data = { name, subName, introduce, price, stock, picture };
          goodApi.addGood(data).then((res) => {
            console.log(res);
            if (res.errno == 0) {
              this.$message({
                type: "success",
                message: "上传成功",
              });
              this.resetForm(formName);
            }
          });
          // console.log(this.ruleForm)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.demo-ruleForm {
  width: 500px;
  margin-top: 10px;
}
.upload-demo {
  margin: 20px 0 20px 120px;
}
</style>
