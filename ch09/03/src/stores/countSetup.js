import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
export const useCountSetupStore = defineStore('countSetup', () => {
  // 스테이트
  const num = ref(10); // reactive()로 배열이나 객체 값을 생성해도 됨
  const json = ref(null);
  // 게터
  const doubleNum = computed(() => num.value * 2);
  const doubleNumPlusOne = computed(() => doubleNum.value + 1);
  // 액션
  const increment = () => {
    num.value++;
  };
  const getJSON = (url) => {
    increment(); // 다른 액션(함수) 호출
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        json.value = json;
      });
  };

  return {
    num,
    doubleNum,
    doubleNumPlusOne,
    json,
    increment,
    getJSON,
  };
});
