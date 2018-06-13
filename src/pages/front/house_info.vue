<template lang="html">

  <div class="house_info_main">
     <ul>
       <li class="house_title">{{form.houseCnName}}</li>
       <li v-for="item in form.hosueInfoImgUrlList">
        {{item}}
       </li>
       <li>
         <div class="house_first_floor">

           <span class="house_md_cared">
               <md-card>
                 <md-card-media>
                   <!-- swiper -->
                   <swiper :options="swiperOption">
                     <swiper-slide v-for="item in form.houseInfoImgUrlList"><img v-bind:src="item" /></swiper-slide>
                     <!-- <swiper-slide><img src="/static/assets/images/aa2.jpg" /></swiper-slide>
                     <swiper-slide><img src="/static/assets/images/aa3.jpg" /></swiper-slide>
                     <swiper-slide><img src="/static/assets/images/aa4.jpg" /></swiper-slide> -->

                     <div class="swiper-pagination" slot="pagination"></div>
                     <div class="swiper-button-prev" slot="button-prev"></div>
                     <div class="swiper-button-next" slot="button-next"></div>
                   </swiper>
                 </md-card-media>
               </md-card>
            </span>
            <span class="house_base_info">
              <ul>
                <li style="font-size:24px;padding-bottom:10px">
                  总价：${{form.priceRmb}}
                </li>
                <li style="height:10px">
                    <div class="dashed"></div>
                </li>
                <li>
                  <span >国家: </span>
                  <span >{{form.countryName}}</span>
                  <span style="padding-left:30px">城市: </span>
                  <span >{{form.region}}</span>
                </li>

                <li>
                  <span >房屋类型: </span>
                  <span>{{form.typeName}}</span>
                  <span style="padding-left:30px">房屋单价: </span>
                  <span>${{form.unitPrice}}元</span>
                </li>

                <li>
                  <div>使用面积:  {{form.useArea}}平方英尺</div>   
                </li>
                <li>

                  <div class="consult_dash_box">
                  <span style="width:100px;">预约咨询</span>
                  <el-row>
                      <el-col :span="24"><div class="consult_dash_box_bg"></div></el-col>
                  </el-row>
                  <el-form ref="askForm" :model="askForm" label-width="80px">
                    <el-col :span="11" style="padding-left:5px">
                      <el-input v-model="askForm.name" placeholder="请输入姓名"></el-input>
                    </el-col>
                    <el-col :span="12" style="padding-left:25px">
                        <el-select v-model="askForm.sex" placeholder="请选择性别" >
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
        <li>
          <span class="title_bg"><img src="/static/assets/images/title_bg.png" /></span>
          <span class="house_title">房屋介绍</span>
        </li>
        <li>
          {{form.houseInfo}}
        </li>
        <li>
            <div class="dashed"></div>
        </li>
        <li>
          <span class="title_bg"><img src="/static/assets/images/title_bg.png" /></span>
          <span class="house_title">基本信息</span>
        </li>
        <li>
          <span class="base_info_label_span">房屋地址</span>
          <span class="base_info_span">{{form.address}}</span>
        </li>
        <li>
          <span class="base_info_label_span">房屋结构</span>
          <span class="base_info_span">2室1厅1卫</span>
        </li>
        <li>
          <span class="base_info_label_span">车位数</span>
          <span class="base_info_span" >{{form.parkNum}}</span>
        </li>
        <li>
          <span class="base_info_label_span">建造年份</span>
          <span class="base_info_span">{{form.buildYear}}</span>
        </li>
        <li>
          <span class="base_info_label_span">物业税</span>
          <span class="base_info_span">{{form.houseDuty}}</span>
        </li>
        <li>
            <div class="dashed"></div>
        </li>
        <li>
          <span class="title_bg"><img src="/static/assets/images/title_bg.png" /></span>
          <span class="house_title">学区信息</span>
        </li>
        <li>
          <span v-for="(school,index) in form.belongSchoolsName">
            {{index+1}}.{{school}}<br>
          </span>
        </li>
        <li>
            <div class="dashed"></div>
        </li>
        <li>
          <span class="title_bg"><img src="/static/assets/images/title_bg.png" /></span>
          <span class="house_title">项目优势</span>
        </li>
        <li>
          {{form.remark}}
        </li>
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
        id: "",
        houseCnName: "",
        houseCnAbbreviation: "",
        houseEnName: "",
        houseEnAbbreviation: "",
        country: "",
        countryName: "",
        address: "",
        region: "",
        roomNum: "",
        parlourNum: "",
        toiletNum: "",
        priceDollar: "",
        priceRmb: "",
        unitPrice: "",
        useArea: "",
        coveredArea: "",
        type: "",
        tranType: "",
        tranTypeName: "",
        typenName: "",
        seeDate: "",
        buildYear: "",
        sellDate: "",
        mlsNo: "",
        houseDuty: "",
        landNum: "",
        households: "",
        floorNum: "",
        parkNum: "",
        sellerAgent: "",
        agencyBroker: "",
        houseInfo: "",
        remark: "",
        status: "",
        belongSchools: "",
        agencyInfo: {
          name: "",
          agencyType: "",
          agencyRemark: ""
        },
        belongSchoolsName: [],
        houseInfoImgUrlList: []
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
  mounted: function() {
    //this.tabHeight = document.body.scrollHeight - this.utility.cusHight;//tab1高度自适应
    this.loadDataForm(); //加载数据列表
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    loadDataForm() {
      this.$http
        .post(this.utility.serverUrl + "house/houseInfo", {
          data: {
            houseId: this.$route.params.houseId
          }
        })
        .then(response => {
          this.form = response.data.data;
          console.log("houseInfoImgUrlList:" + this.form.houseInfoImgUrlList);
        })
        .catch(function(response) {
          this.$message.error("服务器请求错误,请稍后再试...");
        });
    },
    submitInfo() {
      this.askForm.houseId = this.form.id;
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
        .catch(function(response) {
          this.$message.error("服务器请求错误,请稍后再试...");
        });
    }
  }
};
</script>
