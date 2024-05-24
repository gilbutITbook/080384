<script setup>
import { ref } from 'vue';
import Practice2Child from './Practice2Child.vue';

const childName = ref('Alice');

const handleGreeting = (message) => {
  console.log(message);
};
</script>
<template>
  <div>
    <Practice2Child :name="childName" @greet="handleGreeting" />
  </div>
</template>
