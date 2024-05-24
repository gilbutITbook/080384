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
  <slot name="header" :message="message"></slot>
  <slot name="main" :count="count"></slot>
  <slot name="footer"></slot>
</template>
