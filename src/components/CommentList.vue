<template>
  <keep-alive>
    <div class="comment-list">
      <div class="comment-total">总共{{ total }}条评论</div>
      <div class="comment-one" v-for="(item, index) in commentList">
        <div class="comment-box">
          <div class="user">
            <div class="avatar" style="width: 50px; height: 50px">
              <div class="user-name">{{ item.user.nickName }}</div>
              <img v-lazy:src="item.user.avatar" alt="" />
            </div>
          </div>
          <div class="content-info">
            <!-- 评论内容 -->
            <div class="content">{{ item.content }}</div>
            <div class="create_time">{{ item.createTime }}</div>
          </div>
          <div
            class="reply-total"
            @click="showReply"
            v-show="item.children.length >= 1"
          >
            共{{ item.children.length }}条回复-{{ isFold ? "折叠" : "展开" }}
          </div>
        </div>
        <!-- 二级评论 -->
        <div
          class="comment-two"
          v-for="(subItem, index) in item.children"
          v-show="isShow"
        >
          <div class="comment-box">
            <div class="user">
              <div class="user-name">
                {{ subItem.toUser.nickName }}
                <span style="color: aqua">回复 </span
                ><span style="color: brown">{{ subItem.toUser.nickName }}</span>
              </div>
              <div class="avatar">
                <img v-lazy:src="subItem.toUser.avatar" alt="" />
              </div>
            </div>
            <div class="content-info">
              <div class="content">{{ subItem.content }}</div>
              <div class="create_time">{{ subItem.createTime }}</div>
            </div>
          </div>
        </div>
        <el-divider border-style="dashed" />
      </div>
    </div>
  </keep-alive>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { CommentApi } from "../api";
const isShow = ref<boolean>(false);
const isFold = ref<boolean>(false);
const showReply = () => {
  isShow.value = !isShow.value;
  isFold.value = !isFold.value;
};
let total = ref<number>(0);
let CommentPage = reactive({
  id: 1,
  page: 0,
  pageSize: 10,
});
let commentList = ref<Comment[]>([]);
// 评论总数
const replyTotal = () => {
  commentList.value.forEach((item) => {
    total.value++;
    if (item.children.length != 0) {
      item.children.forEach((subItem) => {
        total.value++;
      });
    }
  });
};
replyTotal();

CommentApi(CommentPage).then((res) => {
  commentList.value = res.data;
});
console.log(commentList, "commentList");
</script>

<style lang="scss" scoped>
.reply-total {
  font-size: 8px;
}
.content-info {
  display: flex;
  position: relative;
  left: 60px;
  bottom: 5px;
  flex-direction: column;
}
.comment-list {
  position: relative;
  width: 1300px;
  left: 120px;
}
.comment-box {
  width: 100%;
  .user {
    .avatar {
      position: relative;
      top: 15px;
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .user-name {
      color: rgb(147, 46, 198);
      width: 200px;
      position: relative;
      left: 60px;
      font-size: 8px;
      top: 20px;
    }
  }
  .content {
    height: 33px;
    text-indent: 2em;
    display: flex;
    align-items: center;
    font-size: 16px;
  }
  .create_time {
    font-size: 8px;
  }
}
.comment-one {
  width: 1400px;
  position: relative;
}
.comment-two {
  width: 1310px;
  display: flex;
  position: relative;
  left: 60px;
}
</style>
