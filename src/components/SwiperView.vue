<template>
  <div class="home">
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="30"
      navigation
      :effect="'fade'"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in props.swiperList">
        <img v-lazy="item.cover" alt="" style="width: 100%; height: 100%" />
        <div class="play_ico"></div>
        <div class="play_back"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCube,
  EffectFade,
} from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const props = defineProps({
  swiperList: {
    type: Array<swiperRes>,
    required: true,
  },
});
const onSwiper = () => {};
const onSlideChange = () => {};
const modules = [Autoplay, Pagination, Navigation, EffectFade];
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100%;

  .play_ico {
    display: none;
  }
  .play_back {
    display: none;
  }
  &:hover .play_ico {
    position: absolute;
    display: block;
    background-image: url(../assets/img/play.png);
    height: 200px;
    width: 200px;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &:hover .play_back {
    display: block;
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
  }

  .swiper {
    height: 100%;
  }
  .swiper-slide {
    background-color: rgb(124, 43, 216);
    height: 100%;
    display: flex;
  }
  .swiper-button-prev,
  .swiper-button-next {
    transform: translateY(-50%);
  }
}
</style>
