<script>
export default {
  methods: {
    clickHandler(event) {
      console.log(event);
    },
  },
};
</script>
<template>
  <button type="button" @click="clickHandler($event)">클릭</button>
</template>
