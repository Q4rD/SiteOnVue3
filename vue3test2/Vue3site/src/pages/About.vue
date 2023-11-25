<template>
  <div class="blocks">
    <div class="info_panel">
      <p class="text" style="position: relative; background-color: rgb(50, 50, 50); font-size: 15px;"> 
      О нас и ответы на вопросы 
      </p>
      <p class="btn_block">
        <ClassicButon class="btn" id="info">о сайте</ClassicButon>
        <ClassicButon class="btn" id="catalog">каталог</ClassicButon>
        <ClassicButon class="btn" id="discussions">обсуждения</ClassicButon>
        <ClassicButon class="btn" id="contact">связь с нами</ClassicButon>
      </p>
    </div>
    <div class="info_block">
      <div class="indent_block">
        <p class="p-text" id="p1" style="display: block;">
          <h1 class="hs">приветствую тебя читатель на манга-сайте!
            <p class="hs_p">Здесь ты найдешь все виды японских, китайских, корейских, западных и русских комиксов.
            </p>
          </h1>
          <h2 class="hs">Большой выбор и хорошо настраиваемый каталог:
            <p class="hs_p">Здесь мы имеет все возможные жанры. С помощью каталога вы сможете отобрать по тем жанрам и тегам которые предпочитайте.
            </p>
          </h2>
          <h3 class="hs">Читай последние главы:
            <p class="hs_p">Мы стараемся быть актуальными для вас , выпуская главы вовремя на нашем сайте. Так что не пропусти возможность узнать, что происходит в последних обновлениях твоей любимой манги!
            </p>
          </h3>
          <h4 class="hs">Сохраняй свои избранные манги:
            <p class="hs_p">Тебе не придется терять свои произведения которое в данный момент читал. Просто добавь их в список "Избранное" и ты сможешь легко получать доступ к ним в любое время и в любом месте. И ещё есть "Закладка" - автоматическое сохранение страницы на которой вы остановились, так вы точно не забудите где остановились в последний раз!
            </p>
          </h4>
          <h5 class="hs">Обсуждайте прочитанное с другими:
            <p class="hs_p">Любишь обсуждать или делится своим мнением? То можешь перейти в “Обсуждения” и по общаться с другими пользователями. Можешь рассказать своё мнение или прочитать мнение других и оценить его.  
            </p>
          </h5>
          
        </p>
        <p class="p-text" id="p2" style="display: none;">
          вкладка 2
        </p>
        <p class="p-text" id="p3" style="display: none;">
          вкладка 3
        </p>
        <p class="p-text" id="p4" style="display: none;">
          вкладка 4
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicButon from '../components/UI/ClassicButon.vue';

export default {
    components: { ClassicButon},
    mounted() {
      var btn_info = document.getElementById("info");
      var btn_catalog = document.getElementById("catalog");
      var btn_discussions = document.getElementById("discussions");
      var btn_contact = document.getElementById("contact");
      btn_info.onclick = function() {
        p2.style.display = "none";
        p3.style.display = "none";
        p4.style.display = "none";
        p1.style.display = "block";
      }
      btn_catalog.onclick = function() {
        p3.style.display = "none";
        p4.style.display = "none";
        p1.style.display = "none";
        p2.style.display = "block";
      }
      btn_discussions.onclick = function() {
        p4.style.display = "none";
        p2.style.display = "none";
        p1.style.display = "none";
        p3.style.display = "block";
      }
      btn_contact.onclick = function() {
        p3.style.display = "none";
        p4.style.display = "none";
        p1.style.display = "none";
        p4.style.display = "block";
      }
    }
}
</script>

<style scoped>
.hs {
  background: rgb(50, 50, 50);
}
.hs_p {
  background: rgb(50, 50, 50);
  font-weight: normal;
}
.p-text {
  background-color: rgb(50, 50, 50);
  font-size: 15px;
}
  .text {
    text-align: center;
    height: 25px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .btn_block{
    position:relative;
    width: 95%;
    height: 90%;
    background-color: none;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;

  }
  .btn {
    width: 90%;
    border: 2px solid none;
    border-radius: 5px;
    margin-top: 5px;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 5px;
    
  }
  .blocks {
    margin-top: 20px;
    margin-bottom: 20px;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
  }
  .info_panel {
    display: inline-block;
    width: 250px;
    height: 600px;
    background-color: rgb(50, 50, 50);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;
  }
  .info_block {
    margin-left: 20px;
    width: 800px;
    height: 600px;
    background-color: rgb(50, 50, 50);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 5px;
  }
  .indent_block {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
