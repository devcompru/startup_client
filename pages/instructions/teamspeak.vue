<template>
<section>
  <h1>Инструкция по настройке TeamSpeak 3</h1>

  <p>
  <h3>1. Установка программы</h3><br>
  1.1 Необходимо скачать и установить клиент с официального сайта <a href="https://www.teamspeak.com/ru/downloads/" target="_blank">https://www.teamspeak.com/ru/downloads/</a>
  <br>Во время установки может потребоваться установить Microsoft Visual C++, с этим нужно согласиться.
  <br>При запросе установить Overwolf - нужно отказаться. При желании можете ознакомиться с функциями Overwolf, но в Perfect World он работает коряво.
  </p>
  <p>
  <h3>2. Запустить программу от имени администратора, это можно сделать двумя способами:</h3><br>
  2.1 Каждый раз нажимать правой клавишей мыши по ярлыку и выбирать пункт <b>Запуск от имени администратора</b><br>
  2.2 Нажать правой клавишей мыши и выбрать пункт <b>Свойства</b>. Во вкладке Совместимость поставить галочку <b>Запускать эту программу от имени администратора</b>.<br>
  <image-zoom class="image shadow" image="/img/instructions/ts/ts3_1.jpg"/>
  </p>
  <p>
  <h3>3. Настройка кнопки разговора:</h3><br>
  3.1 Нажать <b>Инструмменты</b> выбрать пункт <b>Параметры</b>.<br>
  3.2 Выбрать пункт <b>Запись</b> отметить пункт <b>Кнопка разговора</b> и выбрать кнопку разговора<br>
  3.3 При желании можно протестировать настройки, нажав на <b>Начать тестирование.</b><br>
  <image-zoom class="image shadow" image="/img/instructions/ts/ts3_3_1.jpg"/>
  <image-zoom class="image shadow" image="/img/instructions/ts/ts3_3_2.jpg"/>

  </p>
  <p>
  <h3>4. Подключение к серверу:</h3><br>
  4.1 Выбрать пункт меню <b>Подключения</b> далее выбрать <b>Подключиться</b><br>
  4.2 В поле адрес сервера ввести startup.vts3.ru, в поле <b>Псевдоним</b> ввести игровой ник и желательно в скобках ввести имя<br>

  <image-zoom class="image shadow" image="/img/instructions/ts/ts3_4_1.jpg"/>

  </p>
  <p>
    P.S. При желании (особенно если используется несколько серверов) можно создать закладку для сервера,
    для этого необходимо выбрать пункт <b>Закладки</b> далее пункт <b>Управление закладками</b>
    <image-zoom class="image shadow" image="/img/instructions/ts/ts3_5_1.jpg"/>

  </p>
</section>
</template>

<script>
import ImageZoom from "../../components/common/ImageZoom";
export default {
  name: "teamspeak",
  components: {ImageZoom}
}
</script>

<style scoped>
.image{
  width: 500px;
  height: 300px;
  margin-top: 20px;
}
</style>