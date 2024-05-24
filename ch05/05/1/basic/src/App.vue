<script>
import FirstChild from '@/components/FirstChild.vue';
export default {
  components: {
    FirstChild,
  },
  provide() {
    return {
      message: this.message,
      reversedMessage: this.reversedMessage,
    };
  },
  data() {
    return {
      message: 'Hello, Vue JS!',
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
};
</script>
<template>
  <FirstChild />
</template>
