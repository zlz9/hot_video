<template>
  <!-- 评论组件 -->
  <div class="comment-box-top">
    <div class="comment-user">
      <div class="user">
        <div class="avatar">
          <img
            :src="userStore.userInfo.avatar"
            alt=""
            style="width: 100%; height: 100%; border-radius: 50%"
          />
        </div>
        <div class="user_name">{{ userStore.userInfo.nickName }}</div>
      </div>
      <el-input
        v-model="comment"
        placeholder="评论"
        style="height: 50px; width: 1300px"
        @keyup.enter.native="publish"
      />
      <span>
        <el-button style="position: relative; height: 50px" @click="publish"
          >发布评论</el-button
        >
      </span>
    </div>
    <!-- 评论部分 -->
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
            <div class="content" @click="showComment(item)">
              {{ item.content }}
              <!-- 点赞 -->
              <span
                ><div @click.stop="like(item)" class="like-comment">
                  {{ item.likeCount
                  }}<svg
                    v-if="item.status ? false : true"
                    t="1674868601345"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4324"
                    width="20"
                    height="23"
                  >
                    <path
                      d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0"
                      p-id="4325"
                      fill="#e6e6e6"
                    ></path>
                  </svg>
                  <!-- 未点赞状态 -->
                  <svg
                    v-else
                    t="1674868843954"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4811"
                    width="32"
                    height="28"
                  >
                    <path
                      d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z"
                      fill="#d81e06"
                      p-id="4812"
                    ></path>
                  </svg></div
              ></span>
            </div>
            <div class="create_time">
              {{ day(item.createTime).format("YYYY/MM/DD") }}
            </div>
            <!-- 回复框 -->
            <div class="reply-message" v-if="item.show">
              <el-input
                v-model="msg"
                @keyup.enter.native="
                  replyComment(item.id, item.parentId, item.user.id)
                "
              />
            </div>
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
              <div class="user-name-two">
                {{ subItem.toUser.nickName }}
                <span style="color: aqua"
                  ><svg
                    t="1674867582590"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2663"
                    width="12"
                    height="8"
                  >
                    <path
                      d="M93.37191 57.154573 930.62809 540.635608 93.37191 1024Z"
                      fill="#e6e6e6"
                      p-id="2664"
                    ></path>
                  </svg> </span
                ><span style="color: brown">{{ subItem.toUser.nickName }}</span>
              </div>
              <div class="avatar-two">
                <img v-lazy:src="subItem.toUser.avatar" alt="" />
              </div>
            </div>
            <div class="content-info">
              <div
                class="content"
                @click="showSubComment(subItem)"
                style="position: relative; bottom: 8px"
              >
                {{ subItem.content }}
                <!-- 点赞 -->
                <span
                  ><div @click.stop="subLike(subItem)" class="like-comment">
                    {{ subItem.likeCount
                    }}<svg
                      v-if="subItem.status ? false : true"
                      t="1674868601345"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4324"
                      width="20"
                      height="23"
                    >
                      <path
                        d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0"
                        p-id="4325"
                        fill="#e6e6e6"
                      ></path>
                    </svg>
                    <!-- 未点赞状态 -->
                    <svg
                      v-else
                      t="1674868843954"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4811"
                      width="32"
                      height="28"
                    >
                      <path
                        d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z"
                        fill="#d81e06"
                        p-id="4812"
                      ></path>
                    </svg></div
                ></span>
              </div>
              <div class="reply-message" v-if="subItem.show">
                <el-input
                  v-model="msg"
                  @keyup.enter.native="
                    replyComment(item.id, subItem.parentId, subItem.user.id)
                  "
                />
              </div>
              <div class="create_time">
                {{ day(subItem.createTime).format("YYYY/MM/DD") }}
              </div>
            </div>
          </div>
        </div>
        <el-divider border-style="dashed" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { useUserStore } from "../store/user";
import day from "dayjs";
import {
  CommentApi,
  likeCountByIdApi,
  likeCommentApi,
  disLikeCommentApi,
} from "../api";
import { useRoute } from "vue-router";
import { publishCommentApi } from "../api";
import { ElMessage } from "element-plus";
const route = useRoute();
let videoId = ref(route.query.id as unknown as number);
const isShow = ref<boolean>(false);
const isFold = ref<boolean>(false);
let likeCount = ref<number>(0);
const msg = ref("");
let total = ref<number>(0);
let commentList = ref<Comment[]>([]);
let CommentPage = reactive({
  id: videoId,
  page: 0,
  pageSize: 10,
});

