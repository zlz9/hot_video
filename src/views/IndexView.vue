<template>
  <div>
    <div class="swiper">
      <SwiperView :swiperList="swiperList"></SwiperView>
    </div>
    <VideoContent :videoList="recommendVideo">
      <template #title> 推荐 </template>
    </VideoContent>
    <VideoContent :videoList="lastVideo">
      <template #title> 最新 </template>
    </VideoContent>
    <VideoContent :videoList="hotVideo">
      <template #title> 热门 </template>
    </VideoContent>
    <VideoContent :videoList="funnyVideo">
      <template #title> 搞笑 </template>
    </VideoContent>
    <VideoContent :videoList="gameVideo">
      <template #title> 游戏 </template>
    </VideoContent>
  </div>
</template>

<script setup lang="ts">
import SwiperView from "../components/SwiperView.vue";
import VideoContent from "../components/VideoContent.vue";
import { reactive, ref, onMounted } from "vue";
import {
  SwiperHotApi,
  FunnyVideoApi,
  GameVideoApi,
  HotVideoApi,
  LastVideoApi,
  RecommendApi,
} from "../api";

let swiperList = ref<swiperRes[]>([]);
let hotVideo = ref<VideoRes[]>([]);
let lastVideo = ref<VideoRes[]>([]);
let recommendVideo = ref<VideoRes[]>([]);
let funnyVideo = ref<VideoRes[]>([]);
let gameVideo = ref<VideoRes[]>([]);

const getFunny = FunnyVideoApi().then((res) => {
  if (res.code == 200) {
    funnyVideo.value = res.data;
  }
});

const getGame = GameVideoApi().then((res) => {
  if (res.code == 200) {
    gameVideo.value = res.data;
  }
});

const getHot = HotVideoApi().then((res) => {
  if (res.code == 200) {
    hotVideo.value = res.data;
  }
});

const getLast = LastVideoApi().then((res) => {
  if (res.code == 200) {
    lastVideo.value = res.data;
  }
});

const getRecommend = RecommendApi().then((res) => {
  if (res.code == 200) {
    recommendVideo.value = res.data;
  }
});
/**
 * 发请求获取轮播图
 */
const getSwiper = SwiperHotApi().then((res) => {
  swiperList.value = res.data;
});
onMounted(() => {
  getSwiper;
  getFunny;
  getGame;
  getHot;
  getLast;
  getRecommend;
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 1600px;
  height: 600px;
}
</style>
