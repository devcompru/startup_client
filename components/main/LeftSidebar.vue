<template>
<section class="left__sidebar">
  <everyday/>
  <events-today/>
  <officers/>
</section>
</template>

<script>
import Everyday from "../LeftSidebar/Everyday";
import EventsToday from "../LeftSidebar/EventsToday";
import Officers from "../LeftSidebar/Officers";
export default {
  name: "LeftSidebar",
  components: {Officers, EventsToday, Everyday}
}
</script>

<style scoped>
.left__sidebar{
  width: 200px;
  float: left;
  margin-right: 15px;

}
</style>