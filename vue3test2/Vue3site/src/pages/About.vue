<template>
  <div>
    <div class="blocks">
      <p class="info_block">i wanna cry</p>
    </div>
    <p class="footbar"></p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .blocks {
    margin-top: 5%;
    margin-bottom: 5%;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
  }
  .info_block {
    display: flex;
    width: 80%;
    height: 600px;
    background-color: rgb(50, 50, 50);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;
  }
  .footbar {
    margin-top: 100px;
    background-color: rgb(50, 50, 50);
    box-sizing: border-box;
    /* position:absolute; */
    display: flex;
    bottom:0;
    width:100%;
    height:100px;
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px 5px 0px 0px;
  }
</style>
