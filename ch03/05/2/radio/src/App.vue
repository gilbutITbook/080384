<script>
export default {
  data() {
    return {
      gender: 'male',
    };
  },
  methods: {
    printData() {
      console.log(this.gender); // 선택된 입력 요소의 value 속성 값 출력
    },
  },
};
</script>
<template>
  <form id="loginForm">
    <label for="male">
      <input
        type="radio"
        id="male"
        name="gender"
        v-model="gender"
        value="male"
      />male
    </label>
    <label for="female">
      <input
        type="radio"
        id="female"
        name="gender"
        v-model="gender"
        value="female"
      />female
    </label>
    <button type="button" @click="printData">확인</button>
  </form>
</template>
