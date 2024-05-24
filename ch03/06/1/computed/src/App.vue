<script>
export default {
  data() {
    return {
      firstName: 'Gildong',
      lastName: 'Hong',
    };
  },
  computed: {
    fullName() {
      console.log('computed fullname');
      return `${this.lastName} ${this.firstName}`;
    },
  },
};
</script>
<template>
  <h1>{{ fullName }}</h1>
  <h1>{{ fullName }}</h1>
</template>