const comment = ref<string>("");
let CommentParams = {
  content: "",
  videoId: videoId.value,
};
const publish = () => {
  CommentParams.content = comment.value;
  if (comment.value == "") {
    ElMessage({
      message: "内容不能为空",
    });
    return;
  }
  publishCommentApi(CommentParams).then((res) => {
    if (res.code == 200) {
      ElMessage({
        message: `${res.msg}`,
      });
      comment.value = "";
      getCommentList();
    }
  });
};
/**
 * 获取评论列表
 */
const getCommentList = async () => {
  const res = await CommentApi(CommentPage);
  commentList.value = res.data;
  res.data.forEach((item) => {
    total.value++;
    if (item.children) {
      item.children.forEach((subItem) => {
        total.value++;
      });
    }
  });
};
/**
 * 获取评论数
 */
const getComment = async () => {
  const res = await CommentApi(CommentPage);
  commentList.value = res.data;
  res.data.forEach((item) => {
    total.value++;
    if (item.children) {
      item.children.forEach((subItem) => {
        total.value++;
      });
    }
  });
};
getComment();
/**
 *评论列表部分
 */

const showReply = () => {
  isShow.value = !isShow.value;
  isFold.value = !isFold.value;
};

const userStore = useUserStore();
let userId = userStore.userInfo.id;
const likeParams = reactive({
  infoId: 0,
  userId: userId,
});
/**
 * 如果状态码为200 点赞成功 按钮变红，点赞数加一，
 * 如果状态码为505 则取消点赞 按钮变白，点赞数减一
 */
const like = (item: Comment) => {
  likeParams.infoId = item.id;
  likeCommentApi(likeParams).then((res) => {
    if (res.code == 200) {
      item.status = true;
      item.likeCount++;
    } else {
      disLikeCommentApi(likeParams).then((res) => {
        if (item.likeCount == 0) {
          return;
        }
        item.likeCount--;
        item.status = !item.status;
      });
    }
  });
};

const subLike = (item: Comment) => {
  likeParams.infoId = item.id;
  likeCommentApi(likeParams).then((res) => {
    if (res.code == 200) {
      item.status = true;
      item.likeCount++;
    } else {
      disLikeCommentApi(likeParams).then((res) => {
        item.likeCount--;
        item.status = !item.status;
      });
    }
  });
};

// 获取点赞数
likeCountByIdApi(videoId.value).then((res) => {
  likeCount.value = res.data;
});
let params = {
  content: "",
  parentId: 0,
  toUserId: 0,
  videoId: 0,
};
/**
 *
 * @param videoId 回复评论
 * @param parentId
 * @param toUserId
 */
const replyComment = (id: number, parentId: number, toUserId: number) => {
  params.content = msg.value;
  params.parentId = id;
  params.toUserId = toUserId;
  params.videoId = videoId.value;

  publishCommentApi(params).then((res) => {
    if (res.code == 200) {
      ElMessage({
        message: "回复成功",
      });
      msg.value = "";
      isFold.value = !isFold.value;
      getCommentList();
    }
  });
};
/**
 *
 * @param item 展示回复框
 */
const showComment = (item: Child) => {
  const nowStatus = item.show;
  commentList.value.forEach((item) => {
    item.show = false;
  });
  item.show = !nowStatus;
};

const showSubComment = (subItem: Child) => {
  const nowStatus = subItem.show;
  commentList.value.forEach((subItem) => {
    subItem.children.forEach((element) => {
      element.show = false;
    });
  });
  subItem.show = !nowStatus;
};
</script>

<style lang="scss" scoped>
.comment-box-top {
  color: $font-color;
  min-height: 600px;
  .comment-user {
    display: flex;
    align-items: center;
    .user {
      margin: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      left: 0px;

      .avatar {
        width: 60px;
        height: 60px;
      }
      .user_name {
        font-size: 8px;
        position: relative;
        top: 16px;
        width: 80px;
        text-align: center;
      }
    }
  }
}
.reply-message {
  position: relative;
  width: 300px;
}
.like-comment {
  position: absolute;
  right: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
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

  .content {
    min-height: 33px;
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
  .user {
    .avatar {
      img {
        position: relative;
        right: 69px;
        top: 1px;
      }
    }
    .user-name {
      top: 10px;
      position: relative;
      right: 23px;
    }
  }
}
.comment-two {
  width: 1310px;
  display: flex;
  position: relative;
  left: 60px;
}
.avatar-two {
  width: 35px;
  height: 35px;
  position: absolute;
  left: -30px;
  top: 15px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.user-name-two {
  position: relative;
  right: 34px;
  bottom: 18px;
}
</style>
