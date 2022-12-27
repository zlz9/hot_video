<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <div class="title">
        <slot name="title">默认标题 </slot>
      </div>
      <div class="more">
        <slot name="more"
          >more<svg
            t="1672054486752"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7478"
            width="20"
            height="20"
          >
            <path
              d="M492.675886 904.817574L885.696074 511.797385 492.675886 118.777197c-12.258185-12.258185-12.432147-32.892131 0.187265-45.51052 12.707416-12.707416 32.995485-12.703323 45.511543-0.187265l411.660734 411.660734c7.120165 7.120165 10.163477 17.065677 8.990768 26.624381 1.500167 9.755178-1.5104 20.010753-8.990768 27.491121L538.374694 950.515359c-12.258185 12.258185-32.892131 12.432147-45.511543-0.187265-12.707416-12.707416-12.703323-32.995485-0.187265-45.51052z"
              p-id="7479"
              fill="#e6e6e6"
            ></path>
          </svg>
        </slot>
      </div>
    </div>
    <div style="display: flex; flex-direction: row; justify-content: center">
      <el-row :gutter="30">
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
        <el-col :span="6"><div class="content" /></el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.more {
  font-size: $font-title;
  font-family: $font-family;
  color: $font-color;
  width: 200px;
}
.title {
  font-size: $font-title;
  font-family: $font-family;
  color: $font-color;
  width: 200px;
  position: relative;
  left: 114px;
  margin: 5px;
}
.content {
  width: 400px;
  background-color: rgb(12, 55, 92);
  height: 300px;
}
</style>
