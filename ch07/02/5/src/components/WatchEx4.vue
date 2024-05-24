<script setup>
import { reactive, watch } from 'vue';
const state = reactive({
  count: 0,
});
// 내부 값이 변경되는지 감시할 수 있하지만, currentValue와 prevValue 값이 같음
watch(state, (currentValue, prevValue) => {
  console.log(currentValue, prevValue);
});
</script>
<template>
  <h1>reactive: {{ state.count }}</h1>
  <button @click="state.count++">ref 증가</button>
</template>
