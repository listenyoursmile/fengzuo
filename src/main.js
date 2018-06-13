// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint indent: "error" */
import 'normalize.css'
import 'element-ui/lib/theme-default/index.css'
import Element from 'element-ui'
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
// import App from './App'
import routes from './routes'
import FrontApp from './FrontApp'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MainBar from './components/front/MainBar'

//import echarts from 'echarts'

Vue.use(Element)
Vue.use(VueRouter)
Vue.use(vueResource)
Vue.use(VueAwesomeSwiper)

const router = new VueRouter({
  routes
})



/* eslint-disable no-new */
new Vue({
  el: '#frontApp',
  template: '<FrontApp/>',
  components: {
    FrontApp
  },
  router
})