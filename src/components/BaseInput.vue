<template>
  <div>
    <div>name: {{ inputData.name }}</div>
    <div>age : {{ inputData.age }}</div>
    <div v-for="item in inputData.habby" :key="item">
      <div>{{ item }}</div>
    </div>
    <hr />
    <div>
      <button @click="handlerClickCount">
        点击我的方法改变数量 {{ count }}
      </button>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits, watch } from "vue";
const props = defineProps({
  inputData: {
    type: Object,
    default: () => ({
      name: "",
      age: 0,
      habby: [],
    }),
  },
});
const emit = defineEmits(["handlerClickCount"]);
let count = ref(0);
const handlerClickCount = () => {
  count.value++;
  emit("handlerClickCount", count.value);
};
watch(props.inputData, (val) => {
  console.log(val, "2222");
});
</script>

<style scoped lang="scss"></style>
