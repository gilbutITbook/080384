<script>
export default {
  beforeCreate() {
    // script에서는 this 키워드로 $route 속성을 참조하면 됩니다.
    const id = this.$route.params.id;
    console.log(id);
  },
};
</script>
<template>
  <!-- template에서는 this 키워드 생략 가능합니다. -->
  <h1>id: {{ $route.params.id }}</h1>
</template>
