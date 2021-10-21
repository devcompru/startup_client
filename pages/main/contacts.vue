<template>
<section>
  <h1>О клане</h1>
  <ul>
    <li class="contact__item std_link">
      <a class="std_link" href="https://vk.com/pwstartup" target="_blank">
        <div class="center">Группа Вконтакте (группа, беседка, фоточки и прочая социалочка): </div>
        <i class="icon_vk" v-html="$store.state.icons.vk"></i>
      </a>
    </li>
    <li class="contact__item">
      <a class="std_link" href="ts3server://startup.vts3.ru">
        <div class="center">Teamspeak3 (голосовое общение): </div>
        <i class="icon_teamspeak" v-html="$store.state.icons.ts3"></i>
      </a>
      <br>

      <nuxt-link to="/instructions/teamspeak" class="std_link">
        <div class="center">Инструкция по настройке TeamSpeak3</div>
      </nuxt-link>
    </li>


  </ul>

</section>
</template>

<script>
/*
  <client-only placeholder="loading...">
    <ckeditor-nuxt v-model="contentHolder" :config="editorConfig"  />
  </client-only>
 */
export default {
  components: {
    'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } },
  },
  name: "contacts",
  data(){
    return{
      editorConfig: {
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
          rows:"10",
          headers: {
            'Authorization': 'optional_token'
          }
        }
      },
      contentHolder: ""
    }
  }
}
</script>

<style>
ul{
  list-style: none;
}
.icon_vk svg {
  width: 30px;
  height: 30px;
}
.icon_teamspeak  svg {
  width: 200px;
  height: 50px;
}
.contact__item a{
  display: inline-flex;
  margin: 10px 0 10px;
 align-items: center;
}
</style>