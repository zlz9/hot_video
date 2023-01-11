<template>
  <!-- 上传组件 -->
  <div style="display: flex; margin: 5px; padding: 5px">
    <div>
      <div class="upload-box">
        <!-- 上传视频 -->
        <div class="title"><slot name="title">视频上传</slot></div>
        <div style="display: flex; justify-content: center">
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <el-icon><Plus /></el-icon>
            <template #file="{ file }">
              <div>
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <el-icon><zoom-in /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <el-icon><Download /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <el-icon><Delete /></el-icon>
                  </span>
                </span>
              </div>
            </template>
          </el-upload>

          <el-dialog v-model="dialogVisible">
            <img w-full :src="dialogImageUrl" alt="Preview Image" />
          </el-dialog>
        </div>
        <!-- 视频上传 -->
        <div>
          <el-upload
            class="upload-demo"
            style="width: 1000px; height: 600px"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">拖拽视频或者 <em>点击上传</em></div>
          </el-upload>
        </div>
      </div>
    </div>

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
        <el-form-item label="视频名称" prop="pass">
          <el-input
            v-model="ruleForm.pass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="视频介绍" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="视频分类" prop="age">
          <el-checkbox-group v-model="checkedTags" :min="1" :max="4">
            <el-checkbox v-for="tag in tags" :key="tag.id" :label="tag.id">{{
              tag.tagName
            }}</el-checkbox>
          </el-checkbox-group></el-form-item
        >
        <el-form-item label="是否顶置" prop="age">
          <el-switch
            v-model="isTop"
            inline-prompt
            active-text="是"
            inactive-text="否"
        /></el-form-item>
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
import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
import { UploadFilled } from "@element-plus/icons-vue";
import type { UploadFile } from "element-plus";
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { TagAllApi } from "../api";
const ruleFormRef = ref<FormInstance>();
const isTop = ref(false);
const tags = ref<tagRes[]>();
const checkedTags = ref();
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);
const handleRemove = (file: UploadFile) => {
  console.log(file);
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};
TagAllApi().then((res) => {
  if (res.code == 200) {
    tags.value = res.data;
  }
});
const handleDownload = (file: UploadFile) => {
  console.log(file);
};

/**
 * 表单部分
 */
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
.video-info-upload {
  .el-input__wrapper {
    height: 40px;
  }
}
.title {
  font-size: 30px;
  font-family: $font-family;
}
.upload-box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-upload.is-drag {
    height: 600px;
    .el-upload-dragger {
      height: 84%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .el-upload-list--picture-card {
    width: 1000px;
    height: 400px;

    .el-upload--picture-card {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
