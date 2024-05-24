<script>
export default {
  data() {
    return {
      selected: 'banana',
      price: 500,
    };
  },
  methods: {
    onChangeHandler($event) {
      if (this.selected === 'banana') {
        this.price = 500;
      }
      if (this.selected === 'apple') {
        this.price = 700;
      }
    },
  },
};
</script>
<template>
  <select v-model="selected" @change="onChangeHandler">
    <option value="banana">바나나</option>
    <option value="apple">사과</option>
  </select>
  가격: {{ price }}원
</template>
