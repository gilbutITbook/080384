<script setup>
import { reactive, ref, watch } from 'vue';
const state = reactive({
  count: 0,
});
// 반응형 데이터를 콜백 함수 형태로 사용하면 이전 값을 알 수 있음
watch(
  () => state.count,
  (currentValue, prevValue) => {
    console.log(currentValue, prevValue);
  }
);
</script>
<template>
  <h1>ref: {{ state.count }}</h1>
  <button @click="state.count++">ref 증가</button>
</template>
