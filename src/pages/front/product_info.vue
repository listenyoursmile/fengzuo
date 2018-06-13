<template lang="html">

  <div class="house_info_main">
    <ul>
      <li class="house_title">{{form.goodsName}}</li>
      <!-- <li v-for="item in form.hosueInfoImgUrlList">
        {{item}}
      </li> -->
      <li>
        <div class="house_first_floor">

          <div class="house_md_cared">
          	<el-carousel trigger="click" style="height:100%;">
				      <el-carousel-item v-for="(item,index) in form.goodsImageList" :key="index">
				        <img style="width: 100%;" v-bind:src="item" />
				      </el-carousel-item>
				    </el-carousel>
            <!--<md-card>
              <md-card-media>-->
                <!-- swiper -->
                <!--<swiper>-->
                  <!--<swiper-slide v-for="item in form.goodsImageList">
                    <img style="width: 100%;" v-bind:src="item" />
                  </swiper-slide>-->
                   <!--<swiper-slide><img src="/static/assets/images/aa2.jpg" /></swiper-slide>
                     <swiper-slide><img src="/static/assets/images/aa3.jpg" /></swiper-slide>
                     <swiper-slide><img src="/static/assets/images/aa4.jpg" /></swiper-slide> -->

                  <!--<div class="swiper-pagination" slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>-->
                <!--</swiper>
              </md-card-media>
            </md-card>-->
          </div>
          <span class="house_base_info">
            <ul>
              <li style="font-size:24px;padding-bottom:10px">
                平台编号：{{form.goodsPlatformId}}    淘宝编号：{{form.goodsSerial}}
              </li>
              <li style="font-size:24px;padding-bottom:10px">
                <a class="sel_btn" :href="form.taobaoUrl" target="_blank">
                  直达淘宝店
                  </a>
              </li>
              <li style="height:10px">
                <div class="dashed"></div>
              </li>
              <li>
                <span>商品品牌: </span>
                <span>{{form.brandName}}</span>
                <span style="padding-left:30px">原产国: </span>
                <span>{{form.cityName}}</span>
              </li>

              <li>
                <span>商品分类: </span>
                <span>{{form.gcName}}</span>
                <span style="padding-left:30px">商品售价: </span>
                <span>{{form.goodsMarketPrice}}元</span>
              </li>

              <!-- <li>
                <div>使用面积: {{form.useArea}}平方英尺</div>
              </li>-->
              <li> 

                <div class="consult_goods_dash_box">
                  <span style="width:100px;">购买咨询</span>
                  <el-row>
                    <el-col :span="24">
                      <div class="consult_dash_box_bg"></div>
                    </el-col>
                  </el-row>
                  <el-form ref="askForm" :model="askForm" label-width="80px">
                    <el-col :span="11" style="padding-left:5px">
                      <el-input v-model="askForm.name" placeholder="请输入姓名"></el-input>
                    </el-col>
                    <el-col :span="12" style="padding-left:25px">
                      <el-select v-model="askForm.sex" placeholder="请选择性别">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="11" style="padding-left:5px;padding-top:5px">
                      <el-input v-model="askForm.mobile" placeholder="请输入手机号码"></el-input>
                    </el-col>
                    <el-col :span="12" style="padding-left:25px;padding-top:5px">
                      <el-input v-model="askForm.email" placeholder="请输入电子邮箱"></el-input>
                    </el-col>
                    <el-col :span="11" style="padding-left:5px">
                      <el-button type="warning" @click="submitInfo" style="text-align:left;width:177px;padding-left:40px">提交</el-button>
                    </el-col>
                    <el-col :span="11" style="padding-left:25px">
                      <el-button style="text-align:left;width:175px;padding-left:40px">取消</el-button>
                    </el-col>

                  </el-form>
                </div>

              </li>
            </ul>

          </span>
        </div>
      </li>
    </ul>

    <div class="house_info_text">
      <ul>
        <!-- <li>
          <span class="title_bg">
            <img src="/static/assets/images/title_bg.png" />
          </span>
          <span class="house_title">商品信息</span>
        </li>
        <li>
          {{form.houseInfo}}
        </li>
        <li>
          <div class="dashed"></div>
        </li> -->
        <li>
          <span class="title_bg">
            <img  src="/static/assets/images/title_bg.png" />
          </span>
          <span class="house_title">产品信息</span>
        </li>
        <li>
          <span class="base_info_label_span">品名</span>
          <span class="base_info_span">{{form.goodsName}}</span>
        </li>
        <li>
          <span class="base_info_label_span">原产国</span>
          <span class="base_info_span">{{form.cityName}}</span>
        </li>
        <li>
          <span class="base_info_label_span">商品分类</span>
          <span class="base_info_span">{{form.gcName}}</span>
        </li>
        <li>
          <span class="base_info_label_span">保质期</span>
          <span class="base_info_span">{{form.endTimeStr}}</span>
        </li>
        <li>
          <span class="base_info_label_span">生产日期</span>
          <span class="base_info_span">请见实物包装标识</span>
        </li>
        <li>
          <span class="base_info_label_span">商品描述</span>
          <span class="base_info_span">{{form.goodsBody}}</span>
        </li>
        <li>
          <div class="dashed"></div>
        </li>
        <li>
          <span class="title_bg">
            <img src="/static/assets/images/title_bg.png" />
          </span>
          <span class="house_title">商品介绍</span>
          <ul>
            <li v-for="item in form.goodsDescList">
                  <img style="width: 100%;" v-bind:src="item" />
            </li>
          </ul>
        </li>
        <li>
          <!-- <img v-bind:src="" /> -->
        </li>
        <!-- <li>
          <div class="dashed"></div>
        </li>
        <li>
          <span class="title_bg">
            <img src="/static/assets/images/title_bg.png" />
          </span>
          <span class="house_title">项目优势</span>
        </li>
        <li>
          {{form.remark}}
        </li> -->
      </ul>
    </div>
  </div>

