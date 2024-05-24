<script setup>
import { ref } from 'vue';
import RefEx2Child from '@/components/RefEx2Child.vue';
const componentRef = ref(null);
setTimeout(() => {
  console.log(componentRef.value.number); // RefEx2Child 컴포넌트 인스턴스에 접근
  console.log(componentRef.value.doubleNumber); // RefEx2Child 컴포넌트 인스턴스에 접근
}, 1000);
</script>
<template>
  <RefEx2Child ref="componentRef" />
</template>
