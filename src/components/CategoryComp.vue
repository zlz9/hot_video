<template>
  <!-- 分类组件 -->
  <div class="category">
    <div class="item" v-for="(item, index) in 6">动漫</div>
    <div class="item" v-if="isShow" v-for="(item, index) in 10">美女</div>
    <div class="item" @click="showMore">更多</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isShow = ref<boolean>(false);
const showMore = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  position: relative;
  width: 1500px;
  min-height: 100px;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  .item {
    width: 120px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    margin: 5px;
    background-color: blueviolet;
    font-size: $font-title;
    color: $font-color;
    font-family: $font-family;
    border-radius: 50px;
  }
}
</style>
