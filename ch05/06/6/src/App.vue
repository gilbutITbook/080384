<script>
import BasicScope from '@/components/BasicScope.vue';
import BasicScope2 from '@/components/BasicScope2.vue';
export default {
  components: {
    BasicScope,
    BasicScope2,
  },
  data() {
    return {
      message: 'parent',
      count: 0,
    };
  },
};
</script>
<template>
  <BasicScope2>
    <h1>범위: {{ message }} / {{ count }}</h1>
  </BasicScope2>
</template>
<style scoped>
h1 {
  color: blue;
}
</style>
