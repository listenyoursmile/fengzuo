<template>
<div id="frontApp">
  <TopBar></TopBar>
  <MainBar></MainBar>
  <FooterBar></FooterBar>
</div>
</template>

<script>
import "./assets/css/style.css";
import "./assets/css/ie.css";
import "./assets/css/reset.css";
import "./assets/css/grid.css";
import TopBar from "./components/front/TopBar.vue";
import MainBar from "./components/front/MainBar.vue";
import FooterBar from "./components/front/FooterBar.vue";

export default {
  name: "frontApp",
  components: {
    TopBar,
    MainBar,
    FooterBar
  }
};
</script>
