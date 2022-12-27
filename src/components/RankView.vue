<template>
  <!-- 排行组件 -->
  <div class="title">
    <slot name="title">默认标题 </slot>
  </div>
  <div class="item" v-for="(item, index) in 15" :key="index">
    <div class="index">{{ index + 1 }}</div>
    <div class="cover">
      <img src="../assets/img/hot_logo.png" alt="" />
    </div>
    <div class="name">海贼王</div>
    <div class="tag">动漫</div>
    <div class="icon">
      <svg
        t="1672125589302"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2706"
        width="16"
        height="16"
      >
        <path
          d="M423.477333 938.666667S45.045333 855.424 214.186667 442.282667c0 0 38.4 45.909333 33.12 68 0 0 30.101333-104.277333 95.072-166.570667C398.165333 290.186667 454.848 139.712 402.570667 85.333333c0 0 258.933333 54.378667 287.754666 326.378667 0 0 33.12-86.666667 101.12-95.232 0 0-20.906667 47.616 0 119.04 0 0 214.485333 367.146667-155.157333 491.242667 0 0 110.805333-125.813333-124.181333-341.717334 0 0-55.402667 115.626667-88.533334 156.373334-0.096 0.106667-92.522667 103.722667-0.096 197.248z"
          fill="#d81e06"
          p-id="2707"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.item {
  background-color: aqua;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: $font-family;
  margin: 5px;
  .index {
  }
  .cover {
    img {
      width: 30px;
      height: 30px;
    }
  }
  .name {
  }
  .tag {
  }
  .icon {
  }
}
</style>
