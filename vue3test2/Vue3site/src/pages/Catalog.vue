<template>
    <div>
        <div class="blocks">
            <div class="block1">Каталог по тегам</div>
            <div class="block2">Теги
              <p class="tags-position">
                <a><input type="checkbox">1</a>
                <a><input type="checkbox">2</a>
                <a><input type="checkbox">3</a>
                <a><input type="checkbox">4</a>
              </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .blocks {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display:flex;
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
  .tags-position {
    height: 100%;
    display:table;
    position:relative;
    margin-top: 20px;
    background: none;
    background-color: none;
  }
  a{
    margin-left: 10px;
    background: none;
  }
</style>