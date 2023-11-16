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
      <my-button-bar @click="$router.push('/catalog')">католог</my-button-bar>
      <my-button-bar @click="$router.push('/news')">новости</my-button-bar>
      <my-button-bar @click="$router.push('/discussions')">обсуждения</my-button-bar>
      <my-button-bar @click="$router.push('/about')">О нас</my-button-bar>
    </div>
      <p class="account"><img src="./images/sd.gif" height="40"></p>
      <div id = "modal1" class="login_modal"></div>
  </div>
</template>
<script>
import MyButtonBar from './UI/MyButtonBar.vue';

export default {
    components: { MyButtonBar },
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
  display: block;
  position: -webkit-sticky;
  position:absolute;
  height: 150px;
  width: 300px;
  top: 70px;
  left: 67%;
  z-index: 1050;
  background-color: rgb(50, 50, 50);
  border: 2px solid rgb(70, 70, 70);
  border-radius: 5px;
  /* box-shadow: 0 0 5px black; */
}
.search {
position:relative;
margin-left: auto;
margin-right: auto;
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