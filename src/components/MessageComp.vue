<template>
  <!-- 私信组件 -->
  <div>
    <div
      class="message-box"
      v-if="friendInfo?.nickName"
      style="width: 1200px; height: 800px"
    >
      <div class="head">{{ friendInfo?.nickName }}</div>
      <div id="chat-box" ref="$chatBox">
        <div
          style="
            display: flex;
            justify-content: center;
            position: relative;
            top: 5px;
          "
        >
          <el-link type="primary" @click="showMore">加载更多...</el-link>
        </div>
        <!-- 聊天列表 -->
        <div
          v-for="(item, index) in chatStore.chatList"
          :class="item.sendUser.id == userStore.userInfo.id ? 'atalk' : 'btalk'"
        >
          <!-- atalk是自己，btalk是朋友 -->
          <div>
            <div class="name">
              {{
                item.sendUser.id == userStore.userInfo.id
                  ? userStore.userInfo.nickName
                  : friendInfo?.nickName
              }}
            </div>
            <div class="message">{{ item.message }}</div>
            <div class="avatar">
              <img
                v-lazy="
                  item.sendUser.id == userStore.userInfo.id
                    ? userStore.userInfo.avatar
                    : friendInfo?.avatar
                "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="sendMessage">
        <div class="message">
          <input
            type="text"
            v-model="word"
            class="input"
            @keyup.enter.native="sendMessage"
          /><span
            ><el-button class="btn" @click="sendMessage">发送</el-button></span
          >
        </div>
      </div>
    </div>
    <div v-else class="background-image">
      <svg
        t="1674220653065"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3788"
        width="1200"
        height="800"
      >
        <path
          d="M222.08 478.08h-1.28c-7.68 0-13.44-5.76-13.44-13.44s5.76-13.44 13.44-13.44h1.28c7.68 0 13.44 5.76 13.44 13.44s-5.76 13.44-13.44 13.44zM464.64 478.08h-3.2c-7.68 0-13.44-5.76-13.44-13.44s5.76-13.44 13.44-13.44h3.2c7.68 0 13.44 5.76 13.44 13.44s-5.76 13.44-13.44 13.44z m-60.16 0h-3.2c-7.68 0-13.44-5.76-13.44-13.44s5.76-13.44 13.44-13.44h3.2c7.68 0 13.44 5.76 13.44 13.44s-6.4 13.44-13.44 13.44z m-60.8 0h-3.2c-7.68 0-13.44-5.76-13.44-13.44s5.76-13.44 13.44-13.44h3.2c7.68 0 13.44 5.76 13.44 13.44s-6.4 13.44-13.44 13.44z m-60.8 0h-3.2c-7.68 0-13.44-5.76-13.44-13.44s5.76-13.44 13.44-13.44h3.2c7.68 0 13.44 5.76 13.44 13.44s-5.76 13.44-13.44 13.44zM523.52 478.08h-1.28c-7.68 0-13.44-5.76-13.44-13.44s5.76-13.44 13.44-13.44h1.28c7.68 0 13.44 5.76 13.44 13.44s-5.76 13.44-13.44 13.44z"
          fill="#cdcdcd"
          p-id="3789"
        ></path>
        <path
          d="M677.12 553.6h-1.28c-7.68 0-13.44-5.76-13.44-13.44s5.76-13.44 13.44-13.44h1.28c7.68 0 13.44 5.76 13.44 13.44s-6.4 13.44-13.44 13.44zM779.52 553.6h-2.56c-7.68 0-13.44-5.76-13.44-13.44s5.76-13.44 13.44-13.44h2.56c7.68 0 13.44 5.76 13.44 13.44s-5.76 13.44-13.44 13.44z m-51.2 0h-2.56c-7.68 0-13.44-5.76-13.44-13.44s5.76-13.44 13.44-13.44h2.56c7.68 0 13.44 5.76 13.44 13.44s-5.76 13.44-13.44 13.44zM830.08 553.6h-1.28c-7.68 0-13.44-5.76-13.44-13.44s5.76-13.44 13.44-13.44h1.28c7.68 0 13.44 5.76 13.44 13.44s-5.76 13.44-13.44 13.44z"
          fill="#cdcdcd"
          p-id="3790"
        ></path>
        <path
          d="M978.56 949.12c-1.28 0-2.56 0-3.2-0.64l-220.8-107.52c-25.6 6.4-51.84 10.24-78.72 10.24-83.2 0-161.28-32.64-219.52-90.88-3.2-3.2-3.2-7.68 0-10.88s7.68-3.2 10.88 0c55.68 55.68 129.92 86.4 209.28 86.4 26.24 0 52.48-3.2 77.44-10.24 1.92-0.64 3.84 0 5.12 0.64l200.32 97.28-93.44-149.12c-1.92-3.2-1.28-7.04 1.28-9.6 65.28-56.32 103.04-138.24 103.04-224 0-162.56-132.48-295.68-295.68-295.68-29.44 0-58.24 4.48-86.4 12.8-3.84 1.28-8.32-1.28-9.6-5.12-1.28-3.84 1.28-8.32 5.12-9.6 29.44-8.96 60.16-13.44 90.88-13.44 171.52 0 310.4 139.52 310.4 310.4 0 88.32-37.76 172.16-103.68 231.68l102.4 165.76c1.92 2.56 1.28 6.4-0.64 8.96-0.64 1.28-2.56 2.56-4.48 2.56z"
          fill="#cdcdcd"
          p-id="3791"
        ></path>
        <path
          d="M69.12 874.24c-2.56 0-4.48-1.28-5.76-2.56-1.92-2.56-1.92-6.4 0-8.96l113.28-156.8C103.68 646.4 62.08 558.72 62.08 464.64c0-171.52 139.52-310.4 310.4-310.4 171.52 0 310.4 139.52 310.4 310.4s-139.52 310.4-310.4 310.4c-18.56 0-36.48-1.28-54.4-4.48l-245.76 103.04c-0.64 0.64-1.92 0.64-3.2 0.64zM372.48 168.96C209.28 168.96 76.8 301.44 76.8 464.64c0 92.16 41.6 176.64 114.56 233.6 3.2 2.56 3.84 7.04 1.28 10.24l-101.76 140.8L313.6 755.84c1.28-0.64 2.56-0.64 4.48-0.64 17.92 3.2 35.84 5.12 53.76 5.12 162.56 0 295.68-132.48 295.68-295.68 0-163.2-132.48-295.68-295.04-295.68z"
          fill="#cdcdcd"
          p-id="3792"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, watch } from "vue";
