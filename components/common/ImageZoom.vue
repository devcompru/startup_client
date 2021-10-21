<template>
  <section>
      <div class="thumbnail" :style="'background-image: url(' + image + ')'" @click="fullscreen=true"></div>
      <div class="fullscreen shadow" :style="'background-image: url(' + image + ')'"  v-if="fullscreen" @click="fullscreen=false"></div>
  </section>
</template>

<script>
export default {
  props:[
    'image','image_tmb',
  ],
  name: "ImageZoom",
  data(){
    return{
      fullscreen:false
    }
  }
}
</script>

<style scoped>
.thumbnail, .fullscreen{
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: inherit;
  height: inherit;
  transform: scale(1);
  transition: 0.3s ease-in;
  margin: inherit;
  padding: inherit;
}
.thumbnail:hover{
  cursor: zoom-in;
  transform: scale(1.01);
  transition: 0.3s ease-in;
}

.fullscreen{
  cursor: zoom-out;
  position: fixed;
  background-size: contain;
  box-shadow: 0 0 5px 100px rgb(0 0 0 / 80%);
  top: 20px;
  left: 20px;
  width: 95vw;
  height: 95vh;
  z-index: 2;
}
</style>