<template>
  <div>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
    >
      <el-form-item label="用户">
        <el-input
          v-model="formInline.user"
          placeholder="请输入查询内容"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
      },
    };
  },
  created() {},
  computed: {},
  methods: {
    onSubmit() {
      console.log(this.formInline.user);
    },
  },
};
</script>
<style scoped>
.demo-form-inline{
  margin: 20px;
}
</style>
