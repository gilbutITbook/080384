<script>
export default {
  methods: {
    onKeyupHandler(e) {
      if (e.keyCode === 13) {
        // 키보드 이벤트 객체에서 keyCode 속성이 13은 엔터키(Enter Key)
        console.log('Enter!');
      }
    },
  },
};
</script>
<template>
  <input type="text" @keyup="($event) => onKeyupHandler($event)" />
</template>
