<template>
  <div style="z-index: 6; position: absolute; left: 13%">
    <zSearch
      @search="search"
      :listData="hotVideoList"
      :hotList="hotVideoList"
      @checkTitle="checkTitle"
    >
    </zSearch>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { reactive, nextTick } from "vue";
import { HotVideoTopApi } from "../api";
const router = useRouter();
const hotVideoList = ref<String[]>([]);
const closeCard = () => {
  setTimeout(() => {}, 200);
};
// 搜索触发的函数
const search = (title: any) => {
  router.push({ path: "/videores", query: { title: title } });
};
// 点击tag标签和热搜榜触发的函数
const checkTitle = (item: any) => {
  router.push({ path: "/videores", query: { title: item } });
};

nextTick(() => {
  HotVideoTopApi().then((res) => {
    if (res.code == 200) {
      res.data.forEach((item) => {
        hotVideoList.value.push(item["name"]);
      });
    }
  });
});
// 搜索栏滚动数据
const listData = reactive([
  "进击的巨人",
  "无职转生",
  "jojo的奇妙冒险",
  "黑色五叶草",
  "名侦探柯南",
]);
//top前十
const hotList = reactive([
  "进击的巨人",
  "东京美食家",
  "死神",
  "海贼王",
  "火影忍者",
  "电锯人",
  "至两千年前的你",
  "想要成为影之实力者",
  "不死者之王",
  "咒术回战",
]);
</script>

<style lang="scss" scoped></style>
