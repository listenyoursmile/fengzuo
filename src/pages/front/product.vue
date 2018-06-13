<template>
<div id="product">
  <ProductClass></ProductClass>
  <router-view></router-view>
</div>
</template>

<style>
#product {
  display: flex;
  width: 1300px;
  height: 100%;
  padding-top: 5px;

  /*position: fixed;*/
  margin-top: 5px;
  color: #dbdbdb;
  margin: 0 auto;
}
</style>

<script>
import ProductClass from "./productClass.vue";
// import ProductMainBar from "./ProductMainBar.vue";

// import VueRouter from "vue-router";

// Vue.use(VueRouter);

// //配置路由词典
// const myRoutes = [{ path: "/productList", component: ProductMainBar }];

// const myRouter = new VueRouter({
//   routes: myRoutes
// });

// new Vue({
//   router: myRouter,
//   el: "#product"
// });

export default {
  name: "product",
  components: {
    ProductClass
  }
};
</script>

<!-- // <style lang="sass">
// body
//   background: slateblue;
//
</style> -->
