<template>
  <div>
    <Transition>
      <div class="user_info" v-if="isShow">
        <div
          class="cancel_icon"
          style="display: flex; flex-direction: row-reverse; padding: 5px"
        >
          <el-icon @click="cancel"><Close /></el-icon>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isShow = ref<boolean>(false);
const traggle = () => {
  isShow.value = !isShow.value;
};
const cancel = () => {
  isShow.value = false;
};

defineExpose({
  traggle,
});
</script>

<style lang="scss" scoped>
.user_info {
  position: fixed;
  top: 75px;
  right: 80px;
  width: 300px;
  height: 600px;
  background-color: rgb(138, 228, 133);
  z-index: 100;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
