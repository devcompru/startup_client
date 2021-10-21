<template>
<section>
  <div class="logo">StartUP</div>
  <nav>
    <ul class="main_menu no__list__style ">
      <li><nuxt-link to="/">Главная</nuxt-link></li>
      <li><nuxt-link to="/main/ustav">Устав</nuxt-link></li>
      <li><nuxt-link to="/main/diplomacity">Дипломатия</nuxt-link></li>
      <li><nuxt-link to="/main/contacts">О клане</nuxt-link></li>
      <li><nuxt-link to="/">Новости</nuxt-link></li>

    </ul>
  <hr>
  </nav>



</section>
</template>

<script>
export default {
  name: "Desktop"
}
</script>

<style scoped>
a:link{
  text-decoration: none;
  color: black;
  font-size: inherit;
  font-family: inherit;
  width: 100%;
}
a:visited{
  color: black;
}
section{
  display: inline-flex;
  width: 100%;

}
nav{
  width: 100%;
  margin-left: 50px;
}
.main_menu, nav{

  height: 2em;
  margin-bottom:5px;

}
.main_menu li{
  display: inline-flex;
  padding-right: 10px;
  font-size: 1.2em;
  width: 18%;
  text-align: center;
}

.logo{
  font-family: BeaumarchaisC;
  font-size: 3em;
  margin-right: 10px;
}
.main_menu a{
  transform: scale(1);
  transition: 0.5s ease-out;
}
.main_menu a:hover{
  transform: scale(1.1);
  transition: 0.5s ease-in;
}
a.nuxt-link-exact-active{
  font-weight: bold;
  transform: scale(1.1);
}

</style>