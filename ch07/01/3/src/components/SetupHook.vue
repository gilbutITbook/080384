<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const state = reactive({
      count: 0,
      message: 'Hello',
    });
    return {
      count,
      state,
    };
  },
};
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <h2>Double Count: {{ doubleCount }}</h2>
  <button @click="increment">증가</button>
</template>
