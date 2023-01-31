<template>
  <!-- 搜索推荐 -->
  <div class="search-box">
    <div class="search-history">
      <div class="title">搜索记录</div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in 6" @click="goVideoInfo(index)"
          ><div class="data">
            测试数据
            <span>x</span>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="search-history">
      <div class="title">热搜</div>
      <el-row :gutter="20">
        <el-col
          :span="6"
          v-for="(item, index) in videoTop"
          @click="goVideoInfo(index)"
          ><div class="data">{{ item }}</div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { searchTopApi } from "../api";
import { reactive, ref } from "vue";
let videoTop = ref<String[]>([]);
searchTopApi().then((res) => {
  videoTop.value = res.data;
});
const goVideoInfo = (index: number) => {};
</script>

<style scoped lang="scss">
.search-box {
  text-align: center;
  background-color: rgb(18, 5, 47);
  width: 580px;
  height: 380px;
  top: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  .search-history {
    width: 100%;
    height: 48%;
    margin-top: 5px;
    .title {
      font-size: 20px;
      color: rgb(218, 203, 203);
    }
    .data {
      font-size: 18px;
      color: black;
      background-color: rgb(190, 204, 216);
      margin-top: 5px;
    }
  }
}
</style>
