<script>
export default {
  data() {
    return {
      arr: [0, 1, 2],
      obj: { name: 'chulsu' },
    };
  },
  watch: {
    arr(newValue, oldValue) {
      console.log(`old value : ${oldValue}`);
      console.log(`new value : ${newValue}`);
    },
    obj(newValue, oldValue) {
      console.log(`old value : ${JSON.stringify(oldValue)}`);
      console.log(`new value : ${JSON.stringify(newValue)}`);
    },
  },
};
</script>
<template>
  <h1>{{ arr }}</h1>
  <h1>{{ obj }}</h1>
  <button @click="arr.push(3)">배열 변경</button>
  <button @click="obj.age = 20">객체 변경</button>
</template>
