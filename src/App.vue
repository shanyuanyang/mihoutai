<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getUserInfo } from "./api/login";
import Cookies from "./utils/cookies";
export default {
  name: "app",
  components: {},
  mounted() {},
  created() {
    if (Cookies.getCookie("userId")) {
      this.getName();
    }
  },
  methods: {
    getName() {
      getUserInfo().then((res) => {
        console.log(res);
        let userInfo = {};
        userInfo.userName = res.data.userName;
        userInfo.id = res.data.id;
        this.$store.dispatch("saveUserInfo", userInfo);
      });
    },
  },
};
</script>

<style>
</style>
