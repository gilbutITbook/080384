<script setup>
import { onBeforeMount, onBeforeUnmount } from 'vue';
import { RouterView } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
const init = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
onBeforeMount(() => {
  init();
  window.addEventListener('resize', init);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', init);
});
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>
