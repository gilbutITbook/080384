<script>
export default {
  data() {
    return {
      message: '',
    };
  },
};
</script>
<template>
  <input type="text" v-model="message" />
  {{ message }}
</template>
