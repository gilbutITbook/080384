<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <nav>
    <RouterLink to="/user/info?name=mike&age=30">UserInfo</RouterLink>
    <RouterLink to="/user/mike">UserView</RouterLink>
  </nav>
  <RouterView />
</template>
