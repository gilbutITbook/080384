<script setup>
import { ref } from 'vue';
const inputRef = ref(null);
setTimeout(() => {
  // 1초 뒤에 콜백 함수 실행
  console.log(inputRef.value); // h1 태그에 해당하는 DOM 객체
  console.log(inputRef.value.innerText); // DOM 객체의 속성, 메서드 모두 사용 가능
}, 1000);
</script>
<template>
  <h1 ref="inputRef">Hello, Ref!</h1>
</template>
