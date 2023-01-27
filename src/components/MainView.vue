<template>
  <!-- 页面骨架 -->
  <div class="common-layout">
    <el-container class="main_box" style="width: 100%; height: 100%">
      <el-header>
        <el-affix :offset="0">
          <div style="background-color: #0f0f0f">
            <NavView></NavView>
          </div>
        </el-affix>
      </el-header>
      <el-main>
        <!-- 路由出口 -->
        <!-- <router-view></router-view> -->
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
      <el-backtop :bottom="100">
        <div class="go-top">
          <img src="../assets/img/可爱01.gif" alt="" />
        </div>
      </el-backtop>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavView from "./NavView.vue";
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.go-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }
}
.el-backtop {
}
.common-layout {
  width: 1883;
  // min-height: 900px;
  background-color: $backgroud-color;
  cursor: pointer;

  .el-header {
    height: 100px;
  }
  .el-main {
    min-height: 900px;
  }
}
</style>
