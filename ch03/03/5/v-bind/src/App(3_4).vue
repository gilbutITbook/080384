<script>
export default {
  data() {
    return {
      id: '#title',
      class: 'red-color',
    };
  },
};
</script>
<template>
  <!-- <h1 id="title" class="red-color">Hello, Vue JS</h1> -->
  <h1 :id="id" :class="class">Hello, Vue JS</h1>
  <h1 :id :class>Hello, Vue JS</h1>
</template>
