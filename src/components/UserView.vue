<template>
  <div>
    <el-avatar @click="showUserInfo" :src="userStore.userInfo.avatar">
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
