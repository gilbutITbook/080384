<script setup>
import { reactive } from 'vue';
const state = reactive(0);
console.log(state.count); // 0
setTimeout(() => {
  state.count++; // 1초 뒤에 state.count 값 증가
}, 1000);
</script>
<template>
  <h1>state : {{ state.count }}</h1>
</template>
