<script>
export default {
  mounted() {
    console.log(this.$parent.parentNum); // 0 출력
    console.log(this.$parent.numOddEven); // 짝수 출력
    console.log(this.$parent.getParentNum()); // 0 출력
  },
};
</script>
<template>
  <h1>ParentChild</h1>
</template>
