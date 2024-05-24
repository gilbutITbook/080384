<script>
import BasicMix from '@/components/BasicMix.vue';
export default {
  components: {
    BasicMix,
  },
};
</script>
<template>
  <BasicMix>
    <template #header="headerProps">
      <!-- 구조 분해 아님 -->
      <h1>{{ headerProps.message }}</h1>
    </template>
    <template #main="{ count }">
      <!-- 구조 분해 -->
      <h1>{{ count }}</h1>
    </template>
  </BasicMix>
</template>
