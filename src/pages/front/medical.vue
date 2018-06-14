<template lang="html">

  <div class="medical_div">
      <ul>
        <li class="right">
          <el-form ref="askForm" :model="askForm" label-width="80px">
                <el-row>
                  <el-col :span="24"><div class="bg-head_dark">请您和我们联系</div></el-col>
                </el-row>
                <el-row style="margin:15px 5px 5px;">
                  <el-input type="textarea" :rows="4" v-model="askForm.askInfo" placeholder="请填写您想咨询的内容，我们一定会尽快和您取得联系!"></el-input>
                </el-row >
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
                    <el-button style="text-align:left;width:90px;padding-left:30px">重置</el-button>
                  </el-col>
                </el-row>
              </el-form>
        </li>
        <li>
      <div class="left">
              <img src="/static/assets/images/medical_bk.png"/>
      </div>
        </li>
      </ul>
      <!-- <div class="right">
            
      </div> -->
      
     
  </div>

</template>

<style>
.medical_div {
  height: 100%;
  text-align: center;
  margin: 10px;
}

.left {
	display: flex;
	justify-content: center;
	align-items: center;
  float: left;
  padding-left: 28%;
  width: 70%;
  text-align: right;
}

.right {
  /*position: fix;*/
  padding-left: 35%;
  float: left;
  width: 30%;
}

.bg-head_dark {
  background: #ff9601;
  border-radius: 4px;
  min-height: 36px;
  padding-top: 20px;
  font-size: 18px;
  color: #ffffff;
}
</style>


<script>
import utility from "../utility.json";
export default {
  data() {
    return {
      utility: utility,
      askForm: {
        name: "",
        mobile: "",
        email: "",
        askInfo: "",
        requestType: ""
      }
    };
  },
  mounted: function() {
    //this.tabHeight = document.body.scrollHeight - this.utility.cusHight;//tab1高度自适应
    //this.loadDataForm(); //加载数据列表
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    submitInfo() {
      if (this.askForm.name == "" || this.askForm.mobile == "") {
        alert("请输入必填项!");
      } else {
        this.askForm.requestType = "3";
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
