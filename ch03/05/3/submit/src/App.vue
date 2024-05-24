<script>
export default {
  methods: {
    onSubmitHandler(e) {
      e.preventDefault();
      // 별도의 폼 전송 처리
      console.log('onSubmit Handler!');
    },
  },
};
</script>
<template>
  <form @submit="onSubmitHandler">
    <button type="submit">전송</button>
  </form>
</template>
