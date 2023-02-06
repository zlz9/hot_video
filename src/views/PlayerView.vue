`
<template>
  <div class="box-player">
    <div class="title">{{ videoInfo.name }}</div>
    <div class="player">
      <div class="video_player">
        <VideoPlayer></VideoPlayer>
      </div>
      <div class="recommend">
        <Recommend :videoList="videoList"></Recommend>
      </div>
    </div>
    <div class="video_info">
      <div class="author">
        <div class="avatar">
          <img v-lazy="videoInfo.author.avatar" alt="" />
        </div>
        <div class="nick_name">{{ videoInfo.author.nickName }}</div>
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 1200px;
          left: 200px;
        "
      >
        <div class="summary">
          {{ videoInfo.selfIntroduction }}
        </div>
        <div class="date">
          {{ day(videoInfo.createTime).format("YYYY/MM/DD") }}
        </div>
      </div>
    </div>
    <CommentView></CommentView>
  </div>
</template>

<script setup lang="ts">
import { LimilarVideoApi } from "../api";
import { watch } from "vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import Recommend from "../components/Recommend.vue";
import CommentView from "../components/CommentView.vue";
import day from "dayjs";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import { getVideoByIdApi } from "../api";
import { ref } from "vue";
const videoList = ref<VideoRes[]>([]);
const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
let id = route.query.id as unknown as number;
let url = ref();
let videoInfo = ref({
  cover: "",
  name: "",
  createTime: 0,
  author: {
    id: 0,
    nickName: "",
    selfIntroduction: "",
    avatar: "",
  },
  selfIntroduction: "",
});
LimilarVideoApi(id).then((res) => {
  videoList.value = res.data;
});
//将id存入pinia
userStore.VideoIds.push(id);
getVideoByIdApi(id).then((res) => {
  videoInfo.value = res.data;
  url.value = res.data.url;
});
//监听，当路由发生变化时刷新页面，解决路由跳转不刷新的问题
watch(
  () => route.query.id,
  (newValue, oldValue) => {
    getVideoByIdApi(newValue).then((res) => {
      videoInfo.value = res.data;
      url.value = res.data.url;
    });
  }
);
</script>

<style lang="scss" scoped>
.box-player {
  position: relative;
  margin: 0 auto;
  .title {
    color: $font-color;
    font-size: $font-title;
    text-align: center;
    font-family: $font-family;
    margin: 5px;
  }
  .player {
    display: flex;
    justify-content: space-around;
    .recommend {
      width: 420px;
    }
  }
  .video_info {
    color: $font-color;
    display: flex;
    margin: 10px;

    .author {
      .avatar {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .nick_name {
      }
    }
    .summary {
      text-indent: 2em;
    }
    .date {
      position: relative;
      top: 20px;
    }
  }
}
</style>
`
