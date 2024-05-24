<script setup>
import { ref, computed, provide } from 'vue';
import Practice3Child from '@/components/Practice3Child.vue';
const number = ref(10);
const doubleNumber = computed(() => number.value * 2);
provide('number', number.value);
provide('doubleNumber', doubleNumber.value);
</script>
<template>
  <Practice3Child />
</template>
