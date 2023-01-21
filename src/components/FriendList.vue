<template>
  <div class="friend-box">
    <div class="title">
      <slot name="title">默认标题</slot>
    </div>
    <div
      class="friend-list"
      v-for="(item, index) in props.friendList"
      @click="choseUser(item.friend.id)"
    >
      <div class="avatar">
        <img v-lazy="item.friend.avatar" alt="" />
      </div>
      <div style="position: relative; left: 13px">
        <div class="user-name">{{ item.friend.nickName }}</div>
        <div class="last-msg">{{ item.lastMsg }}</div>
        <div class="create-time">
          {{ dayjs(item.createTime).format("YYYY/MM/DD") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

// 传给父组件的函数
const emit = defineEmits<{
  (e: "chooseUser", id: number): void;
}>();
const choseUser = (id: number) => {
  emit("chooseUser", id);
};

const props = defineProps({
  friendList: {
    required: true,
    type: Array<FriendListRes>,
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 6px;
  height: 8px;
  background-color: white;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #9e9e9e;
}
.friend-box {
  width: 400px;
  background-color: rgb(55, 95, 95);
  height: 800px;
  overflow-y: scroll;
  .title {
    text-align: center;
    font-size: 20px;
  }

  .friend-list {
    position: relative;
    margin: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    .avatar {
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .user-name {
      color: black;
      font-size: 18px;
      font-weight: 700;
    }
    .last-msg {
      color: gray;
      width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .create-time {
      width: 80px;
      position: absolute;
      top: 0px;
      left: 110px;
      font-size: 8px;
    }
  }
}
</style>
