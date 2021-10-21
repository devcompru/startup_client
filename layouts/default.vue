<template>
  <div class="wrapper">
    <div class="background__image"></div>
    <header>
      <desktop/>
    </header>

    <main>

      <left-sidebar/>
      <Nuxt class="main__content"/>

    </main>
  </div>
</template>
<script>
import Desktop from "../components/main/menu/Desktop";
import LeftSidebar from "../components/main/LeftSidebar";
export default {
  name: "default.vue",
  components: {LeftSidebar, Desktop},
  data(){
        return{

         }
  },

  mounted() {

  },

  methods: {
  }
}
</script>
<style>
main{

  margin-top: 30px;
}
.main__content{
  margin-left: 220px;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgb(0 0 0 / 20%);
  min-height: 90vh;
  padding: 20px;

}

</style>
