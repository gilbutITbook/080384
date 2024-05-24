<script setup>
import { reactive, ref } from 'vue';
import DefineProps from '@/components/DefineProps.vue';
const count = ref(0);
const state = reactive({
  count: 0,
});
</script>
<template>
  <DefineProps :count="count" :state="state" />
</template>
