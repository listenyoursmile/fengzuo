<template lang="html">
  <div class="search_body">

    <div class="search_main">
      <span class="searh_value">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="交易类型">
            <el-radio-group v-model="form.tranType" style="line-height:2.5">
              <el-radio :label="0">出售</el-radio>
              <el-radio :label="1">出租</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="国家">
            <el-checkbox-group v-model="form.country">
              <el-checkbox v-for="dict in dictListValue.country" :label="dict.label" :key="dict.value">{{dict.label}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="物业类型">
            <el-checkbox-group v-model="form.type">
              <el-checkbox v-for="dict in dictListValue.house_type" :label="dict.label" :key="dict.value">{{dict.label}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="卧室数量">
            <el-radio-group v-model="form.roomNum" style="line-height:2.5">
              <el-radio label="不限"></el-radio>
              <el-radio label="0"></el-radio>
              <el-radio label="1"></el-radio>
              <el-radio label="2"></el-radio>
              <el-radio label="3"></el-radio>
              <el-radio label="4"></el-radio>
              <el-radio label="5"></el-radio>
              <el-radio label="6"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="价格范围">
            <el-radio-group v-model="form.price" style="line-height:2.5">
              <el-radio label="不限"></el-radio>
              <el-radio label="$100万以下"></el-radio>
              <el-radio label="$100-300万"></el-radio>
              <el-radio label="$300-500万"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" style="background-color:#ff9601">查询</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </span>
      <span class="search_contacts">
        <el-form ref="askForm" :model="askForm" label-width="80px">
          <el-row style="margin:15px 5px 5px;">
            <el-input type="textarea" :rows="4" v-model="askForm.askInfo" placeholder="如您没有找到合适的房源，请填写您的心愿单，我们一定会尽快和您取得联系!"></el-input>
          </el-row>
          <el-row style="margin:15px 5px 5px;">
            <el-input v-model="askForm.name" placeholder="姓名（必填）"></el-input>
          </el-row>
          <el-row style="margin:15px 5px 5px;">
            <el-input v-model="askForm.mobile" placeholder="电话（必填）"></el-input>
          </el-row>
          <el-row style="margin:15px 5px 5px;">
            <el-input v-model="askForm.email" placeholder="邮箱"></el-input>
          </el-row>
          <el-row style="margin:15px 5px 5px;">
            <el-col :span="8">
              <el-button type="warning" @click="submitInfo" style="text-align:left;width:90px;padding-left:30px">提交</el-button>
            </el-col>
            <el-col :span="8">
              <el-button style="text-align:left;width:90px;padding-left:30px;margin-left:25px">重置</el-button>
            </el-col>
          </el-row>
        </el-form>
      </span>
    </div>

    <div class="search_list" v-for="item in houseItems">
      <span style="width:45%; height:350px">
        <div style="font-size:20px">{{item.houseCnAbbreviation}}</div>
        <ul>
          <li>
            <span style="height:300px">
              <router-link :to="{ name:'info',params:{houseId:item.id}}">
                <img v-bind:src="item.houseImgUrl" />
              </router-link>
            </span>

          </li>
        </ul>
        <!-- <div>芭提雅水岸公寓</div>
      <img src="/static/assets/images/slider-img2.jpg" />
      <div>浏览数：0   收藏数：0 </div> -->
      </span>
      <span style="width:50%; height:320px">
        <div style="font-size:20px">基本信息</div>
        <ul>
          <li>
            <span style="width:30%">房屋编号</span>
            <span>{{item.houseCnName}}</span>
          </li>
          <li>
            <span style="width:30%">房屋所在国家</span>
            <span>{{item.countryName}}</span>
          </li>
          <li>
            <span style="width:30%">城市</span>
            <span>{{item.region}}</span>
          </li>
          <li>
            <span style="width:30%">房屋地址</span>
            <span>{{item.address}}</span>
          </li>
          <li>
            <span style="width:30%">房屋价格(美元)</span>
            <span>${{item.priceRmb}}</span>
          </li>
          <li>
            <span style="width:30%">使用面积</span>
            <span>{{item.useArea}} 平方英尺</span>
          </li>
          <li>
            <span style="width:30%">占地面积</span>
            <span>{{item.coveredArea}} 平方英尺</span>
          </li>
          <li>
            <span style="width:30%">物业类型</span>
            <span>{{item.typeName}}</span>
          </li>
          <li>
            <span style="width:30%">房屋结构</span>
            <span>{{item.roomNum}}室{{item.parlourNum}}厅{{item.toiletNum}}卫</span>
          </li>
          <li>
            <span style="width:30%">建造年份</span>
            <span>{{item.buildYear}}</span>
          </li>
        </ul>
      </span>
      <!-- <span class="agent_info">
      <div style="font-size:20px;text-align:left">
          经纪人信息
      </div>
    <ul>
      <li>
        <img style="width: 150px" v-bind:src="item.agencyInfo.agencyImgFile" />
      </li>
      <li style="font-weight:bold">
        {{item.agencyInfo.name}}
      </li>
      <li style="font-weight:bold">
        {{item.agencyInfo.agencyType}}
      </li>
    </ul>
    </span> -->
    </div>
    <div class="block-pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
        :current-page.sync="pageBean.pageNo" :page-size="10" 
        layout="total, prev, pager, next" :total="pageBean.count">
      </el-pagination>
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
        tranType: "",
        country: [
          {
            value: "",
            label: "",
            type: ""
          }
        ],
        type: [],
        roomNum: "",
        price: ""
      },
      queryParamJson: {
        type: "",
        country: "",
        pageBean: {
          pageNo: 1
        }
      },
      dictParamJson: {
        type: []
      },
      dictListValue: {
        type: "",
        dict: {
          value: "",
          type: "",
          label: ""
        }
      },
      askForm: {
        name: "",
        mobile: "",
        email: "",
        askInfo: "",
        requestType: ""
      },
      pageBean: {
        pageNo: 1,
        count: 0,
        pageCount: 1
      },
      houseItems: [
        {
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
          belongSchoolsName: "",
          belongSchools: "",
          agencyInfo: {
            name: "",
            agencyType: "",
            agencyRemark: ""
          },
          houseImgUrl: ""
        }
      ]
    };
  },
  mounted: function() {
    //this.tabHeight = document.body.scrollHeight - this.utility.cusHight;//tab1高度自适应
    this.loadQueryForm();
    this.loadDataForm(); //加载数据列表
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.queryParamJson.pageBean.pageNo = val;
      this.$http
        .post(this.utility.serverUrl + "house/houseList", {
          data: this.queryParamJson
        })
        .then(response => {
          this.houseItems = response.data.data;
          this.pageBean.pageNo = response.data.pageNo;
          this.pageBean.count = response.data.count;
          this.pageBean.pageCount = response.data.pageCount;
        })
        .catch(function(response) {
          this.$message.error("服务器请求房源列表错误,请稍后再试...");
        });
    },
    loadQueryForm() {
      // alert(this.utility.serverUrl);
      this.dictParamJson.type.push("country", "house_type");
      this.$http
        .post(this.utility.serverUrl + "dict/dicts", {
          data: this.dictParamJson
        })
        .then(response => {
          this.dictListValue = response.data.data;
        })
        .catch(function(response) {
          this.$message.error("服务器请求数据字典错误,请稍后再试...");
        });
    },
    loadDataForm() {
      // this.queryParamJson.pageBean.pageNo = 10;
      this.$http
        .post(this.utility.serverUrl + "house/houseList", {
          data: this.queryParamJson
        })
        .then(response => {
          this.houseItems = response.data.data;
          this.pageBean.pageNo = response.data.pageNo;
          this.pageBean.count = response.data.count;
          this.pageBean.pageCount = response.data.pageCount;
        })
        .catch(function(response) {
          this.$message.error("服务器请求房源列表错误,请稍后再试...");
        });
    },
    submitInfo() {
      if (this.askForm.name == "" || this.askForm.mobile == "") {
        alert("请输入必填项!");
      } else {
        this.askForm.requestType = "1";
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
  }
};
</script>

<style>
.block-pagination {
  float: right;
  margin-right: 80px;
}
.search_body {
  width: 1200px;
  margin: 0 auto;
}
</style>
