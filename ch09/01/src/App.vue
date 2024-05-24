<script setup>
import { ref } from "vue";
import ChildComp from "@/components/ChildComp.vue";

const num = ref(0);
const update = () => {
  num.value++;
};
</script>
<template>
  <ChildComp :num="num" @update="update" />
</template>
