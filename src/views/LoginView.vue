<template>
  <!-- 登录 -->
  <div class="login_user">
    <div class="cute">
      <img src="../assets/img/可爱01.gif" alt="" />
      <img src="../assets/img/可爱02.gif" alt="" />
    </div>
    <div class="box">
      <div class="login">
        <div class="user">
          <div class="avator">
            <el-avatar :size="60"
              ><svg
                t="1673329931209"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2878"
                width="64"
                height="64"
              >
                <path
                  d="M575.215 547.318c53.367-24.316 90.562-78.011 90.562-140.522 0-85.257-69.149-154.383-154.406-154.383-85.299 0-154.427 69.126-154.427 154.383 0 62.49 37.172 116.185 90.562 140.522-87.156 27.24-150.586 108.698-150.586 204.715 0 12.071 9.779 21.827 21.827 21.827s21.827-9.756 21.827-21.827c0-94.161 76.613-170.774 170.776-170.774 94.184 0 170.797 76.613 170.797 170.774 0 12.071 9.756 21.827 21.827 21.827 12.07 0 21.827-9.756 21.827-21.827 0.021-95.994-63.43-177.475-150.586-204.715zM400.621 406.817c0-61.072 49.678-110.729 110.773-110.729 61.072 0 110.75 49.657 110.75 110.729 0 61.094-49.678 110.794-110.75 110.794-61.095 0-110.773-49.7-110.773-110.794z"
                  p-id="2879"
                ></path>
                <path
                  d="M511.371 960.81c-246.951 0-447.869-200.918-447.869-447.891 0-246.93 200.919-447.871 447.869-447.871 246.973 0 447.892 200.919 447.892 447.871 0 246.973-200.919 447.891-447.892 447.891z m0-854.269c-224.098 0-406.398 182.301-406.398 406.377s182.3 406.397 406.398 406.397c224.099 0 406.42-182.321 406.42-406.397S735.47 106.541 511.371 106.541z"
                  p-id="2880"
                ></path>
              </svg>
            </el-avatar>
          </div>
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
          >
            <!-- 用户名 -->
            <el-form-item prop="userName">
              <el-input
                v-model="ruleForm.userName"
                type="text"
                autocomplete="off"
                placeholder="用户名"
              />
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
              <el-input
                v-model="ruleForm.password"
                type="password"
                autocomplete="off"
                placeholder="密码"
                show-password
              />
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item prop="code">
              <div style="display: flex">
                <el-input v-model="ruleForm.code" placeholder="验证码" /><span
                  style="width: 115px; text-align: center; display: flex"
                >
                  <img :src="imgUrl" alt="" srcset="" @click="changeImgCode" />
                </span>
              </div>
            </el-form-item>
            <el-form-item>
              <router-link to="/register">没有账号？点击注册</router-link>
            </el-form-item>
            <el-form-item>
              <div class="btn">
                <el-button type="primary" @click="submitForm(ruleFormRef)"
                  >登录</el-button
                >
                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <el-divider direction="vertical" />
      <div class="icon">
        <div class="title">xiaoz热门短视频</div>
        <img src="../assets/img/hot_logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { useRouter } from "vue-router";
import { LoginApi } from "../api/index";
import { ElMessage } from "element-plus";
import { useUserStore } from "../store/user";
const userStore = useUserStore();
const router = useRouter();
let imgUrl = ref("http://localhost:8088/api/captcha?");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  userName: "",
  password: "",
  code: "",
});

const rules = reactive({
  userName: [
    { trigger: "blur", required: true },
    { min: 3, max: 6, message: "验证码长度为3-6个字符", trigger: "blur" },
  ],
  password: [
    { trigger: "blur", required: true },
    { min: 8, max: 16, message: "验证码长度为8-16个字符", trigger: "blur" },
  ],
  code: [
    { trigger: "blur", required: true },
    { min: 4, max: 4, message: "验证码长度为四个字符", trigger: "blur" },
  ],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      // 用户登录
      LoginApi(ruleForm).then((res) => {
        if (res.code == 200) {
          router.push("/index");
          ElMessage({
            dangerouslyUseHTMLString: true,
            message: "<h2>登录成功°꒰๑'ꀾ'๑꒱°</h2>",
          });
          // 持久化储存token
          localStorage.setItem("token", res.data.token);
          // 存储到userStore
          userStore.token = res.data.token;
        } else {
          ElMessage({
            dangerouslyUseHTMLString: true,
            message: `<h2>${res.msg}°꒰๑'ꀾ'๑꒱°</h2>`,
          });
        }
      });
    } else {
      return false;
    }
  });
};

const changeImgCode = () => {
  imgUrl.value = imgUrl.value + new Date();
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss">
.el-message {
  background-color: rgb(24, 16, 120);
  text-align: center;
  height: 60px;
  width: 350px;
}
.el-form-item__error {
  color: rgb(2, 19, 34);
}
.cute {
  position: relative;
  top: 230px;
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }
}
.btn {
  width: 230px;
  display: flex;
  justify-content: space-between;
}
.login_user {
  background-color: $backgroud-color;
  position: relative;
  width: 100%;
  min-height: 1200px;
  margin: 0;
  bottom: 20px;
}
.box {
  position: relative;
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 600px;
  background-color: rgb(168, 145, 145);
  margin: 0 auto;
  top: 200px;
  border-radius: 10px;
  .el-divider {
    height: 80%;
  }
  .login {
    width: 500px;
    height: 500px;
    background-color: bisque;
    border-radius: $border-radius;
    .user {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: 100px;
      width: 400px;
      .avator {
        position: relative;
        left: 60px;
        margin: 13px;
      }
    }
  }
  .icon {
    width: 500px;
    height: 500px;
    background-color: azure;
    border-radius: $border-radius;
    .title {
      height: 80px;
      font-size: 50px;
      text-align: center;
      line-height: 80px;
      font-family: $font-family;
    }
    img {
      width: 500px;
      height: 400px;
    }
  }
}
</style>
