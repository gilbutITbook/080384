<script>
import FirstChild from '@/components/FirstChild.vue';
import { message, reversedMessage } from '@/keys.js';
export default {
  components: {
    FirstChild,
  },
  provide() {
    return {
      [message]: this.message,
      [reversedMessage]: this.reversedMessage,
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
