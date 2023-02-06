<template>
  <router-view></router-view>
  <FooterView></FooterView>
</template>
<script setup lang="ts">
import { useUserStore } from "./store/user";
import { CurrentUserApi } from "./api/index";
import { useChatStore } from "./store/chat";
import FooterView from "./components/FooterView.vue";
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
<style lang="scss">
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  width: 2px;
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
