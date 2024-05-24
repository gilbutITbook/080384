<script>
export default {
  data() {
    return {
      condition: 'A',
    };
  },
};
</script>
<template>
  <p v-if="condition === 'A'">condition 데이터의 값은 A입니다.</p>
  <p v-else-if="condition === 'B'">condition 데이터의 값은 B입니다.</p>
  <p v-else-if="condition === 'C'">condition 데이터의 값은 C입니다.</p>
  <p v-else-if="condition === 'D'">condition 데이터의 값은 D입니다.</p>
  <p v-else>어떤 조건에도 해당하지 않습니다.</p>
</template>
