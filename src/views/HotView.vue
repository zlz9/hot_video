<template>
  <div>
    <div class="box">
      <div class="nav">
        <SwiperView></SwiperView>
      </div>
      <div class="top">
        <RankView></RankView>
      </div>
      <div class="recommend">
        <RankView></RankView>
      </div>
    </div>
    <div class="video_list">
      <VideoList></VideoList>
    </div>
  </div>
</template>

<script setup lang="ts">
import SwiperView from "../components/SwiperView.vue";
import RankView from "../components/RankView.vue";
import VideoList from "../components/VideoList.vue";
</script>

<style lang="scss" scoped>
.box {
  margin: 0 auto;
  width: 1600px;
  height: 630px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  .nav {
    width: 600px;
    height: 100%;
    background-color: aqua;
  }
  .top {
    width: 300px;
    height: 100%;
    background-color: beige;
  }
  .recommend {
    width: 300px;
    height: 100%;
    background-color: rgb(169, 114, 32);
  }
}
</style>
