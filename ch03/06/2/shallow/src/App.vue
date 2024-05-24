<script>
export default {
  data() {
    return {
      inputStr: '',
    };
  },
  watch: {
    inputStr(newValue, oldValue) {
      console.log(`old value : ${oldValue}`);
      console.log(`new value : ${newValue}`);
    },
  },
};
</script>
<template>
  <input type="text" v-model="inputStr" />
</template>
