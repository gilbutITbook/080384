<script setup>
import { ref } from 'vue';
const arr1 = ref([10]); // 배열로 반응형 데이터 생성
const arr2 = ref([10]); // 배열로 반응형 데이터 생성
setTimeout(() => {
  arr.value = [10, 20]; // 배열의 값 자체를 변경
});
setTimeout(() => {
  arr2.push(20); // 배열의 요소를 변경
});
</script>
<template>
  <h1>arr1: {{ arr1 }}</h1>
  <h1>arr2 : {{ arr2 }}</h1>
</template>
