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
                t="1673331302284"
                class="icon"
                viewBox="0 0 1870 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2745"
                width="64"
                height="64"
              >
                <path
                  d="M154.691125 898.451578c42.194767-101.861343 69.541948-189.634745 84.458592-307.241435L362.557324 591.210143c-16.574049 115.051524-43.92123 225.268951-83.629889 307.241435L154.691125 898.451578zM225.890477 298.816293 172.922579 128.172646l125.065012 0L350.126787 298.816293 225.890477 298.816293zM237.492312 532.30321l-54.694362-183.005125 125.065012 0 53.796601 183.005125L237.492312 532.30321zM408.135959 602.811977 408.135959 555.575937l184.66253 0L592.798489 320.293499 390.733207 320.293499 390.733207 273.126517l533.408147 0 0 47.23604-204.551389 0 0 235.282439 186.388994 0 0 47.23604-186.388994 0 0 235.21338 220.296736 0 0 47.23604L375.816563 885.330456l0-47.23604 216.981926 0L592.798489 602.811977 408.135959 602.811977zM594.455894 242.464527 561.376855 110.769895l127.55112 0 32.319396 131.694632L594.455894 242.464527z"
                  p-id="2746"
                ></path>
                <path
                  d="M984.153224 495.080658l31.559752 0L1015.712975 188.598867c0-30.592932 24.032371-55.454006 54.625303-55.454006l226.926356 0c30.661991 0 54.694362 24.792015 54.694362 55.454006l0 306.481791 48.824386 0L1400.783383 188.598867c0-30.592932 25.689776-55.454006 55.523064-55.454006l226.926356 0c30.592932 0 55.523064 24.792015 55.523064 55.454006l0 306.481791 28.106825 0 0 47.23604-28.106825 0 0 301.509576c0 29.833288-24.861074 55.454006-55.523064 55.454006l-123.407607 0 0-47.23604 30.592932 0c13.259239 0 24.032371-10.773132 24.032371-24.032371L1614.450499 542.316698l-90.259509 0 0 179.690316c0 73.754518-13.190181 135.838144-30.592932 177.204208l-122.578905 0c16.574049-40.60642 29.833288-101.861343 29.833288-177.204208L1400.852441 542.316698l-48.824386 0 0 301.509576c0 29.833288-24.032371 55.454006-54.694362 55.454006l-122.509846 0 0-47.23604 30.592932 0c12.430537 0 23.203669-10.773132 23.203669-24.032371L1228.620448 542.316698l-90.328568 0 0 179.690316c0 73.754518-12.499595 135.838144-29.833288 177.204208l-122.578905 0c16.574049-40.60642 29.902347-101.861343 29.902347-177.204208L1015.782034 542.316698l-31.559752 0L984.222282 495.080658zM1138.29188 495.080658l90.328568 0 0-290.736445c0-13.259239-10.773132-24.032371-23.203669-24.032371L1162.255193 180.311842c-14.087942 0-24.032371 10.704073-24.032371 24.032371L1138.222822 495.080658zM1524.260049 495.080658l90.259509 0 0-290.736445c0-13.259239-10.704073-24.032371-24.032371-24.032371l-43.023469 0c-13.190181 0-23.203669 10.704073-23.203669 24.032371L1524.260049 495.080658z"
                  p-id="2747"
                ></path>
              </svg>
            </el-avatar>
          </div>
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="7.5rem"
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
              />
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item prop="code">
              <el-input v-model="ruleForm.code" placeholder="验证码" />
            </el-form-item>
            <el-form-item>
              <div class="btn">
                <el-button type="primary" @click="submitForm(ruleFormRef)"
                  >注册</el-button
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
const router = useRouter();
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
      console.log("submit!");
      router.push("/index");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss">
.el-form-item__error {
  color: rgb(2, 19, 34);
}
.cute {
  position: relative;
  top: 14.375rem;
  width: 68.75rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 3.125rem;
  }
}
.btn {
  width: 14.375rem;
  display: flex;
  justify-content: space-between;
}
.login_user {
  background-color: $backgroud-color;
  position: relative;
  width: 100%;
  min-height: 75rem;
  margin: 0;
  bottom: 1.25rem;
}
.box {
  position: relative;
  width: 75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 37.5rem;
  background-color: rgb(168, 145, 145);
  margin: 0 auto;
  top: 12.5rem;
  border-radius: 0.625rem;
  .el-divider {
    height: 80%;
  }
  .login {
    width: 31.25rem;
    height: 31.25rem;
    background-color: bisque;
    border-radius: $border-radius;
    .user {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: 6.25rem;
      width: 25rem;
      .avator {
        position: relative;
        left: 3.75rem;
        margin: 0.8125rem;
      }
    }
  }
  .icon {
    width: 31.25rem;
    height: 31.25rem;
    background-color: azure;
    border-radius: $border-radius;
    .title {
      height: 5rem;
      font-size: 3.125rem;
      text-align: center;
      line-height: 5rem;
      font-family: $font-family;
    }
    img {
      width: 31.25rem;
      height: 25rem;
    }
  }
}
</style>
