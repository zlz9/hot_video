<template>
  <!-- 评论组件 -->
  <div class="comment-box">
    <div class="comment-user">
      <div class="user">
        <div class="avatar">
          <img
            src="../assets/img/可爱01.gif"
            alt=""
            style="width: 100%; height: 100%; border-radius: 50%"
          />
        </div>
        <div class="user_name">小Z不吃韭菜</div>
      </div>
      <el-input
        v-model="comment"
        placeholder="评论"
        style="height: 50px; width: 1300px"
      />
      <span>
        <el-button style="position: relative; height: 50px">发布评论</el-button>
      </span>
    </div>
    <CommentList></CommentList>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CommentList from "./CommentList.vue";
const comment = ref<string>();
</script>

<style lang="scss" scoped>
.comment-box {
  color: $font-color;
  .comment-user {
    display: flex;
    align-items: center;
    .user {
      margin: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .avatar {
        width: 60px;
        height: 60px;
      }
      .user_name {
        font-size: 8px;
      }
    }
  }
}
</style>