</template>
<script>
  import utility from "../utility.json";
  export default {
    data() {
      return {
        utility: utility,
        form: {
          goodsId: "",
          goodsName:"",
          goodsPlatformId:"",
          goodsSerial:"",
          brandName:"",
          cityName:"",
          goodsMarketPrice:"",
          gcName:"",
          endTimeStr:"",
          goodsImgMore:"",
          goodsImageList: [],
          goodsDescList:[]
        },
        askForm: {
          name: "",
          sex: "",
          mobile: "",
          email: "",
          houseId: "",
          requestType: ""
        },
        swiperOption: {
          pagination: ".swiper-pagination",
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
        }
      };
    },
    mounted: function () {
      //this.tabHeight = document.body.scrollHeight - this.utility.cusHight;//tab1高度自适应
      this.loadDataForm(); //加载数据列表
    },
    methods: {
      onSubmit() {
        console.log("submit!");
      },
      loadDataForm() {
        console.log("goodsId: " + this.$route.params.goodsId);
        this.$http
          .post(this.utility.serverUrl + "goods/goodsDetail", {
            data: {
              goodsId: this.$route.params.goodsId
            }
          })
          .then(response => {
            this.form = response.data.data;
            //console.log("houseInfoImgUrlList:" + this.form.houseInfoImgUrlList);
          })
          .catch(function (response) {
            this.$message.error("服务器请求错误,请稍后再试...");
          });
      },
      submitInfo() {
        this.askForm.goodsId = this.form.goodsId;
        this.askForm.requestType = "2";
        this.$http
          .post(this.utility.serverUrl + "guestbook/save", {
            data: this.askForm
          })
          .then(response => {
            if (response.data.respCode == this.utility.succCode) {
              this.$message.success("提交成功,我们会尽快和您取得联系!");
            } else {
              this.$message.error("保存失败，原因：" + response.data.respMemo);
            }
          })
          .catch(function (response) {
            this.$message.error("服务器请求错误,请稍后再试...");
          });
      },
      submitToTaobao() {
        this.$
      }
    }
  };
</script>

<style>
	 .el-carousel .el-carousel__container{
	 	height: 100%;
	 }
.sel_btn{
            height: 30px;
            width: 100px;
            line-height: 21px;
            padding: 0 11px;
            color: aliceblue;
            background: #f7ba2a;
            border: 1px #f7ba2a solid;
            border-radius: 3px;
            /*color: #fff;*/
            display: inline-block;
            text-decoration: none;
            font-size: 18px;
            outline: none;
            padding-top: 6px;
        }
</style>
