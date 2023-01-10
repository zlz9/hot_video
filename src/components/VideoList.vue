<template>
  <keep-alive>
    <div>
      <div class="title">
        <slot name="title"> </slot>
        <slot name="icon"></slot>
      </div>
      <div class="video_list">
        <el-row :gutter="20">
          <el-col
            :span="6"
            v-for="(item, index) in props.videoData"
            @click="goPlayer(item.id)"
          >
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
  </keep-alive>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import day from "dayjs";
import { useRouter } from "vue-router";
const router = useRouter();
const goPlayer = (id: number) => {
  router.push({ path: "/player", query: { id: id } });
};
const props = defineProps({
  videoData: {
    // type: Object as PropType<VideoByTagRes>,
    // required: true,
    type: Array<VideoRes>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-size: $font-title;
  font-family: $font-family;
  color: $font-color;
  position: relative;
  width: 200px;
  left: 170px;
}
.video_list {
  position: relative;
  width: 1600px;
  margin: 0 auto;
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
}
</style>
