<script>
export default {
  data() {
    return {
      condition: true,
    };
  },
};
</script>
<template>
  <p v-show="condition">v-show 디렉티브는 조건이 참입니다.</p>
  <p v-show="!condition">v-show 디렉티브는 조건이 거짓입니다.</p>
</template>
