<script>
import { mapState, mapActions } from 'pinia';
import { useCountOptionStore } from '@/stores/countOption';
import { useCountSetupStore } from '@/stores/countSetup';
export default {
  computed: {
    ...mapState(useCountOptionStore, ['num', 'doubleNum']), // this.num, this.doubleNum에 등록됨
    ...mapState(useCountSetupStore, {
      myNum: 'num', // 위와 같지만 this.myNum에 등록됨
      myDouble: 'doubleNum', // 위와 같지만 this.myDouble에 등록됨
    }),
  },
  methods: {
    // this.increment(), this.getJson()에 등록됨
    ...mapActions(useCountOptionStore, ['increment', 'getJSON']),
    ...mapActions(useCountSetupStore, {
      myIncre: 'increment', // 위와 같지만 this.myIncre()에 등록됨
      myJSON: 'getJSON', //위와 같지만 this.myJSON()에 등록됨
    }),
  },
};
</script>
<template>
  <h2>num: {{ num }}</h2>
  <h2>doubleNum: {{ doubleNum }}</h2>
  <button @click="increment">increment</button>
  <button @click="getJSON('https://jsonplaceholder.typicode.com/posts')">
    getJSON
  </button>
</template>
