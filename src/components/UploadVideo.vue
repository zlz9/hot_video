<template>
  <div class="video-upload">
    <el-upload class="upload-demo" drag :http-request="uploadFile" multiple>
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">拖拽上传或者 <em>点击上传</em></div>
      <slot name="tip"> <div class="el-upload__tip">大小不超过50MB</div></slot>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { UploadApi } from "../api";
import { useVideoStore } from "../store/video";
const videoStore = useVideoStore();
const uploadFile = (option: any) => {
  let formData = new FormData();
  formData.append("file", option.file);
  UploadApi(option).then((res) => {
    if (res.code == 200) {
      videoStore.url = res.msg;
    }
  });
};
</script>

<style scoped lang="scss">
.video-upload {
  width: 37.5rem;
}
</style>
