<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  background: rgb(35, 35, 35);
  color: rgb(240, 240, 240);
}
.app {
  background: rgb(35, 35, 35);
}
</style>
