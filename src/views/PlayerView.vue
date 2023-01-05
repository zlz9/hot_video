<template>
  <div class="box">
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
      <div class="summary"></div>
      <div class="data"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoPlayer from "../components/VideoPlayer.vue";
import Recommend from "../components/Recommend.vue";
</script>

<style lang="scss" scoped>
.box {
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
    .author {
      .avatar {
        img {
        }
      }
    }
    .summary {
    }
    .data {
    }
  }
}
</style>
