<script setup>
import LifeCycleHooks from '@/components/LifeCycleHooks.vue';
import { ref } from 'vue';
const showComponent = ref(true);
const toggleComponent = () => {
  showComponent.value = !showComponent.value;
};
</script>
<template>
  <LifeCycleHooks v-if="showComponent" />
  <button @click="toggleComponent">Unmount Component</button>
</template>
