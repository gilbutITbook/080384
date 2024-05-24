<script>
export default {
  data() {
    return {
      visible: true,
      unvisible: false,
    };
  },
};
</script>
<template>
  <p v-if="visible">이 요소는 렌더링됩니다.</p>
  <p v-if="unvisible">이 요소는 렌더링되지 않습니다.</p>
</template>
