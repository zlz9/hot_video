<template>
  <div>
    <div class="title">
      <slot name="title"> 默认标题 </slot>
    </div>
    <div class="video_list">
      <el-row :gutter="20">
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
      </el-row>
    </div>
    <div class="pagination">
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import Pagination from "../components/Pagination.vue";
</script>

<style lang="scss" scoped>
.title {
  font-size: $font-title;
  font-family: $font-family;
  color: $font-color;
  position: relative;
  width: 200px;
  left: 170px;
}
.video_list {
  position: relative;
  width: 1600px;
  margin: 0 auto;
  .content {
    width: 400px;
    height: 300px;
    background-color: blanchedalmond;
    margin: 5px;
  }
}
</style>
