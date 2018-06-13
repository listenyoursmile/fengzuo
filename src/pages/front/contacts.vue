<template lang="html">

  <div class="contacts_main">
    <span class="contacts_info">
      <ul>
        <li style="text-align:left">
          <span >
            <img src="/static/assets/images/wechat_gr.jpg" alt="个人微信号"/>
          </span>
          <span >
            <img src="/static/assets/images/wechat_gr.jpg" alt="企业公众号"/>
          </span>
        </li>
        <li style="text-align:left;padding-top:40px">
          <span >
            <img src="/static/assets/images/company_build.png" style="width:300px" alt="公司图片"/>
          </span>
          <span style="width:500px;margin-left:100px">
            <img src="/static/assets/images/contacts_addr.png" style="width:500px" alt="公司地址"/>
          </span>
        </li>
      </ul>
    </span>

    <span class="contacts_us">
        <div class="contacts_us_bg"><span style="color:#ffffff;letter-spacing:5px">请您联系我们</span></div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-row style="margin:15px 5px 5px;">
              <el-input type="textarea" :rows="4" v-model="form.name" placeholder="请填写您向咨询的内容，我们一定会尽快和您取得联系!"></el-input>
            </el-row >
            <el-row style="margin:15px 5px 5px;">
              <el-input v-model="form.name" placeholder="姓名（必填）"></el-input>
            </el-row>
            <el-row style="margin:15px 5px 5px;">
              <el-input v-model="form.name" placeholder="电话（必填）"></el-input>
            </el-row>
            <el-row style="margin:15px 5px 5px;">
              <el-input v-model="form.name" placeholder="邮箱"></el-input>
            </el-row>
            <el-row style="margin:15px 5px 5px;">
              <el-input v-model="form.name" placeholder="地址"></el-input>
            </el-row>
            <el-row style="margin:15px 5px 5px;">
              <el-col :span="8">
                <el-button type="warning" style="text-align:left;width:90px;padding-left:30px">提交</el-button>
              </el-col>
              <el-col :span="8">
                <el-button style="text-align:left;width:90px;padding-left:30px">重置</el-button>
              </el-col>
            </el-row>
          </el-form>


    </span>

  </div>

</template>




<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
