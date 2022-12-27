<template>
  <div class="pagination">
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.el-pagination.is-background .el-pager li.is-active {
  background-color: rgb(16, 65, 102);
}
.pagination {
  width: 400px;
  margin: 20px auto;
  position: relative;

  .btn-prev,
  .btn-next {
    border-radius: 50%;
  }
  .el-pager {
    .number,
    .more {
      border-radius: 50%;
    }
  }
}
</style>
