<template lang="html">
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <div v-for="item in productClassItems">
      <el-menu-item v-bind:index="item.gcSort">
        <i class="el-icon-menu"></i>
        <router-link :to="{ name:'productList',params:{gcId:item.id}}">
           {{item.gcName}}
        </router-link>

      <!-- <router-link to="/productList">{{item.gcName}}</router-link> -->
      </el-menu-item>
    </div>
  </el-menu>
</template>

<style>
.el-menu {
  width: 20%;
  min-width: 240px;
  height: 900px;
  border-radius: 0;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.3);
}
</style>

<script>
import utility from "../utility.json";
export default {
  data() {
    return {
      utility: utility,
      productClassItems: [
        {
          id: "",
          gcName: "",
          gcSort: ""
        }
      ]
    };
  },
  mounted: function() {
    //this.tabHeight = document.body.scrollHeight - this.utility.cusHight;//tab1高度自适应
    this.loadDataForm(); //加载数据列表
  },
  methods: {
    loadDataForm() {
      this.$http
        .post(this.utility.serverUrl + "goodsClass/goodsClassList", {
          data: {}
        })
        .then(response => {
          this.productClassItems = response.data.data;
        })
        .catch(function(response) {
          this.$message.error("服务器请求错误,请稍后再试...");
        });
    }
  }
};
</script>