<template lang="html">

  <section id="content">
    <div class="bg-top">
      <div class="bg-top-2">
        <div class="bg">
          <div class="bg-top-shadow">
            <div class="main">
              <div class="gallery p3">
                <div class="wrapper indent-bot">
                  <md-card>
                    <md-card-actions v-md-ink-ripple>
                      <!-- <div class="md-subhead">
                                            <span>autoplay</span>
                                            <span>（</span>
                                            <span>自动切换</span>
                                            <span>）</span>
                                        </div> -->
                      <!-- <md-button class="md-icon-button" target="_blank" href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/21-autoplay.vue">
                                            <md-icon>code</md-icon>
                                        </md-button> -->
                    </md-card-actions>
                    <md-card-media>
                      <!-- swiper -->
                      <swiper :options="swiperOption">
                        <swiper-slide>
                          <router-link to="/search"><img src="/static/assets/images/slider-img1.jpg" /></router-link>
                        </swiper-slide>
                        <swiper-slide>
                          <router-link to="/medical"><img src="/static/assets/images/slider-img2.jpg" /></router-link>                  
                        </swiper-slide>
                        <swiper-slide>
                          <router-link to="/product"><img src="/static/assets/images/slider-img3.jpg" /></router-link>          
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                      </swiper>
                    </md-card-media>
                  </md-card>
                </div>
                <div class="inner">
                  <div class="wrapper">
                    <span class="title img-indent3">HELLO!</span>
                    <div class="extra-wrap indent-top2">
                      <strong>{{webForm.infoRemark}}</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container_12">
                <div class="wrapper">
                  <article class="grid_12">
                    <div class="color-1">我们的服务清单</div>
                    <div class="wrapper">
                      <article class="grid_6 alpha">
                        <figure class="img-indent frame">
                          <img src="/static/assets/images/page1-img1.jpg" alt="" />
                        </figure>
                        <div class="extra-wrap">
                          <div class="indent-top">
                            <ul class="list-1">
                              <li>
                                <router-link to="/search"> <a href="#">海外置业</a></router-link>            
                              </li>
                              <li>
                                <router-link to="/medical"><a href="#">健康旅游</a></router-link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="clear"></div>
                      </article>
                      <article class="grid_6 omega">
                        <figure class="img-indent frame">
                          <img src="/static/assets/images/page1-img2.jpg" alt="" />
                        </figure>
                        <div class="extra-wrap">
                          <div class="indent-top">
                            <ul class="list-1">
                              <li>
                                <router-link to="/product"><a href="#">海外商贸</a></router-link>
                              </li>
                              <li>
                                <router-link to="/contacts"><a href="#">联系我们</a></router-link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="clear"></div>
                      </article>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>

      <div class="footer_bar">
        上海丰佐贸易有限公司
      </div>

    </div>
  </section>


</template>

<script>
import utility from "../utility.json";
export default {
  data() {
    return {
      utility: utility,
      swiperOption: {
        pagination: ".swiper-pagination",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
      },
      webForm: {
        infoRemark: "",
        infoImageList: []
      }
    };
  },
  mounted: function() {
    this.loadDataForm(); //加载数据列表
  },
  methods: {
    loadDataForm() {
      this.$http
        .get(this.utility.serverUrl + "web/getWebInfo")
        .then(function(response) {
          this.webForm = response.data.data;
        })
        .catch(function(response) {
          this.$message.error("服务器请求首页信息错误,请稍后再试...");
        });
    }
  }
};
</script>

<style>
.footer_bar {
  font-family: "Noto Sans CJK SC", "Source Han Sans CN";
  font-size: 24px;
  text-align: center;
  padding-top: 30px;
}
</style>