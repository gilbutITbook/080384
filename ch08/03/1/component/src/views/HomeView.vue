<script>
export default {
  beforeRouteEnter(to, from, next) {
    // 라우트 진입 전 로직
    next((vm) => {
    // vm을 통해 컴포넌트 인스턴스 참조 가능
    }); 
  },
  beforeRouteUpdate(to, from) {
    // 동적 경로의 매개변수 변경 시 실행 로직
  },
  beforeRouteLeave(to, from) {
    // 라우트를 벗어나기 전 실행 로직
    return true; // return false 시 전환 불허
  },
}
</script>

<template>
  <h1>Home View</h1>
</template>
