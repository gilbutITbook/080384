<script>
import UserProfile from '@/components/UserProfile.vue';
export default {
  components: {
    UserProfile,
  },
  methods: {
    printHello(name, age) {
      alert(`안녕하세요! 저는 ${name}이고, 나이는 ${age}살입니다.`);
    },
  },
};
</script>
<template>
  <UserProfile @print-hello="(name, age) => printHello(name, age)" />
</template>
