<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigateToHome = () => {
  router.push(6);
};
const replaceWithAbout = () => {
  router.replace('/about');
};
const go = () => {
  router.go(1);
};
const goForward = () => {
  router.forward();
};

const goBack = () => {
  router.back();
};
</script>
<template>
  <nav>
    <a href="#" @click.prevent="router.push('/')">.push</a>
    <a href="#" @click.prevent="router.replace('/about')">.replace</a>
    <a href="#" @click.prevent="router.go(-1)">.go</a>
    <a href="#" @click.prevent="router.forward">.forward</a>
    <a href="#" @click.prevent="router.back()">.back</a>
  </nav>
</template>
