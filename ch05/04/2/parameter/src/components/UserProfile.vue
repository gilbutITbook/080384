<script>
export default {
  emits: ['print-hello'],
  methods: {
    parentEventCall() {
      // this.$emit('print-hello', '철수', 30);
    },
  },
};
</script>
<template>
  <!-- <button @click="parentEventCall">클릭</button> -->
  <button @click="$emit('print-hello', '철수', 30)">클릭</button>
</template>
