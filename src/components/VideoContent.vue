<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <div class="title">
        <slot name="title">默认标题 </slot>
      </div>
      <div class="more">
        <slot name="more">
          <svg
            t="1673096478093"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2723"
            width="48"
            height="48"
          >
            <path
              d="M245.578138 574.513776c-46.517453 0-84.362386-37.844933-84.362386-84.362386 0-46.520523 37.844933-84.367503 84.362386-84.367503 46.518476 0 84.36341 37.84698 84.36341 84.367503C329.941548 536.668843 292.096614 574.513776 245.578138 574.513776zM245.578138 446.645526c-23.986297 0-43.500746 19.516496-43.500746 43.50484 0 23.986297 19.514449 43.500746 43.500746 43.500746 23.986297 0 43.50177-19.514449 43.50177-43.500746C289.079908 466.162022 269.564435 446.645526 245.578138 446.645526z"
              fill="#cdcdcd"
              p-id="2724"
            ></path>
            <path
              d="M523.411911 574.513776c-46.517453 0-84.362386-37.844933-84.362386-84.362386 0-46.520523 37.844933-84.367503 84.362386-84.367503 46.520523 0 84.367503 37.84698 84.367503 84.367503C607.779414 536.668843 569.932434 574.513776 523.411911 574.513776zM523.411911 446.645526c-23.985274 0-43.500746 19.516496-43.500746 43.50484 0 23.986297 19.514449 43.500746 43.500746 43.500746 23.988344 0 43.505863-19.514449 43.505863-43.500746C566.917774 466.162022 547.401278 446.645526 523.411911 446.645526z"
              fill="#cdcdcd"
              p-id="2725"
            ></path>
            <path
              d="M801.246707 574.513776c-46.517453 0-84.362386-37.844933-84.362386-84.362386 0-46.520523 37.844933-84.367503 84.362386-84.367503 46.520523 0 84.367503 37.84698 84.367503 84.367503C885.61421 536.668843 847.76723 574.513776 801.246707 574.513776zM801.246707 446.645526c-23.985274 0-43.500746 19.516496-43.500746 43.50484 0 23.986297 19.514449 43.500746 43.500746 43.500746 23.988344 0 43.505863-19.514449 43.505863-43.500746C844.75257 466.162022 825.235051 446.645526 801.246707 446.645526z"
              fill="#cdcdcd"
              p-id="2726"
            ></path>
          </svg>
        </slot>
      </div>
    </div>
    <div style="display: flex; flex-direction: row; justify-content: center">
      <el-row :gutter="30">
        <el-col :span="6" v-for="(item, index) in props.videoList.slice(0, 4)">
          <div class="content">
            <img v-lazy="item.cover" alt="" />
            <div class="play_icon"></div>
            <div class="play_back"></div>
            <!-- 视频介绍 -->
            <div class="video_info">
              <div class="author">
                <div class="author_avatar">
                  <img v-lazy="item.author.avatar" alt="" />
                </div>
                <div class="author_name">{{ item.author.nickName }}</div>
              </div>
              <div class="video_info_item">
                <div class="video_name">{{ item.name }}</div>
                <div class="introduction">{{ item.selfIntroduction }}</div>
                <div class="create_time">
                  上传时间-{{ day(item.createTime).format("YYYY-MM-DD") }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref, watchEffect } from "vue";
import day from "dayjs";
const props = defineProps({
  videoList: {
    type: Array<VideoRes>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.more {
  font-size: $font-title;
  font-family: $font-family;
  color: $font-color;
  width: 200px;
}
.title {
  font-size: $font-title;
  font-family: $font-family;
  color: $font-color;
  width: 200px;
  position: relative;
  left: 114px;
  margin: 5px;
}
.content {
  margin: 10px;
  position: relative;
  width: 400px;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
  .play_icon {
    display: none;
  }
  .play_back {
    display: none;
  }
  &:hover .play_icon {
    position: absolute;
    display: block;
    width: 200px;
    height: 200px;
    background-image: url("../assets/img/play.png");
    background-repeat: no-repeat;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &:hover .play_back {
    background: black;
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .video_info {
    display: none;
  }
  .video_info {
    width: 100%;
    position: absolute;
    display: flex;
    background-color: $backgroud-color;
    text-align: center;
    z-index: 2;
    font-family: $font-family;
    color: $font-color;
    bottom: 0px;
    .author {
      width: 100px;
      height: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .author_avatar {
        width: 50px;
        height: 50px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .author_name {
      }
    }
    .video_info_item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .video_name {
        position: relative;
      }
      .introduction {
      }
      .create_time {
        position: relative;
        font-size: 12px;
      }
    }
  }
}
</style>
