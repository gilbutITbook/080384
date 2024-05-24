<script>
export default {
  methods: {
    onKeyupHandler() {
      console.log(`keyup event!`);
    },
  },
};
</script>
<template>
  <input type="text" @keyup="onKeyupHandler" />
</template>
