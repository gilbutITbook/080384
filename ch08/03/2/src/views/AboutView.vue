<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
onBeforeRouteUpdate((to, from) => {
  // 동적 세그먼트 값이 변경되면 호출
});
onBeforeRouteLeave((to, from) => {
  // 라우트를 떠나기 전 호출
  return true; // return false 시 전환 불허
});
</script>

<template>
  <h1>About View</h1>
</template>
