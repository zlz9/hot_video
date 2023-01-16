<template>
  <!-- 用户详情页 -->
  <div>
    <div class="user-video">
      <!-- 作者 -->
      <div
        class="author"
        style="
          display: flex;
          justify-content: space-around;
          align-items: center;
        "
      >
        <div style="display: flex; flex-direction: column; align-items: center">
          <div class="avatar">
            <img v-lazy="author?.avatar" alt="" />
          </div>
          <div class="name">{{ author?.nickName }}</div>
        </div>
        <div @click="goMessage(author?.id)">
          <svg
            t="1673791174124"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3003"
            width="48"
            height="48"
          >
            <path
              d="M236.088889 907.377778l-102.4 28.444444c-62.577778 17.066667-99.555556-19.911111-85.333333-82.488889l22.755555-105.244444C25.6 679.822222 0 597.333333 0 512 0 253.155556 230.4 42.666667 512 42.666667S1024 253.155556 1024 512s-230.4 469.333333-512 469.333333c-96.711111 0-193.422222-25.6-275.911111-73.955555z m5.688889-36.977778c79.644444 48.355556 173.511111 73.955556 270.222222 73.955556 264.533333 0 480.711111-193.422222 480.711111-435.2S776.533333 76.8 512 76.8 31.288889 273.066667 31.288889 512c0 79.644444 25.6 159.288889 73.955555 227.555556l8.533334 11.377777-22.755556 99.555556c-8.533333 31.288889 11.377778 51.2 42.666667 39.822222l99.555555-28.444444 8.533334 8.533333z m361.244444-455.111111h-278.755555c-5.688889 0-8.533333-2.844444-11.377778-5.688889s-5.688889-5.688889-5.688889-11.377778 2.844444-8.533333 5.688889-11.377778 5.688889-5.688889 11.377778-5.688888h278.755555c5.688889 0 8.533333 2.844444 11.377778 5.688888 2.844444 2.844444 5.688889 5.688889 5.688889 11.377778s-2.844444 8.533333-5.688889 11.377778c-2.844444 5.688889-8.533333 5.688889-11.377778 5.688889z m122.311111 0h-48.355555c-2.844444 0-5.688889-2.844444-11.377778-5.688889s-5.688889-5.688889-5.688889-11.377778 2.844444-8.533333 5.688889-11.377778 5.688889-5.688889 11.377778-5.688888h48.355555c5.688889 0 8.533333 2.844444 11.377778 5.688888s5.688889 5.688889 5.688889 11.377778-2.844444 8.533333-5.688889 11.377778-5.688889 5.688889-11.377778 5.688889z m-216.177777 156.444444h-170.666667c-5.688889 0-8.533333-2.844444-11.377778-5.688889-2.844444-2.844444-5.688889-8.533333-5.688889-11.377777s2.844444-8.533333 5.688889-11.377778c2.844444-2.844444 5.688889-5.688889 11.377778-5.688889h170.666667c2.844444 0 8.533333 2.844444 11.377777 5.688889s5.688889 5.688889 5.688889 11.377778c0 2.844444-2.844444 8.533333-5.688889 11.377777-2.844444 5.688889-8.533333 5.688889-11.377777 5.688889z m93.866666 0h-31.288889c-5.688889 0-8.533333-2.844444-11.377777-5.688889s-5.688889-8.533333-5.688889-11.377777 2.844444-8.533333 5.688889-11.377778 5.688889-5.688889 11.377777-5.688889h31.288889c5.688889 0 8.533333 2.844444 11.377778 5.688889s5.688889 5.688889 5.688889 11.377778c0 2.844444-2.844444 8.533333-5.688889 11.377777-2.844444 5.688889-8.533333 5.688889-11.377778 5.688889z"
              fill="#FFF"
              p-id="3004"
            ></path>
          </svg>
        </div>
        <div class="number">共有{{ videoData.length }}的视频</div>
      </div>
      <!-- 视频列表 -->
      <div class="user-video-box">
        <VideoList :videoData="videoData"></VideoList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoList from "../components/VideoList.vue";
import { VideoListByUserIdApi, UserByIdApi } from "../api/index";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const router = useRouter();
let videoData = ref<VideoRes[]>([]);
let author = ref<Author>();
let id = route.query.id as unknown as number;
// 获取视频列表
VideoListByUserIdApi(id).then((res) => {
  if (res.code == 200) {
    videoData.value = res.data;
  }
});
UserByIdApi(id).then((res) => {
  if (res.code == 200) {
    author.value = res.data;
  }
});
const goMessage = (id: number) => {
  router.push({ path: "/message", query: { id: id } });
};
</script>

<style lang="scss" scoped>
.user-video {
  position: relative;
}
.author {
  color: #fff;
  font-family: $font-family;
  width: 1200px;
  margin: 0 auto;
  height: 200px;
  .avatar {
    width: 140px;
    height: 140px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .number {
    font-size: 20px;
  }
}
</style>
