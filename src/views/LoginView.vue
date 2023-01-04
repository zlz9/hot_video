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
            <el-avatar :size="60"> user </el-avatar>
          </div>
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item prop="pass">
              <el-input
                v-model="ruleForm.pass"
                type="password"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input
                v-model="ruleForm.checkPass"
                type="password"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item prop="age">
              <el-input v-model.number="ruleForm.age" />
            </el-form-item>
            <el-form-item
              ><el-link type="warning">没有账号？点击注册</el-link>
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
const router = useRouter();
const ruleFormRef = ref<FormInstance>();

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("Please input the age"));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("Please input digits"));
    } else {
      if (value < 18) {
        callback(new Error("Age must be greater than 18"));
      } else {
        callback();
      }
    }
  }, 1000);
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass", () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  age: "",
});

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
  age: [{ validator: checkAge, trigger: "blur" }],
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

<style lang="scss" scoped>
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
