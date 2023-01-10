<template>
  <keep-alive>
    <div class="comment-list">
      <div class="comment-total">总共{{ total }}条评论</div>
      <div class="comment-one" v-for="(item, index) in commentList">
        <div class="comment-box">
          <div class="user">
            <div class="avatar" style="width: 50px; height: 50px">
              <div class="user-name">
                {{ item.author.nickName }}
              </div>
              <img v-lazy:src="item.author.avator" alt="" />
            </div>
          </div>
          <div class="content-info">
            <!-- 评论内容 -->
            <div class="content">{{ item.content }}</div>
            <div class="create_time">{{ item.createDate }}</div>
          </div>
          <div
            class="reply-total"
            @click="showReply"
            v-show="item.childrens.length >= 1"
          >
            共{{ item.childrens.length }}条回复-{{ isFold ? "折叠" : "展开" }}
          </div>
        </div>
        <!-- 二级评论 -->
        <div
          class="comment-two"
          v-for="(subItem, index) in item.childrens"
          v-show="isShow"
        >
          <div class="comment-box">
            <div class="user">
              <div class="user-name">
                {{ subItem.author.nickName }}
                <span style="color: aqua">回复 </span
                ><span style="color: brown">{{ subItem.toUser.nickName }}</span>
              </div>
              <div class="avatar">
                <img v-lazy:src="subItem.author.avator" alt="" />
              </div>
            </div>
            <div class="content-info">
              <div class="content">{{ subItem.content }}</div>
              <div class="create_time">{{ subItem.createDate }}</div>
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
const isShow = ref<boolean>(false);
const isFold = ref<boolean>(false);
const showReply = () => {
  isShow.value = !isShow.value;
  isFold.value = !isFold.value;
};
let total = ref<number>(0);

interface RootObject {
  id: number;
  author: Author;
  content: string;
  articleId: number;
  parentId: number;
  toUser?: any;
  level: number;
  createDate: number;
  childrens: Children[];
}

interface Children {
  id: number;
  author: Author;
  content: string;
  articleId: number;
  parentId: number;
  toUser: Author;
  level: number;
  createDate: number;
  childrens?: any;
}

interface Author {
  id: string;
  nickName: string;
  avator: string;
  motto: string;
  birthday: number;
}
const commentList = reactive<RootObject[]>([
  {
    id: 106,
    author: {
      id: "1",
      nickName: "小Z不吃韭菜",
      avator:
        "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
      motto: "这是内卷的时代，这是卷王的时代，这是我的时代",
      birthday: 1231313131,
    },
    content: "评论一下",
    articleId: 146,
    parentId: 0,
    toUser: null,
    level: 1,
    createDate: 1673264293469,
    childrens: [],
  },
  {
    id: 104,
    author: {
      id: "1",
      nickName: "小Z不吃韭菜",
      avator:
        "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
      motto: "这是内卷的时代，这是卷王的时代，这是我的时代",
      birthday: 1231313131,
    },
    content: "测试评论",
    articleId: 146,
    parentId: 0,
    toUser: null,
    level: 1,
    createDate: 1673251448635,
    childrens: [
      {
        id: 105,
        author: {
          id: "1",
          nickName: "小Z不吃韭菜",
          avator:
            "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
          motto: "这是内卷的时代，这是卷王的时代，这是我的时代",
          birthday: 1231313131,
        },
        content: "测试回复评论",
        articleId: 146,
        parentId: 104,
        toUser: {
          id: "1",
          nickName: "小Z不吃韭菜",
          avator:
            "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
          motto: "这是内卷的时代，这是卷王的时代，这是我的时代",
          birthday: 1231313131,
        },
        level: 2,
        createDate: 1673251461005,
        childrens: null,
      },
      {
        id: 106,
        author: {
          id: "1",
          nickName: "小Z不吃韭菜",
          avator:
            "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
          motto: "这是内卷的时代，这是卷王的时代，这是我的时代",
          birthday: 1231313131,
        },
        content: "测试回复评论",
        articleId: 146,
        parentId: 104,
        toUser: {
          id: "1",
          nickName: "小Z不吃韭菜",
          avator:
            "http://qiniu.zhoulizheng.cn/43507260-9412-4a12-88f4-eddb2c3a858f.jpg",
          motto: "这是内卷的时代，这是卷王的时代，这是我的时代",
          birthday: 1231313131,
        },
        level: 2,
        createDate: 1673251461005,
        childrens: null,
      },
    ],
  },
]);
const replyTotal = () => {
  commentList.forEach((item) => {
    total.value++;
    if (item.childrens.length != 0) {
      item.childrens.forEach((subItem) => {
        total.value++;
      });
    }
  });
};
replyTotal();
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
