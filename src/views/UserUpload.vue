<template>
  <div>
    <UploadVideo class="upload">
      <template #tip>头像上传大小不超过5M </template></UploadVideo
    >
    <!-- 表单 -->
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="ruleForm"
    >
      <!-- 用户名称 -->
      <el-form-item label="用户昵称" prop="nickName">
        <el-input v-model="ruleForm.nickName" type="text" autocomplete="off" />
      </el-form-item>
      <!-- 用户介绍 -->
      <el-form-item label="用户介绍" prop="selfIntroduction">
        <el-input
          v-model="ruleForm.selfIntroduction"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <!-- 用户旧密码 -->
      <el-form-item label="旧密码" prop="oldPwd">
        <el-input v-model="ruleForm.oldPwd" type="text" autocomplete="off" />
      </el-form-item>
      <!-- 用户新密码 -->
      <el-form-item label="新密码" prop="newPwd">
        <el-input v-model="ruleForm.newPwd" type="text" autocomplete="off" />
      </el-form-item>
      <!-- 上传 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >上传</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import UploadVideo from "../components/UploadVideo.vue";
import { reactive, ref } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import { uploadUserApi } from "../api";
import { useVideoStore } from "../store/video";
import { useRouter } from "vue-router";
const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const videoStore = useVideoStore();
const ruleForm = reactive<userUpload>({
  nickName: "",
  selfIntroduction: "",
  oldPwd: "",
  newPwd: "",
  avatar: "",
});
const rules = reactive({
  nickName: [
    {
      trigger: "blur",
      required: true,
      min: 2,
      max: 8,
      message: "长度在2-8个字符",
    },
  ],
  selfIntroduction: [
    {
      trigger: "blur",
      required: true,
      min: 4,
      max: 25,
      message: "长度在4-25个字符",
    },
  ],
  newPwd: [
    {
      trigger: "blur",
      required: true,
      min: 4,
      max: 11,
      message: "长度在4-11个字符",
    },
  ],
  oldPwd: [
    {
      trigger: "blur",
      required: true,
      min: 4,
      max: 11,
      message: "长度在4-11个字符",
    },
  ],
});
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      /**
       * 发起请求
       */
      ruleForm.avatar = videoStore.url;
      uploadUserApi(ruleForm).then((res) => {
        ElMessage({
          message: `${res.msg}`,
        });
        if (res.code == 200) {
          router.push("/");
          videoStore.url = "";
        }
      });
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
.upload {
  margin: 0 auto;
}
.ruleForm {
  width: 600px;
  position: relative;
  margin: auto;
}
</style>
