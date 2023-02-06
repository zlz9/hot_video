<template>
  <div class="video_player">
    <vue3VideoPlay v-bind="options" />
  </div>
</template>

<script setup lang="ts">
import { reactive, onBeforeUnmount, watch } from "vue";
import { useVideoStore } from "../store/video";
import { useRoute } from "vue-router";
import { getVideoByIdApi } from "../api";
import { ref } from "vue";
const route = useRoute();
const controller = new AbortController();
const videoStore = useVideoStore();
let id = route.query.id as unknown as number;
const url = ref();
// 监听路由变化
getVideoByIdApi(id).then((res) => {
  url.value = res.data.url;
});
watch(
  () => route.query.id,
  (newValue, oldValue) => {
    getVideoByIdApi(newValue).then((res) => {
      url.value = res.data.url;
    });
  }
);
onBeforeUnmount(() => {
  //离开页面取消请求
  controller.abort();
});
const options = reactive({
  width: "1400px", //播放器高度
  height: "900px", //播放器高度
  color: "#409eff", //主题色
  title: "", //视频名称
  // src: "", //视频源
  src: url,
  // https://qiniu.zhoulizheng.cn/%E6%B5%8B%E8%AF%95%E8%A7%86%E9%A2%91.mp4
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.5, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
</script>

<style lang="scss">
.video_player {
  .d-slider .d-slider__runway .d-slider__bar:before {
    background-image: url("../assets/img/可爱01.gif");
  }
}
</style>
