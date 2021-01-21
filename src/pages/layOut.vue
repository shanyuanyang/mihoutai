<!--  -->
<template>
  <div>
    <nav-header></nav-header>
    <navbar></navbar>
    <container></container>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
export default {
  components: { NavHeader, Container, Navbar },
};
</script>
<style scoped>
.header {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  line-height: 50px;
  background: #2d3a4b;
}
.navbar {
  width: 230px;
  position: absolute;
  top: 50px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background: #545c64;
}
.main {
  position: absolute;
  left: 230px;
  top: 50px;
  right: 0px;
  bottom: 0px;
  padding: 10px;
  overflow-y: auto;
}
</style>