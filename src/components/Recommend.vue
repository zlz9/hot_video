<template>
  <div class="recommend">
    <div class="title">视频推荐</div>
    <div class="video_list">
      <div class="video_item" v-for="(item, index) in videoList">
        <div class="video">
          <div class="name">《{{ item.name }}》</div>
          <img v-lazy="item.cover" alt="" @click="goPlayer(item.id)" />
        </div>
        <div class="summary">{{ item.selfIntroduction }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  videoList: {
    type: Array<VideoRes>,
    reqired: true,
  },
});

const goPlayer = (id: number) => {
  router.push({ path: "/player", query: { id: id } });
};
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  height: 900px;
  background-color: rgb(243, 242, 248);
  color: $font-color;
  font-family: $font-family;
  .title {
    text-align: center;
    font-size: $font-title;
    color: rgb(74, 70, 70);
    font-family: $font-family;
    font-weight: bolder;
  }
  .video_list {
    color: #101f1c;
    font-size: 16px;
    height: 800px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .video_item {
    height: 130px;
    margin: 5px;
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover {
      background-color: rgb(234, 241, 241);
    }
    .video {
      width: 100%;
      height: 110px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      width: 240px;
      text-align: center;
      font-weight: 600;
    }
    .summary {
      display: flex;
      align-items: center;
      width: 300px;
      height: 100%;
      text-indent: 1em;
      margin: 5px;
    }
  }
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  width: 6px;
  background: rgba(#101f1c, 0.1);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(144, 147, 153, 0.5);
  background-clip: padding-box;
  min-height: 28px;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
  transition: background-color 0.3s;
  cursor: pointer;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(144, 147, 153, 0.3);
}
</style>
