<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from 'vue';
// 반응형 데이터
const message = ref('Welcome to Vue 3!');
// 컴포넌트가 업데이트되는 상황을 구현하기 위해 1초 뒤에 값을 바꿈
setTimeout(() => {
  message.value = 'Change';
}, 1000);
// 컴포넌트가 마운트되기 전
onBeforeMount(() => {
  console.log('컴포넌트가 마운트되기 전');
});
// 컴포넌트가 마운트된 후
onMounted(() => {
  console.log('컴포넌트가 마운트된 후');
});
// 컴포넌트가 업데이트되기 전
onBeforeUpdate(() => {
  console.log('컴포넌트가 업데이트되기 전');
});
// 컴포넌트가 업데이트된 후
onUpdated(() => {
  console.log('컴포넌트가 업데이트된 후');
});
// 컴포넌트가 언마운트되기 전
onBeforeUnmount(() => {
  console.log('컴포넌트가 언마운트되기 전');
});
// 컴포넌트가 언마운트된 후
onUnmounted(() => {
  console.log('컴포넌트가 언마운트된 후');
});
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
