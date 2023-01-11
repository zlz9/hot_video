<template>
  <!-- 分类组件 -->
  <div class="category">
    <div
      class="item"
      v-for="(item, index) in tagList"
      :key="item.id"
      @click="ChooseTag(item.id), select(index)"
      :class="{ active: isActive === index }"
      v-show="showMoreTag(index)"
    >
      {{ item.tagName }}
      <div v-html="item.icon" style="display: flex"></div>
    </div>
    <div class="item" @click="showMore" v-show="isShow">
      <slot name="more">
        <svg
          t="1673085201201"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2721"
          width="48"
          height="48"
        >
          <path
            d="M298.666667 586.666667a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z"
            fill="#FFF"
            p-id="2722"
          ></path>
        </svg>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TagAllApi } from "../api";
import { reactive, ref } from "vue";
import { useTagStore } from "../store/tag";
const tagStore = useTagStore();
const isActive = ref<number>(0);
const index = ref<number>(4);
const showMoreTag = (i: number) => {
  if (i <= index.value) {
    return true;
  }
};
let tagList = ref<tagRes[]>([]);
const select = (i: number) => {
  isActive.value = i;
};
// 传给父组件的函数
const emit = defineEmits<{
  (e: "chooseTag", id: number): void;
}>();
const ChooseTag = (id: number) => {
  emit("chooseTag", id);
};
TagAllApi().then((res) => {
  if (res.code == 200) {
    tagList.value = res.data;
    tagStore.tag = res.data;
  }
});

const isShow = ref<boolean>(true);
const showMore = () => {
  index.value = index.value + 4;
  if (tagList.value.length <= index.value) {
    isShow.value = false;
  }
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
    display: flex;
    justify-content: center;
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
    align-items: center;
    -webkit-user-select: none; /*谷歌 /Chrome*/
    -moz-user-select: none; /*火狐/Firefox*/
    -ms-user-select: none; /*IE 10+*/
    user-select: none;
  }
  .active {
    background-color: rgb(27, 140, 101);
    width: 130px;
    height: 60px;
  }
}
</style>
