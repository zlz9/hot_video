<template>
  <div>
    <el-avatar
      @click="showUserInfo"
      :src="
        userStore.userInfo.avatar
          ? userStore.userInfo.avatar
          : 'http://h-video.oss-cn-chengdu.aliyuncs.com/fileTest/e3f673c3-f4b6-40ab-a411-26b2bb4535a0.jpg'
      "
    >
    </el-avatar>
    <UserInfoVue ref="$UserInfoVue"></UserInfoVue>
  </div>
</template>

<script setup lang="ts">
import UserInfoVue from "./UserInfo.vue";
import { ref } from "vue";
import { useUserStore } from "../store/user";
const userStore = useUserStore();
const $UserInfoVue = ref();
const showUserInfo = () => {
  $UserInfoVue.value.traggle();
};
</script>

<style lang="scss" scoped></style>
