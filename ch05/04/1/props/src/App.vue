<script>
import UserProfile from '@/components/UserProfile.vue';
export default {
  components: {
    UserProfile,
  },
  data() {
    return {
      name: '김철수',
      age: 30,
    };
  },
};
</script>
<template>
  <UserProfile :name="name" :age="age" />
</template>
