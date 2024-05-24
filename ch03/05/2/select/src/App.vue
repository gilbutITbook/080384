<script>
export default {
  data() {
    return {
      selectItem: 'cafeLatte', // value 속성의 값이 cafe latte인 option 태그 선택
    };
  },
  methods: {
    printData() {
      console.log(this.selectItem);
    },
  },
};
</script>
<template>
  <form id="loginForm">
    <select v-model="selectItem">
      <option value="americano">아메리카노</option>
      <option value="espresso">에스프레소</option>
      <option value="cafeLatte">카페라떼</option>
    </select>
    <button type="button" @click="printData">확인</button>
  </form>
</template>
