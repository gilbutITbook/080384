<script>
export default {};
</script>
<template>
  <!-- /about -->
  <RouterLink :to="{ name: 'about' }">About</RouterLink>
  <!-- /user/mike  -->
  <RouterLink :to="{ name: 'user', params: { id: 'mike' } }">user</RouterLink>
  <!-- /about?id=sucoding  -->
  <RouterLink :to="{ name: 'about', query: { id: 'sucoding' } }"
    >about</RouterLink
  >
  <!-- /user/mike?id=sucoding  -->
  <RouterLink
    :to="{ name: 'user', params: { id: 'mike' }, query: { lang: 'ko' } }"
    >user</RouterLink
  >
</template>
