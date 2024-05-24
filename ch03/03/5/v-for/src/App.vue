<script>
export default {
  data() {
    return {
      fruits: ['apple', 'banana', 'orange'],
    };
  },
};
</script>
<template>
  <h1>fruits 데이터의 반복 결과</h1>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
      인덱스: {{ index }}, 값: {{ fruit }}
    </li>
  </ul>
</template>
