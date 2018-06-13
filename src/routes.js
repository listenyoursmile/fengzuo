/* eslint indent: "error" */


export default [
{
  path: "/",
  component: resolve => require(["./pages/front/about.vue"], resolve)
},
// {
//   path: "/admin",
//   component: resolve => require(["./App.vue"], resolve)
// },
{
  path: "/formPage",
  component: resolve => require(["./pages/home/formPage.vue"], resolve)
},
{
  path: "/home1",
  component: resolve => require(["./pages/home/home1.vue"], resolve)
},
{
  path: "/col1",
  component: resolve => require(["./pages/home/col1.vue"], resolve)
},
{
  path: "/report",
  component: resolve => require(["./pages/home/report.vue"], resolve)
},
{
  path: "/report1",
  component: resolve => require(["./pages/home/report1.vue"], resolve)
},
{
  path: "/about",
  component: resolve => require(["./pages/front/about.vue"], resolve)
},
{
  path: "/search",
  component: resolve => require(["./pages/front/search.vue"], resolve)
},
{
  path: "/info/:id",
  name: "info",
  component: resolve => require(["./pages/front/house_info.vue"], resolve)
},
{
  path: "/goodsInfo/:id",
  name: "goodsInfo",
  component: resolve => require(["./pages/front/product_info.vue"], resolve)
},
{
  path: "/contacts",
  component: resolve => require(["./pages/front/contacts.vue"], resolve)
},
{
  path: "/medical",
  component: resolve => require(["./pages/front/medical.vue"], resolve)
},
{
  path: "/product",
  component: resolve => require(["./pages/front/product.vue"], resolve),
  children: [
  {
    path: "/productList/:gcId",
    name: "productList",
    // path: "/productList",
    component: resolve => require(["./pages/front/productList.vue"], resolve)
  }]
}]