<script setup>
import { inject } from 'vue';
const number = inject('number');
const doubleNumber = inject('doubleNumber');
</script>
<template>
  <h1>number: {{ number }}</h1>
  <h1>doubleNumber: {{ doubleNumber }}</h1>
</template>
