<script setup>
import { ref, watch } from 'vue';
const state = ref({
  count: 0,
});
watch(
  state,
  (currentValue, prevValue) => {
    console.log(currentValue, prevValue);
  },
  {
    deep: true,
  }
);
</script>
<template>
  <h1>ref: {{ state.count }}</h1>
  <button @click="state.count++">ref 증가</button>
</template>
