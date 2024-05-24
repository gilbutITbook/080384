<script setup>
import { ref, reactive } from 'vue';
import DefineEmits from '@/components/DefineEmits.vue';
const count = ref(0);
const state = reactive({
  count: 0,
});
const countIncrement = (num1, num2, num3) => {
  count.value = num1 + num2 + num3;
};
const stateCountInrement = (direct, arr) => {
  state.count = direct + arr[0];
};
</script>
<template>
  <h1>{{ count }}</h1>
  <h1>{{ state.count }}</h1>
  <DefineEmits
    @count-increment="countIncrement"
    @state-count-increment="(arr) => stateCountInrement(50, arr)"
  />
</template>
