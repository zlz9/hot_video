<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { useUserStore } from "./store/user";
import { CurrentUserApi } from "./api/index";
import { useChatStore } from "./store/chat";
const userStore = useUserStore();
const chatStore = useChatStore();
CurrentUserApi()
  .then((res) => {
    if (res.code == 200) {
      userStore.userInfo = res.data;
    }
  })
  .catch((error) => {
    console.log(error);
  });
var ws = new WebSocket(`ws://localhost:8088/websocket/${userStore.token}`);
ws.onopen = () => {
  console.log("连接成功");
};
ws.onmessage = (data) => {
  console.log("收到的信息", data.data);
  let chatData: WsMsg = data.data;
  chatStore.chatList.push(JSON.parse(chatData));
};
ws.close = () => {
  console.log("异常关闭");
};
</script>
<style lang="scss"></style>
