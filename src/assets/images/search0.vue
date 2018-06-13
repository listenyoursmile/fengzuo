<template lang="html">
  <div>

    <div class="search_main">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="交易类型">
        <el-radio-group v-model="form.tranType" style="line-height:2.5">
          <el-radio label="出售"></el-radio>
          <el-radio label="出租"></el-radio>
          <el-radio label="已售"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="国家">
        <el-checkbox-group v-model="form.country">
          <el-checkbox label="美国" name="country"></el-checkbox>
          <el-checkbox label="加拿大" name="country"></el-checkbox>
          <el-checkbox label="澳大利亚" name="country"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="物业类型">
        <el-checkbox-group v-model="form.wuye">
          <el-checkbox label="联合公寓" name="wuye"></el-checkbox>
          <el-checkbox label="独立公寓" name="wuye"></el-checkbox>
          <el-checkbox label="独栋别墅" name="wuye"></el-checkbox>
          <el-checkbox label="联排别墅" name="wuye"></el-checkbox>
          <el-checkbox label="联拼别墅" name="wuye"></el-checkbox>
          <el-checkbox label="三拼别墅" name="wuye"></el-checkbox>
          <el-checkbox label="农场" name="wuye"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="卧室数量">
        <el-radio-group v-model="form.roomNum" style="line-height:2.5">
          <el-radio label="不限"></el-radio>
          <el-radio label="0"></el-radio>
          <el-radio label="1"></el-radio>
          <el-radio label="2"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="价格范围">
        <el-radio-group v-model="form.price" style="line-height:2.5">
          <el-radio label="不限"></el-radio>
          <el-radio label="￥100万以下"></el-radio>
          <el-radio label="￥100-300万"></el-radio>
          <el-radio label="￥300-500万"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="background-color:#ff9601">查询</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>

  <div class="search_list" v-for="item in 2">
    <span style="width:470px; height:380px">
        <div>芭提雅水岸公寓</div>
      <ul>
      <li>
        <span style="height:310px"><img src="/static/assets/images/slider-img2.jpg" /></span>
        <span>浏览数：0   收藏数：0 </span>
      </li>
      </ul>
      <!-- <div>芭提雅水岸公寓</div>
      <img src="/static/assets/images/slider-img2.jpg" />
      <div>浏览数：0   收藏数：0 </div> -->
    </span>
    <span style="width:600px; height:380px">
      <div>基本信息</div>
      <ul>
        <li>
          <span style="width:30%">房屋所在国家</span>
          <span>美国</span>
        </li>
        <li>
          <span style="width:30%">城市</span>
          <span>洛杉矶</span>
        </li>
        <li>
          <span style="width:30%">所属区</span>
          <span>1区</span>
        </li>
        <li>
          <span style="width:30%">房屋地址</span>
          <span>aaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
        </li>
        <li>
          <span style="width:30%">房屋价格</span>
          <span>￥1000000</span>
        </li>
        <li>
          <span style="width:30%">使用面积</span>
          <span>102.2平方</span>
        </li>
        <li>
          <span style="width:30%">物业类型</span>
          <span>公寓</span>
        </li>
        <li>
          <span style="width:30%">交易类型</span>
          <span>出售</span>
        </li>
        <li>
          <span style="width:30%">建造年份</span>
          <span>2012</span>
        </li>
        <li>
          <span style="width:30%">代理经纪人</span>
          <span>Andy chen</span>
        </li>
        <li>
          <span style="width:30%">车位数</span>
          <span>0</span>
        </li>
      </ul>
    </span>

  </div>
</div>
</template>
<script>
import utility from '../utility.json'

export default {
  data() {
    return {
      utility: utility,
      form: {
        tranType: '',
        country: [],
        wuye: [],
        roomNum: '',
        price: ''
      }
    }
  },
  mounted: function() {
    //this.tabHeight = document.body.scrollHeight - this.utility.cusHight;//tab1高度自适应
    this.loadDataForm(); //加载数据列表
    //this.loadObjectList(); //加载对象列表
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    loadDataForm() {
      // alert(this.utility.serverUrl);
      this.$http.get(this.utility.serverUrl + 'users/getTestJson').then(function(response) {
        this.form = response.data.data;
      });
    },
  }
}
</script>
