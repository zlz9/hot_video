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
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavView from "./NavView.vue";
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.common-layout {
  width: 100%;
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
