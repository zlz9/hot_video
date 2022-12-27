<template>
  <div>
    <el-avatar @click="showUserInfo"> user </el-avatar>
    <UserInfoVue ref="$UserInfoVue"></UserInfoVue>
  </div>
</template>

<script setup lang="ts">
import UserInfoVue from "./UserInfo.vue";
import { ref } from "vue";
const $UserInfoVue = ref();
const showUserInfo = () => {
  $UserInfoVue.value.traggle();
};
</script>

<style lang="scss" scoped></style>
