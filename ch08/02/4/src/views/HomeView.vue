<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    replaceWithAbout() {
      this.$router.replace('/about');
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    },
  },
};
</script>
<template>
  <nav>
    <a href="#" @click.prevent="$router.push('/')">.push</a>
    <a href="#" @click.prevent="$router.replace('/about')">.replace</a>
    <a href="#" @click.prevent="$router.go(-1)">.go</a>
    <a href="#" @click.prevent="$router.forward">.forward</a>
    <a href="#" @click.prevent="$router.back()">.back</a>
  </nav>
</template>
