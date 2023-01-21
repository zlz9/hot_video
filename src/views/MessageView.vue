<template>
  <!-- 私信组件 -->
  <div class="message-box">
    <div class="friend-comp">
      <FriendList :friend-list="friendList" @choose-user="choseUser">
        <template #title> 好友列表 </template>
      </FriendList>
    </div>
    <div class="msg-comp">
      <MessageComp :friend-id="friendId"> </MessageComp>
    </div>
  </div>
</template>

<script setup lang="ts">
import MessageComp from "../components/MessageComp.vue";
import FriendList from "../components/FriendList.vue";
import { ref } from "vue";
import { FriendListApi } from "../api/index";
import { useChatStore } from "../store/chat";
const chatStore = useChatStore();
let friendId = ref<number>(0);
const friendList = ref<FriendListRes[]>([]);
const choseUser = (id: number) => {
  friendId.value = id;
};
FriendListApi().then((res) => {
  friendList.value = res.data;
  chatStore.friendList = res.data;
});
</script>

<style lang="scss" scoped>
.message-box {
  color: $font-color;
  display: flex;
  justify-content: center;
}
</style>
