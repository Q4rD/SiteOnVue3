<template>
  <p class="main_news">Лента новостей</p>
  <div>
    <div class="blocks">
      <p class="block1">каталог вышедших манг</p>
      <p class="block2">недавно вышедшие главы</p>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
  .main_news {
    width: auto;
    height: 200px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgb(50, 50, 50);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;
  }

  .blocks {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
  }
  .block1 {
    width: 1000px;
    height: 600px;
    background-color: rgb(50, 50, 50);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;
  }
  .block2 {
    width: 300px;
    height: 600px;
    margin-left: 20px;
    background-color: rgb(50, 50, 50);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;
  }
</style>
