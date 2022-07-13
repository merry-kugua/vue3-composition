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
// const emit = defineEmits(["handlerAttributeCount"]);
// 对emit 数据进行校验,如果当前的数据为空的时候,就不让父组件调用这个方法
const emit = defineEmits({
  handlerAttributeCount: null,
  submitForm: ({ username, age }) => {
    if (username && age) {
      console.log(username, age);
      return true;
    } else {
      return false;
    }
  },
});
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
setTimeout(() => {
  let username = "yu";
  let age = 18;
  submitForm(username, age);
});
setTimeout(() => {
  let username = "";
  let age = "";
  submitForm(username, age);
}, 10000);
const submitForm = (username: string, password: number | string) => {
  console.log(username, password, "11222");
  emit("submitForm", { username, password });
};
</script>

<style scoped></style>
