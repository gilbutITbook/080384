import { defineStore } from 'pinia';
export const useCountOptionStore = defineStore('countOption', {
  state() {
    return {
      num: 10,
      json: null,
    };
  },
  getters: {
    doubleNum(state) {
      return state.num * 2;
    },
    doubleNumPlusOne() {
      return this.doubleNum + 1;
    },
  },
  actions: {
    increment() {
      this.num++; // this 키워드로 스테이트에 저장된 상태에 접근
    },
    getJSON(url) {
      this.increment(); // 다른 액션을 호출하고 싶을 때 this 사용
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          this.json = json; // 요청에 대한 응답 결과를 스테이트에 저장
        });
    },
  },
});
