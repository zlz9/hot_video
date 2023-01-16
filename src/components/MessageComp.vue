<template>
  <!-- 私信组件 -->
  <div>
    <div class="message-box">
      <div class="head">小明同学</div>
      <div id="chat-box" ref="$chatBox">
        <div
          v-for="(item, index) in messageData"
          :key="item.id"
          :class="item.id == 2 ? 'atalk' : 'btalk'"
        >
          <div>
            <div class="name">{{ item.name }}</div>
            <div class="message">{{ item.content }}</div>
            <div class="avatar">
              <img v-lazy="" alt="" />
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
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, nextTick, onMounted } from "vue";
import { ElMessage } from "element-plus";
const word = ref("");
let $chatBox = ref();
console.log($chatBox);

const messageData = reactive([
  {
    id: 1,
    name: "小周同学",
    content: "早上好",
  },
  {
    id: 2,
    name: "小杨同学",
    content: "早上好",
  },
  {
    id: 1,
    name: "小周同学",
    content: "早上好",
  },
  {
    id: 2,
    name: "小杨同学",
    content: "早上好",
  },
  {
    id: 1,
    name: "小周同学",
    content: "早上好",
  },
]);
const sendMessage = async () => {
  let message = {
    id: 2,
    content: word.value,
    name: "小杨同学",
  };
  if (message.content == "") {
    ElMessage({
      type: "error",
      message: "请输入内容",
    });
    return;
  }
  messageData.push(message);
  word.value = "";
  nextTick(() => {
    $chatBox.value.scrollTop = $chatBox.value.scrollHeight;
  });
};
</script>

<style lang="scss" scoped>
.message-box {
  width: 1400px;
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
      width: 1300px;
      font-size: 20px;
    }
    .btn {
      height: 43px;
      width: 95px;
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
