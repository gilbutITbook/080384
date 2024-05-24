<script>
import Practice3Child from '@/components/Practice3Child.vue';
export default {
  components: {
    Practice3Child,
  },
  data() {
    return {
      number: 10,
    };
  },
  computed: {
    doubleNumber() {
      return this.number * 2;
    },
  },
  provide() {
    return {
      number: this.number,
      doubleNumber: this.doubleNumber,
    };
  },
};
</script>
<template>
  <Practice3Child />
</template>
