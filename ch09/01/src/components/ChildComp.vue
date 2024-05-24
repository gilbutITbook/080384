<script setup>
const emits = defineEmits(["update"]);
const props = defineProps({
  num: Number,
});
</script>
<template>
  <h1>상태: {{ props.num }}</h1>
  <button @click="emits('update')">상태 업데이트</button>
</template>
