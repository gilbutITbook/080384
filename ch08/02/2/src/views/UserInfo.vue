<script>
export default {
  beforeMount() {
    const name = this.$route.query.name;
    const age = this.$route.query.age;
    console.log(name); // mike
    console.log(age); // 30
  },
};
</script>
<template>
  <h1>User Info</h1>
</template>
