<script>
export default {
  emits: ['print-hello'],
  methods: {
    parentEventCall() {
      //emits 옵션 속성으로 print-hello 이벤트만 명시했는데
      //아래처럼 명시되지 않은 onPrint-hello 이벤트 호출시 경고 발생
      this.$emit('onPrint-hello');
    },
  },
};
</script>
<template>
  <button @click="parentEventCall">클릭</button>
</template>
