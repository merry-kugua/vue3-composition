<template>
  <div>
    <el-button @click="handerClickCount">
      测试动态注册Attribute01组件 {{ count }}</el-button
    >
    <div>{{ dataProp.age }}</div>
    <div>{{ dataProp.name }}</div>
    <div>{{ dataProp.habby }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits } from "vue";
const emit = defineEmits(["handlerAttributeCount"]);
defineProps({
  dataProp: {
    type: Object,
    default: () => ({}),
  },
});
let count = ref(0);
const handerClickCount = () => {
  count.value++;
  emit("handlerAttributeCount", count.value);
};
</script>

<style scoped></style>
