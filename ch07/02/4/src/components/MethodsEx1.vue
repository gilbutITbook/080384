<script setup>
import { ref, reactive, computed } from 'vue';

// 반응형 데이터 정의
const count = ref(0);
const state = reactive({
  count: 0,
  message: 'Hello',
});

// ref()로 정의된 cout는 .value 사용해서 접근
// reactive()로 정의된 state는 .value 사용하지 않고 접근
const numberSum = computed(() => count.value + state.count);

// 함수 안에서도 ref()로 정의된 데이터는 .value 사용해서 접근
const expressFunc = function () {
  count.value += 1;
};

// 함수 안에서도 reactive()로 정의된 데이터는 .value 사용하지 않고 접근
const arrowFunc = () => {
  state.count += 1;
};
</script>
<template>
  <h1>총합: {{ numberSum }}</h1>
  <h1>ref: {{ count }}</h1>
  <h1>reactive: {{ state.count }}</h1>
  <button @click="expressFunc">ref 증가</button>
  <button @click="arrowFunc">reactive 증가</button>
</template>
