<script setup>
import { reactive, ref, watchEffect } from 'vue';
const count = ref(0);
const state = reactive({ count: 0 });
// 아무 의미도 없이 console.log()로 출력해도
// 콜백 함수 내부에서 반응형 데이터를 사용한 것이 되어 감시 대상이 됨
watchEffect(() => {
  console.log(count.value); // count 변수의 값이 변경되면 호출
  console.log(state.count); // state 객체의 count 속성 값이 변경되면 호출
});
</script>
<template>
  <h1>ref: {{ count }}</h1>
  <button @click="count++">ref 증가</button>
  <h1>reactive: {{ state.count }}</h1>
  <button @click="state.count++">ref 증가</button>
</template>
