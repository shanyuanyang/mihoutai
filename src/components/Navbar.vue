<!--  -->
<template>
  <div class="navbar">
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/goodUpload">商品上传</el-menu-item>
          <el-menu-item index="/goods">商品管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/cart">
        <i class="el-icon-s-shop"></i>
        <span slot="title">购物车管理</span>
      </el-menu-item>
      <el-menu-item index="/order">
        <i class="el-icon-s-claim"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route.path);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.el-menu {
  border-right: none;
}
</style>