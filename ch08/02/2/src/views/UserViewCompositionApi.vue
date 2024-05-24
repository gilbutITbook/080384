<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id; // 한 번에 useRoute().params.id 라고 해도 됩니다.
console.log(id);
</script>
<template>
  <h1>id: {{ id }}</h1>
</template>
