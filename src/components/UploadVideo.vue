<template>
  <div class="video-upload">
    <el-upload
      class="upload-demo"
      drag
      :http-request="uploadFile"
      multiple
      :before-upload="beforeUpload"
      :limit="1"
      :on-exceed="handleExcessd"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">拖拽上传或者 <em>点击上传</em></div>
      <slot name="tip"> <div class="el-upload__tip">大小不超过100MB</div></slot>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { UploadApi } from "../api";
import { ElMessage } from "element-plus";
import { useVideoStore } from "../store/video";
import type { UploadProps } from "element-plus";
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
const beforeUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (
    [
      "video/mp4",
      "video/ogg",
      "video/flv",
      "video/avi",
      "video/wmv",
      "video/rmvb",
      "image/jpeg",
      "image/png",
    ].indexOf(rawFile.type) == -1
  ) {
    ElMessage.error(
      "上传文件只能是 mp4、ogg、flv、avi、wmv、rmvb 、image/png、image/jpeg格式!"
    );
    return false;
  }
  if (rawFile.size / 1024 / 1024 > 100) {
    ElMessage.error("上传文件大小不能超过100MB");
    return false;
  }
  return true;
};
const handleExcessd = () => {
  ElMessage.warning("一次只能上传一个文件");
};
</script>

<style scoped lang="scss">
.video-upload {
  width: 37.5rem;
}
</style>
