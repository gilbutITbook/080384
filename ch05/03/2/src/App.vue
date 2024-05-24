<script>
import FirstChild from "@/components/FirstChild.vue";
export default {
  components: {
    FirstChild,
  },
  mounted() {
    const childNum = this.$refs.child.num;
    const childDoubleNum = this.$refs.child.doubleNum;
    console.log(`메서드 호출 전: ${childNum}`); // 5 출력
    console.log(`메서드 호출 전: ${childDoubleNum}`); // 10 출력
    // DOM이 마운트되고 1초 뒤에 TheChild 컴포넌트의 increment() 메서드 호출
    setTimeout(function () {
      this.$refs.child.increment();
      console.log(`메서드 호출 전: ${childNum}`); // 6 출력
      console.log(`메서드 호출 전: ${childDoubleNum}`); // 12 출력
    }, 1000);
  },
};
</script>
<template>
  <FirstChild ref="child" />
</template>
