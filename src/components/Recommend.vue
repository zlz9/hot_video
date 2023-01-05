<template>
  <div class="recommend">
    <div class="title">猜你喜欢</div>
    <div class="video_list">
      <div class="video_item" v-for="(item, index) in 12">
        <div class="video">
          <div class="play_icon"></div>
          <div class="play_back"></div>
          <video src="../assets/video/测试视频.mp4"></video>
        </div>
        <div class="name">只想遇见你</div>
        <div class="summary">这是只想遇见你的介绍</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  height: 900px;
  background-color: aquamarine;
  .title {
    text-align: center;
    font-size: $font-title;
    color: rgb(190, 22, 22);
    font-family: $font-family;
    font-weight: bolder;
  }
  .video_list {
    height: 800px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .video_item {
    height: 110px;
    margin: 5px;
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .title {
    }
    .video {
      position: relative;
      height: 100px;
      width: 120px;
      //   background-color: black;
      .play_icon {
        display: none;
      }
      .play_back {
        display: none;
      }
      &:hover .play_icon {
        position: absolute;
        display: block;
        background-image: url("../assets/img/play.png");
        height: 40px;
        width: 40px;
        z-index: 100;
        background-repeat: no-repeat;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-size: contain;
      }
      &:hover .play_back {
        display: block;
        background: rgb(173, 161, 161);
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.5;
      }
      video {
        width: 100%;
        height: 100%;
      }
    }
    .summary {
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
