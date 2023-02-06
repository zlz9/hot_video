<template>
  <!-- 历史组件 -->
  <div class="history-box">
    <videoList :video-data="videoData"></videoList>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import videoList from "../components/VideoList.vue";
import { videoHistoryApi } from "../api/index";
import { useUserStore } from "../store/user";
const userStore = useUserStore();
let videoIds = userStore.VideoIds as unknown as string;
const videoData = ref<VideoRes[]>([]);
videoIds = Array.from(new Set(videoIds)).toString();
console.log(videoIds, "videoIds");
videoHistoryApi(videoIds).then((res) => {
  if (res.code == 200) {
    videoData.value = res.data;
  }
});
</script>

<style lang="scss" scoped>
.history-box {
  color: $font-color;
}
</style>
