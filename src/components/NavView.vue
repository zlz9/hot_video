<template>
  <!-- 导航 -->
  <div class="header">
    <div class="Logo">
      <img src="../assets/img/hot_logo.png" alt="" srcset="" /><span
        >xiaoz</span
      >
    </div>
    <div class="search">
      <SearchView></SearchView>
    </div>
    <div class="user">
      <UserView></UserView>
    </div>
  </div>
  <div class="nav">
    <router-link to="/index"><div class="nav_item">首页</div></router-link>
    <router-link to="/hot"> <div class="nav_item">热门</div></router-link>
    <router-link to="/category"> <div class="nav_item">分类</div></router-link>
  </div>
</template>

<script setup lang="ts">
import SearchView from "./SearchView.vue";
import UserView from "./UserView.vue";
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
.header {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  margin: $margin-size;
  padding: $padding-size;
  font-size: $font-title;
  font-family: $font-family;
  color: $font-color;
  font-weight: bolder;
  .Logo {
    width: 180px;
    height: 40px;
    display: flex;
    justify-content: center;
    img {
      width: 35%;
      height: 100%;
    }
  }
}
.nav {
  height: 30px;
  display: flex;
  justify-content: center;
  .nav_item {
    width: 160px;
    text-align: center;
    font-family: $font-family;
    line-height: 30px;
    border-radius: 10px;
    font-size: 25px;
    color: $font-color;
    &:hover {
      font-size: 30px;
      background-color: #5e555b;
      color: rgb(163, 172, 189);
      width: 171px;
      line-height: 40px;
      height: 40px;
      font-weight: 600;
    }
  }
}
</style>
