<template>
  <div class="navbar">
    <div class="logo">
      <div @click="$router.push('/')">
        <p><img src="./images/cube.png" height="50"><img src="./images/cubetext.png" height="50"></p>
      </div>
  </div>
  <div class="search">
    <input class="search_in" type="text" placeholder="Поиск...">
  </div>
    <div class="navbar__btns">
      <my-button-bar @click="$router.push('/')">главная</my-button-bar>
      <my-button-bar @click="$router.push('/catalog')">каталог</my-button-bar>
      <my-button-bar @click="$router.push('/news')">новости</my-button-bar>
      <my-button-bar @click="$router.push('/discussions')">обсуждения</my-button-bar>
      <my-button-bar @click="$router.push('/about')">О нас</my-button-bar>
    </div>
      <p id = "btn_acc" class="account"><img src="./images/sd.gif" height="40"></p>
      <div id = "modal1" class="login_modal" style="display: none;">
        <span class="close_m">&times;</span>
        <div class="inputs">
          <p class="int_string">
            <input type="text" class = "stl_string" placeholder=" Логин/эл.почта">
            <input type="text" class = "stl_string" placeholder=" Пароль" style="margin-top: 10px;">
            <div class="pos-but">
              <classic-buttom class = "close_reg" @click="$router.push('/registration')">регестрация</classic-buttom>
              <classic-buttom class = "close_log" @click="$router.push('/myprofile')">Вход</classic-buttom>
            </div>
          </p>
        </div>
      </div>
  </div>
</template>
<script>
import MyButtonBar from './UI/MyButtonBar.vue';
import ClassicButtom from './UI/ClassicButon.vue';

export default {
    components: { MyButtonBar , ClassicButtom  },
    mounted() {
      var modal = document.getElementById("modal1");
      var btn = document.getElementById("btn_acc");
      var span = document.getElementsByClassName("close_m")[0];
      var closelog = document.getElementsByClassName("close_log")[0];
      var closereg = document.getElementsByClassName("close_reg")[0];
      btn.onclick = function() {
        modal.style.display = "block";
      }
      span.onclick = function() {
        modal.style.display = "none";
      }
      closelog.onclick = function() {
        modal.style.display = "none";
      }
      closereg.onclick = function() {
        modal.style.display = "none";
      }
      // window.onclick = function(event) {
      //   if (event.target == modal) {
      //     modal.style.display = "none";
      //   }
      // }
    }
}
</script>

<style scoped>
* {
  color: rgb(240, 240, 240);
  background-color: rgb(50, 50, 50);
}

.logo {
  display: flex;
  margin-right: 20px;
  margin-left: auto;
  cursor: pointer;
  height: auto;
  width: auto;
}
.account {
display: flex;
 margin-right: auto;
 border: 2px solid rgb(121, 33, 33);
 cursor: pointer;

}
.navbar {
  background-color: rgb(50, 50, 50);
  display: flex;
  align-items: center;
  border: 2px solid rgb(70, 70, 70);
  border-radius: 0px 0px 5px 5px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1050;
}
.navbar__btns {
  margin-right: auto;
}
.login_modal {
  position: -webkit-sticky;
  position:absolute;
  height: 150px;
  width: 300px;
  top: 70px;
  margin-left: 70.5%;
  z-index: 1050;
  background-color: rgb(50, 50, 50);
  border: 2px solid rgb(70, 70, 70);
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.700);
}
.close_m {
  color: rgb(100, 100, 100);
  float: right;
  margin-right: 5px;
  font-size: 20px;
  font-weight: bold;
}

.close_m:hover {
  color: rgb(200, 200, 200);
  cursor: pointer;
}

.inputs {
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
}

.pos-but{
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 20px;
}
.stl_string {
width: 100%;
height: 15px;
background-color: rgb(35, 35, 35);
border: 2px solid rgb(70, 70, 70);
border-radius: 5px;
}
.search {
margin-left: 10px;
margin-right: 10px;
width: 20%;
background-color: rgb(35, 35, 35);
border: 2px solid rgb(70, 70, 70);
border-radius: 5px;
}
.search_in {
height: 20px;
width: 100%;
background-color: rgb(35, 35, 35);
}
</style>