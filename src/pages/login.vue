<template>
  <div class="login-container">
    <!-- :rules="rules" 表单验证, ref 相当于 id，:model 表单数据对象, label-width 表单域标签的的宽度 -->
    <el-form
      :rules="rules"
      ref="form"
      :model="form"
      label-width="80px"
      class="login-form"
    >
      <h2 class="login-title">小米后台管理系统</h2>
      <el-form-item
        label="帐号"
        prop="userName"
      >
        <el-input
          v-model="form.userName"
          placeholder="请输入帐号"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('form')"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from "../api/login.js";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {},
      rules: {
        userName: [
          // 对应el-form-item 的 prop 值
          { required: true, message: "请输入有效帐号", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入有效密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapActions({ saveUserInfo: "saveUserInfo" }),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const { userName, password } = this.form;
          console.log(userName, password);
          login(userName, password).then((res) => {
            console.log(res);
            if (res.errno == 0) {
              let userInfo = {};
              userInfo.userName = res.data.userName;
              userInfo.id = res.data.id;
              this.saveUserInfo(userInfo);
              this.$cookie.set("userId", res.data.id, { expires: "Session" });
              this.$message({ message: "登录成功", type: "success" });
              this.$router.push("/");
              this.$message({
                message: "登录成功",
                type: "success",
              });
            } else {
              this.$message({
                message: `${res.message}`,
                type: "warning",
              });
            }
          });
        } else {
          this.$message({
            message: "请输入有效账号或密码",
            type: "warning",
          });
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
.login-form {
  width: 350px;
  margin: 160px auto;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 20px;
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: url("../../assets/login.jpg"); */
  overflow: hidden;
}
.login-title {
  text-align: center;
  color: #303133;
}
</style>

