<script>
export default {
  data() {
    return {
      message: 'child',
      count: 10,
    };
  },
};
</script>
<template>
  <slot :message="message" :count="count"></slot>
</template>
