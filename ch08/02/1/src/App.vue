<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <nav>
    <RouterLink to="/user/mike/profile">UserInfo</RouterLink>
    <RouterLink to="/user/mike">UserView</RouterLink>
  </nav>
  <RouterView />
</template>
