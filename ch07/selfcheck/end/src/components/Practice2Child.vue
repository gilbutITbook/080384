<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  name: String,
});

const emit = defineEmits(['greet']);

const sendGreeting = () => {
  emit('greet', `Hello, ${props.name}!`);
};
</script>

<template>
  <div>
    <button @click="sendGreeting">Send Greeting</button>
  </div>
</template>
