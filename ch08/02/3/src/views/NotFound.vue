<script>
export default {
  beforeMount() {
    const pathMatch = this.$route.params.pathMatch;
    console.log(pathMatch);
  },
};
</script>
<template>
  <h1>Not Found</h1>
  <h2>pathMatch: {{ $route.params.pathMatch }}</h2>
</template>
