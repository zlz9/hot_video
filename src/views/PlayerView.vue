`
<template>
  <div class="box-player">
    <div class="title">测试标题</div>
    <div class="player">
      <div class="video_player">
        <VideoPlayer></VideoPlayer>
      </div>
      <div class="recommend">
        <Recommend></Recommend>
      </div>
    </div>
    <div class="video_info">
      <div class="author">
        <div class="avatar">
          <img src="../assets/img/可爱01.gif" alt="" />
        </div>
        <div class="nick_name">测试名称</div>
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
          一夜间惨变孤儿的张小凡被青云门收为弟子，经过五年刻苦修炼，他在师门七脉会武上大放异彩，后被派往空桑山打探魔教行迹，旅程中，他与师姐陆雪琪遭遇危难，并结识救护了魔教女子碧瑶，同时，新的危险也在前方等待着他。
        </div>
        <div class="date">1999-12-12</div>
      </div>
    </div>
    <CommentView></CommentView>
  </div>
</template>

<script setup lang="ts">
import VideoPlayer from "../components/VideoPlayer.vue";
import Recommend from "../components/Recommend.vue";
import CommentView from "../components/CommentView.vue";
import { useRoute } from "vue-router";
import { useUserStore } from "../store/user";
import { watch } from "vue";
const route = useRoute();
const userStore = useUserStore();
let id = route.query.id as unknown as number;
//将id存入pinia
userStore.VideoIds.push(id);
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
