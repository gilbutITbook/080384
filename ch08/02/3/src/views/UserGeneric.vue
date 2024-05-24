<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const afterUser = route.params.afterUser; // 한 번에 useRoute().params.id 라고 해도 됩니다.
console.log(afterUser);
</script>
<template>
  <h1>UserGeneric</h1>
  <h2>afterUser: {{ afterUser }}</h2>
</template>
