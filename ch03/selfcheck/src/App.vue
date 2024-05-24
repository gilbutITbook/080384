<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    decreasement() {
      if (this.num > 0) this.num--;
    },
    increasement() {
      if (this.num < 10) this.num++;
    },
  },
};
</script>
<template>
  <h1>{{ num }}</h1>
  <button @click="decreasement">감소</button>
  <button @click="increasement">증가</button>
</template>
