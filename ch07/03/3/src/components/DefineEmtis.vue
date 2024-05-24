<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['count-increment', 'state-count-increment']);
const increment = () => {
  // emit('count-increment');
  emit('count-increment', 10, 20, 30);
};
</script>
<template>
  <button @click="increment">count 증가</button>
  <!-- <button @click="emit('state-count-increment')">state.count 증가</button> -->
  <button @click="emit('state-count-increment', [50])">state.count 증가</button>
</template>
