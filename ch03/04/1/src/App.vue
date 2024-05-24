<script>
export default {
  methods: {
    clickHandler() {
      // ES5의 단축 메서드명(short method name)으로 표기(부록 12.2.3 참고)
      alert('click!');
    },
  },
};
</script>
<template>
  <button type="button" v-on:click="clickHandler">클릭</button>
</template>
