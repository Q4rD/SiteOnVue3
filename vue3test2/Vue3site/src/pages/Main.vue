<template>
  <div class="main_news"><p style="background-color:rgb(50, 50, 50); margin-left: 5px; margin-top: 3px;">Лента новостей</p> 
    <div id = "tb1" class="test-block"></div>
    <div id = "tb2" class="test-block"></div>
    <div id = "tb3" class="test-block"></div>
    <div id = "tb4" class="test-block"></div>
    <div id = "tb5" class="test-block"></div>
    <div id = "tb6" class="test-block"></div>
    <div id = "tb7" class="test-block"></div>
    <div id = "tb8" class="test-block"></div>
  </div>
  <div>
    <div class="blocks">
      <div class="block0">Популярные обсуждения</div>
      <div class="block1">каталог вышедших манг</div>
      <div class="block2">недавно вышедшие главы</div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    
  }
}
</script>

<style scoped>
  .main_news {
    overflow:hidden;
    width: auto;
    height: 200px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgb(50, 50, 50);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;
  }

  .test-block{
    position:relative;
    display: inline-block;
    height: 160px;
    width: 220px;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: rgb(40, 40, 40);
    border: 2px solid rgb(70, 70, 70);
  }
  .blocks {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
  }
  .block0 {
    width: 300px;
    height: 400px;
    background-color: rgb(50, 50, 50);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;
  }
  .block1 {
    width: 1000px;
    height: 580px;
    margin-left: 20px;
    background-color: rgb(50, 50, 50);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;
  }
  .block2 {
    width: 300px;
    height: 580px;
    margin-left: 20px;
    background-color: rgb(50, 50, 50);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;
  }
</style>
