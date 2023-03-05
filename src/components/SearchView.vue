<template>
  <div class="search">
    <!-- <el-input
      v-model="search"
      placeholder="宁可错字,不要少字"
      :prefix-icon="Search"
      clearable
      @focus="focus"
      @blur="blur"
      @keyup.enter.native="goVideoInfo"
    >
    </el-input> -->
    <SearchComp></SearchComp>
  </div>
</template>

<script setup lang="ts">
import SearchComp from "./SearchComp.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const search = ref();
const isShow = ref<boolean>();
const focus = () => {
  isShow.value = true;
};
const blur = () => {
  setTimeout(() => {
    isShow.value = false;
  }, 200);
};
/**
 * 去搜索详情页
 */
const goVideoInfo = () => {
  router.push({ path: "/videores", query: { title: search.value } });

  search.value = "";
};
</script>

<style lang="scss">
.search {
  width: 394px;
  position: relative;
  right: 39px;
  .el-input__inner {
    height: 45px;
  }
  .recommend {
    position: relative;
    width: 600px;
    height: 400px;
    background-color: white;
    z-index: 100;
    right: 110px;
    top: 20px;
  }
}
</style>
