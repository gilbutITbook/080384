<script setup>
import { computed, ref } from 'vue';
const number = ref(5);
const doubleNumber = computed(() => number.value * 2);
// defineExpose() 함수로 지정한 값만 부모 컴포넌트에서 접근 가능
defineExpose({
  number,
  doubleNumber,
});
</script>
<template>
  <h1>{{ number }}</h1>
  <h1>{{ doubleNumber }}</h1>
</template>