import { sendMessageApi } from "../api/index";
import { useUserStore } from "../store/user";
import { UserByIdApi, newChatListApi, moreChatListApi } from "../api";
import { useChatStore } from "../store/chat";
import { ElMessage } from "element-plus";
const chatStore = useChatStore();
let friendInfo = ref<Author>({
  id: 1,
  avatar: "",
  nickName: "",
  selfIntroduction: "",
});
const userStore = useUserStore();
const word = ref("");
let $chatBox = ref();

const props = defineProps({
  friendId: {
    required: true,
    type: Number,
  },
});
const pageParams = reactive({
  page: 1,
  pageSize: 10,
  toUserId: 2,
});
let user: Author = {
  id: userStore.userInfo.id,
  avatar: userStore.userInfo.avatar,
  nickName: userStore.userInfo.nickName,
  selfIntroduction: "",
};
// 构造参数
let chatData: WsMsg = reactive({
  message: word.value,
  receiveUser: {
    id: friendInfo.value.id,
    nickName: friendInfo.value.nickName,
    avatar: friendInfo.value.avatar,
    selfIntroduction: friendInfo.value.selfIntroduction,
  },
  sendUser: {
    id: userStore.userInfo.id,
    nickName: userStore.userInfo.nickName,
    avatar: userStore.userInfo.avatar,
    selfIntroduction: userStore.userInfo.selfIntroduction,
  },
});
const sendMessage = () => {
  chatData.receiveUser = friendInfo.value;
  chatData.message = word.value;
  if (chatData.message == "") {
    ElMessage({
      type: "warning",
      message: "请输入有效内容",
    });
    return;
  }
  chatStore.pushChatList(chatData);
  // 发送请求
  sendMessageApi(friendInfo.value?.id, chatData.message).then((res) => {});
  nextTick(() => {
    $chatBox.value.scrollTop = $chatBox.value.scrollHeight;
  });
  word.value = "";
};

const showMore = () => {
  // 查询更多消息
  let { page, pageSize } = pageParams;
  let toUserId = props.friendId;

  moreChatListApi(toUserId, page, pageSize).then((res) => {
    res.data.forEach((item) => {
      chatStore.chatList.unshift(item);
    });
  });
};

watch(props, () => {
  UserByIdApi(props.friendId).then((res) => {
    if (res.code == 200) {
      friendInfo.value = res.data;
    }
  });
  // 监听当前联系人清空聊天列表
  chatStore.chatList = [];
  // 根据当前联系人获取最新信息
  newChatListApi(props.friendId).then((res) => {
    if (res.code == 400) {
      return;
    }
    chatStore.chatList = res.data;
  });
});
</script>

<style lang="scss" scoped>
.background-image {
  width: 1200px;
  height: 800px;
  background-color: aliceblue;
}
.message-box {
  padding: 5px;
  width: 1200x;
  height: 800px;
  background-color: rgb(25, 74, 74);
  margin: 0 auto;
  .head {
    font-size: 20px;
    display: flex;
    width: 100%;
    align-items: center;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    font-family: $font-family;
  }

  #chat-box {
    overflow-y: auto;
    width: 100%;
    height: 700px;
    background-color: aqua;
    .atalk {
      display: flex;
      flex-direction: row-reverse;
      margin: 5px;
      padding: 5px;
      .message {
        position: relative;
        width: 260px;
        background-color: rgb(19, 84, 84);
        border-radius: 10px;
        padding: 2px;
        text-align: center;
        right: 220px;
        line-height: 40px;
      }
      .name {
        text-align: center;
        position: relative;
        right: 222px;
      }
      .avatar {
        width: 50px;
        height: 50px;
        position: relative;
        left: 73px;
        bottom: 47px;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
    }
    .btalk {
      margin: 5px;
      padding: 5px;
      .message {
        position: relative;
        border-radius: 10px;
        width: 260px;
        background-color: rgb(75, 101, 101);
        padding: 2px;
        text-align: center;
        left: 200px;
        line-height: 40px;
      }
      .name {
        position: relative;
        left: 232px;
        width: 200px;
        text-align: center;
      }
      .avatar {
        width: 50px;
        height: 50px;
        position: relative;
        left: 130px;
        bottom: 48px;
        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .sendMessage {
    height: 60px;
    width: 100%;
    .message {
      height: 40px;
    }
    .input {
      height: 100%;
      width: 1100px;
      font-size: 20px;
    }
    .btn {
      height: 42px;
      width: 96px;
      position: relative;
      bottom: 2px;
    }
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    width: 6px;
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
}
</style>
