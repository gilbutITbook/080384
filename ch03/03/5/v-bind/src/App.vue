<script>
export default {
  data() {
    return {
      className: 'red-color',
    };
  },
};
</script>
<template>
  <h1 v-bind:class="className">Hello, Vue JS</h1>
</template>
<style>
.red-color {
  color: red;
}
</style>
