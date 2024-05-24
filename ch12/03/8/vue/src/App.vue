<script setup>
import { reactive, ref } from "vue";
const num1 = ref({ num: 0 });
const num2 = reactive({ num: 0 });
const increment = () => {
  console.log(num1);
  console.log(num2);
  num1.value.num++;
  num2.num++;
};
</script>
<template>
  <h1>{{ num1.num }}</h1>
  <h2>{{ num2.num }}</h2>
  <button @click="increment">증가</button>
</template>
