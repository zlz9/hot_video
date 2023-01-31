<template>
  <div>
    <VideoList :video-data="videoData"></VideoList>
  </div>
</template>

<script lang="ts" setup>
import VideoList from "../components/VideoList.vue";
import { searchVideoApi } from "../api";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const title = route.query.title as String;
const videoData = ref<VideoRes[]>([]);
searchVideoApi(title).then((res) => {
  videoData.value = res.data;
});
</script>

<style lang="scss" scoped></style>
