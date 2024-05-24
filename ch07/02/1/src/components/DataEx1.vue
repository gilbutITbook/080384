<script setup>
import { ref } from 'vue';
const count = ref(0); // 기본 자료형 사용
const state = ref({
  // 참조 자료형 사용
  count: 0,
});
setTimeout(() => {
  count.value++; // count 값 1 증가
}, 1000);
setTimeout(() => {
  state.count++; // state 객체의 count 속성 값 1 증가
}, 1000);
</script>
<template>
  <h1>count : {{ count }}</h1>
  <h1>state : {{ state.count }}</h1>
</template>
