<script>
export default {
  beforeMount() {
    document.title = this.$route.meta.title;
  },
};
</script>
<template>
  <h1>Home View</h1>
</template>
