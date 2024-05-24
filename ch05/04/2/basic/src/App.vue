<script>
import UserProfile from '@/components/UserProfile.vue';
export default {
  components: {
    UserProfile,
  },
  methods: {
    printHello() {
      alert('안녕하세요!');
    },
  },
};
</script>
<template>
  <UserProfile @print-hello="printHello" />
</template>
