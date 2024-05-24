<script>
export default {
  data() {
    return {
      uid: '',
      upw: '',
    };
  },
  methods: {
    login() {
      console.log(`id: ${this.uid}`);
      console.log(`pw: ${this.upw}`);
    },
  },
};
</script>
<template>
  <form id="loginForm">
    <label for="uid"
      >아이디: <input type="text" id="uid" v-model="uid"
    /></label>
    <label for="upw"
      >비밀번호: <input type="password" id="upw" v-model="upw"
    /></label>
    <button type="button" @click="login">로그인</button>
  </form>
</template>
