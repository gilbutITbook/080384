<script setup>
import { computed, reactive, ref } from 'vue';
const refCount = ref(0);
const reactiveCount = reactive({ count: 0 });
const refDoubleCount = computed(() => refCount.value * 2);
const reactiveDoubleCount = computed(() => reactiveCount.count * 2);
//1초 뒤에 refCount와 reactiveCount의 count 속성의 값을 변경함
//그러면 이를 참조해서 계산하는 computed() 함수의 데이터도 함께 자동 변경됨
setTimeout(() => {
  refCount.value = 10;
  reactiveCount.count = 20;
}, 1000);
</script>
<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
