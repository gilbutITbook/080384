<script>
export default {
  inject: ['number', 'doubleNumber'],
};
</script>
<template>
  <h1>number: {{ number }}</h1>
  <h1>doubleNumber: {{ doubleNumber }}</h1>
</template>
