<script>
import Practice2Child from './Practice2Child.vue';
export default {
  components: {
    Practice2Child,
  },
  data() {
    return {
      childName: 'Alice',
    };
  },
  methods: {
    handleGreeting(message) {
      console.log(message);
    },
  },
};
</script>
<template>
  <div>
    <Practice2Child :name="childName" @greet="handleGreeting" />
  </div>
</template>
