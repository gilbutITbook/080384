<script>
import FirstChild from '@/components/FirstChild.vue';
export default {
  components: {
    FirstChild,
  },
  data() {
    return {
      parentNum: 5,
    };
  },
  computed: {
    numOddEven() {
      return this.parentNum % 2 === 0 ? '짝수' : '홀수';
    },
  },
  methods: {
    getParentNum() {
      return this.parentNum;
    },
  },
};
</script>
<template>
  <FirstChild />
</template>
