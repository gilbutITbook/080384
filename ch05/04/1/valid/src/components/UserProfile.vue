<script>
export default {
  methods: {
    parentEventCall() {
      this.$emit('print-hello');
    },
  },
};
</script>
<template>
  <button @click="parentEventCall">클릭</button>
</template>
