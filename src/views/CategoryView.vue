<template>
  <div>
    <CategoryComp @chooseTag="chooseTag"></CategoryComp>
    <VideoList :videoData="videoTagList"> </VideoList>
    <Pagination @getPage="getPage" :total="total"></Pagination>
  </div>
</template>

<script setup lang="ts">
import CategoryComp from "../components/CategoryComp.vue";
import VideoList from "../components/VideoList.vue";
import { VideoByTagApi } from "../api/index";
import Pagination from "../components/Pagination.vue";
import { ref } from "vue";

let videoTagList = ref<VideoRes[]>([]);
let params: PageParams = {
  page: 1,
  pageSize: 12,
  tagId: 1,
};
let total = ref<number>(1);
VideoByTagApi(params).then((res) => {
  total.value = res.data.length;
  videoTagList.value = res.data;
});
const chooseTag = (id: number) => {
  params.tagId = id;
  VideoByTagApi(params).then((res) => {
    total.value = res.data.length;
    videoTagList.value = res.data;
  });
  localStorage.removeItem("tagId");
};
const getPage = (pageParams: PageParams) => {
  pageParams.tagId = params.tagId;
  VideoByTagApi(pageParams).then((res) => {
    total.value = res.data.length;
    videoTagList.value = res.data;
  });
};
</script>

<style lang="scss" scoped></style>
