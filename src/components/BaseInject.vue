<template>
  <div>
    <button @click="baseProvide.updateProvide">
      {{ baseProvide.baseProvode }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
interface BaseProvide {
  baseProvode: string;
  updateProvide: () => void;
}
const baseProvide: BaseProvide = inject("baseProvice");
</script>

<style scoped></style>
