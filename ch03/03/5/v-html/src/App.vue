<script>
export default {
  data() {
    return {
      message: '<h1>Hello, Vue JS!</h1>',
    };
  },
};
</script>
<template>
  <div v-html="message"></div>
</template>
