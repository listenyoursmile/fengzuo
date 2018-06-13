<template lang="html">
  <el-menu default-active="1" id="nav-menu" >
    <div class="logo">
      <router-link to="/">
        <!--<img src="../../assets/images/logo.svg" />-->
      </router-link>
    </div>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-menu"></i>导航一</template>
      <el-menu-item index="1-1"><router-link to="/formPage" class="nav-link">表单</router-link></el-menu-item>
      <el-menu-item index="1-2"><router-link to="/home1" class="nav-link">列表1</router-link></el-menu-item>
      <el-menu-item index="1-3"><router-link to="/col1" class="nav-link">列表2</router-link></el-menu-item>
      <el-menu-item index="1-3"><router-link to="/report" class="nav-link">报表</router-link></el-menu-item>
      <el-menu-item index="1-3"><router-link to="/report1" class="nav-link">报表1</router-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="2"><router-link to="/page3" class="nav-link"><i class="el-icon-message"></i>导航二</router-link></el-menu-item>
  </el-menu>
</template>
