<template>
<div id="container">
  <TopBar></TopBar>
  <Breadcrumb></Breadcrumb>
  <MainBar></MainBar>
  <FooterBar></FooterBar>
</div>
</template>

<script>
import TopBar from './TopBar.vue'
import FooterBar from './Footer.vue'
import Breadcrumb from './Breadcrumb.vue'
import MainBar from './MainBar.vue'

export default {
  components: {
    TopBar,
    FooterBar,
    Breadcrumb,
    MainBar
  }
}
</script>
