<template>
  <div>
    <base-inject />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, readonly } from "vue";
import BaseInject from "./BaseInject.vue";
const baseProvode = ref<string>("我是父组件传递的Provide");
// 当我们需要在injector中修改数据时
// 我们可以使用provide方法
function updateProvide() {
  baseProvode.value = "我是使用injector修改的Provide";
}
provide("baseProvice", { baseProvode, updateProvide });

// 当我们不需要进行修改时只需要包裹提供的值即可,此时数据将变为只读属性
provide("baseProvice", readonly({ baseProvode }));
</script>

<style scoped></style>
