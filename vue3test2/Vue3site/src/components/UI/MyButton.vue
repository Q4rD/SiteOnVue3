<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: rgb(240, 240, 240);
  background: rgb(121, 33, 33);
  border: none;
}
.btn:hover {
  padding: 10px 15px;
  background: none;
  color: rgb(240, 240, 240);
  background: rgb(111, 20, 20);
}
</style>
