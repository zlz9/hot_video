<template>
  <!-- 上传组件 -->
  <div
    style="
      display: flex;
      margin: 5px;
      padding: 5px;
      align-items: center;
      height: 400px;
    "
  >
    <!-- 视频上传 -->

    <!-- 表单 -->
    <div
      style="width: 600px; position: relative; margin: auto"
      class="video-info-upload"
    >
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <!-- 视频名称 -->
        <el-form-item label="视频名称" prop="name">
          <el-input v-model="ruleForm.name" type="text" autocomplete="off" />
        </el-form-item>
        <!-- 视频介绍 -->
        <el-form-item label="视频介绍" prop="selfIntroduction">
          <el-input
            v-model="ruleForm.selfIntroduction"
            type="text"
            autocomplete="off"
          />
        </el-form-item>
        <!-- 视频分类 -->
        <el-form-item label="视频分类" prop="tagIds">
          <el-checkbox-group v-model="ruleForm.tagIds" :min="1" :max="4">
            <el-checkbox v-for="tag in tags" :key="tag.id" :label="tag.id">{{
              tag.tagName
            }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 是否顶置 -->
        <el-form-item label="是否顶置">
          <el-switch
            v-model="isTop"
            inline-prompt
            active-text="是"
            inactive-text="否"
        /></el-form-item>
        <!-- 上传 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >上传</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import { TagAllApi, PublishVideoApi } from "../api";
import { useVideoStore } from "../store/video";
import { useRouter } from "vue-router";
const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const isTop = ref(false);
const tags = ref<tagRes[]>();
const videoStore = useVideoStore();
TagAllApi().then((res) => {
  if (res.code == 200) {
    tags.value = res.data;
  }
});

/**
 * 表单部分
 */

const ruleForm = reactive<PublishApi>({
  name: "",
  selfIntroduction: "",
  isTop: false,
  tagIds: [],
  url: "",
});

const rules = reactive({
  name: [
    {
      trigger: "blur",
      required: true,
      min: 4,
      max: 8,
      message: "长度在4-8个字符",
    },
  ],
  selfIntroduction: [
    {
      trigger: "blur",
      required: true,
      min: 4,
      max: 15,
      message: "长度在4-15个字符",
    },
  ],
  tagIds: [
    {
      trigger: "blur",
      required: true,
      message: "请至少选中一个标签",
    },
  ],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      /**
       * 发送请求
       */
      ruleForm.url = videoStore.url;
      PublishVideoApi(ruleForm).then((res) => {
        if (res.code == 200) {
          ElMessage({
            type: "success",
            message: `${res.msg}`,
          });
          // videoStore.url = "";
          // 发布成功跳转到管理页面
          router.push("/admin");
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

<style lang="scss"></style>
