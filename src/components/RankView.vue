<template>
  <!-- 排行组件 -->
  <div class="title">
    <slot name="title">默认标题 </slot>
  </div>
  <div
    class="item"
    v-for="(item, index) in props.videoData"
    :key="item.id"
    @click="goPlayer(item.id)"
  >
    <div class="index">{{ index + 1 }}</div>
    <div class="cover">
      <img v-lazy="item.cover" alt="" />
    </div>
    <div class="name">{{ item.name }}</div>

    <div class="icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goPlayer = (id: number) => {
  router.push({ path: "/player", query: { id: id } });
};
const props = defineProps({
  videoData: {
    type: Array<VideoRes>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-family: $font-family;
  font-size: $font-title;
}
.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: $font-family;
  margin: 5px;
  &:hover {
    border-radius: 5px;
    border: 1px solid black;
  }
  .index {
  }
  .cover {
    width: 30px;
    height: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    width: 80px;
  }
  .tag {
  }
  .icon {
  }
}
</style>
