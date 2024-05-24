<script setup>
import { ref, watch, watchEffect, watchPostEffect } from 'vue';
const message = ref('');
const messageParagraph = ref(null);
watch(message, () => {
  if (message.value) {
    console.log(`watch:${messageParagraph.value.innerText} `);
  }
});
watchEffect(() => {
  if (message.value) {
    console.log(`watchEffect:${messageParagraph.value.innerText} `);
  }
});
watchPostEffect(() => {
  if (message.value) {
    console.log(`watchPostEffect:${messageParagraph.value.innerText} `);
  }
});
</script>
<template>
  <div>
    <input v-model="message" placeholder="메시지를 입력하세요." />
    <p ref="messageParagraph">{{ message }}</p>
  </div>
</template>
