<script>
export default {
  data() {
    return {
      primaryColor: 'red',
      primaryStyle: 'italic',
    };
  },
};
</script>
<template>
  <h1 :style="{ color: primaryColor, fontStyle: primaryStyle }">
    Inline Style
  </h1>
</template>
