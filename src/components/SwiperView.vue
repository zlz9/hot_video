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
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
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
const onSwiper = (swiper) => {};
const onSlideChange = () => {};
const modules = [Autoplay, Pagination, Navigation, EffectFade];
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  margin: 0 auto;
  height: 100%;
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
