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
      <el-backtop :bottom="100">
        <div
          style="
            height: 100%;
            width: 100%;
            background-color: var(--el-bg-color-overlay);
            box-shadow: var(--el-box-shadow-lighter);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          "
        >
          TOP
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
.el-backtop {
  background-color: #fff;
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
