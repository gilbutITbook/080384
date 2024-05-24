<script>
export default {
  data() {
    return {
      fruits: ['banana', 'orange'],
    };
  },
  methods: {
    printData() {
      console.log(this.fruits); // 선택된 입력 요소의 value 속성 값 출력
    },
  },
};
</script>
<template>
  <form id="loginForm">
    <label for="banana">
      <input
        type="checkbox"
        id="banana"
        v-model="fruits"
        value="banana"
      />banana
    </label>
    <label for="orange">
      <input
        type="checkbox"
        id="orange"
        v-model="fruits"
        value="orange"
      />orange
    </label>
    <label for="apple">
      <input type="checkbox" id="apple" v-model="fruits" value="apple" />apple
    </label>
    <button type="button" @click="printData">확인</button>
  </form>
</template>
