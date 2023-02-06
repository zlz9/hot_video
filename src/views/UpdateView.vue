<template>
  <!-- 上传组件 -->
  <div class="update-box">
    <UploadVideo></UploadVideo>
    <UploadDetails></UploadDetails>
  </div>
</template>

<script setup lang="ts">
import UploadDetails from "../components/UploadDetails.vue";
import UploadVideo from "../components/UploadVideo.vue";
</script>

<style lang="scss" scoped>
.update-box {
  color: $font-color;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
