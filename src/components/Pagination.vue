<template>
  <div class="pagination">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="props.total"
      :currentPage="pageData.page"
      :page-size="pageData.pageSize"
      @current-change="handleCurrentChange"
      hide-on-single-page
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits<{ (e: "getPage", pageParams: PageParams): void }>();
let pageParams: PageParams = {
  page: 1,
  pageSize: 12,
  tagId: 1,
};
let pageData = ref(pageParams);
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
const handleCurrentChange = (val: number) => {
  pageData.value.page = val;
  // // 提交父组件
  emit("getPage", pageParams);
};
</script>

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
