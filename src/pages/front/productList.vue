<template lang="html">
  <div class="product_list_container">
    <el-row class="products_row" v-for="item in goodsItem">
      <el-col class="products_col" v-for="itemCol in item">
        <!-- <router-link :to="{ name:'info',params:{houseId:item.id}}"><img v-bind:src="item.houseImgUrl" /></router-link> -->
        <div class="imgWrap">
          <!-- <a :href="itemCol.taobaoUrl" target="_blank">
           <img v-bind:src="itemCol.prdImgUrl" />
          </a> -->
          <router-link :to="{ name:'goodsInfo',params:{goodsId:itemCol.id}}">
              <img v-bind:src="itemCol.prdImgUrl" />
          </router-link>
        </div>
        <div class="product_title">{{itemCol.goodsName}}</div>
        <div class="sub_title">{{itemCol.goodsSubtitle}}</div>
      </el-col>
    </el-row>
    <div class="block-pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
        :current-page.sync="pageBean.pageNo" :page-size="10" 
        layout="total, prev, pager, next" :total="pageBean.count">
      </el-pagination>
    </div>
  </div>
</template>


<style>
.block-pagination {
	width: 100%;
	text-align: center;
}
.block-pagination  .el-pagination{
	display: inline-block;
	margin: 20px 0;
}
.product_list_container {
  width: 90%;
  min-width: 400px;
  height: auto;
  flex: 1 auto;
  padding-left: 5px;
  /* border: 1px solid #ff9601; */
}

.products_row {
	width: 1200px;
  height: 270px;
  padding-bottom: 5px;
  /*border: 1px solid #ff9601;*/
}

.products_col {
	margin: 10px;
  width: 210px;
  height: 250px;
  border: 1px solid #d7d7d7;
  background: #fff;
}
.products_col:hover{
	border: 1px solid #ff9601;
}
.products_col .imgWrap img{
	width: 100%;
	cursor: pointer;  
  transition: all 0.6s; 
}
.products_col div{
	margin: 4px;
}
.products_col .imgWrap{
	height:200px;
	width:200px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}
.products_col .imgWrap img:hover{
	transform: scale(1.2);
}
.product_title {
  margin-left: 2px;
  font-weight: bold;
  font-size: 15px;
  color: #333;
}

.sub_title {
  margin-left: 2px;
  font-size: 12px;
  color: #333;
}
</style>

<script>
import utility from "../utility.json";
export default {
  data() {
    return {
      utility: utility,
      pageBean: {
        pageNo: 1,
        count: 0,
        pageCount: 1
      },
      queryParamJson: {
        gcId: "",
        pageBean: {
          pageNo: 1
        }
      },
      goodsItem: [
        [
          {
            id: "",
            goodsName: "",
            goodsSubtitle: "",
            goodsStorePrice: "",
            cityId: "",
            prdImgUrl: "",
            taobaoUrl: ""
          }
        ]
      ]
    };
  },
  mounted: function() {
    //this.tabHeight = document.body.scrollHeight - this.utility.cusHight;//tab1高度自适应
    this.loadDataForm(); //加载数据列表
  },
  methods: {
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
          this.$message.error("服务器请求商品列表错误,请稍后再试...");
        });
    },
    loadDataForm() {
      console.log("gcId: " + this.$route.params.gcId);
      this.queryParamJson.pageBean.pageNo = 1;
      this.queryParamJson.gcId= this.$route.params.gcId;
      this.$http
        .post(this.utility.serverUrl + "goods/goodsList", {
          data: {
            data: this.queryParamJson
          }
        })
        .then(response => {
          this.goodsItem = response.data.data;
          this.pageBean.pageNo = response.data.pageNo;
          this.pageBean.count = response.data.count;
          this.pageBean.pageCount = response.data.pageCount;
        })
        .catch(function(response) {
          this.$message.error("服务器请求商品列表错误,请稍后再试...");
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
