<script>
export default {
  data() {
    return {
      name: '철수',
      age: 19,
    };
  },
};
</script>
<template>
  {{ name }}
  {{ age }}
  <p>내 이름은 {{ name }}입니다.</p>
  <p>나이는{{ age }}살 입니다.</p>
  {{ 10 * 20 * 30 }}
  {{ name.toUpperCase() }}
</template>
