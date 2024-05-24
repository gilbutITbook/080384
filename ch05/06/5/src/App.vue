<script>
import DynamicLayout from '@/components/DynamicLayout.vue';
export default {
  components: {
    DynamicLayout,
  },
  data() {
    return {
      dynamicName: 'header',
    };
  },
};
</script>
<template>
  <DynamicLayout>
    <template #[dynamicName]>
      <h2>동적 슬롯</h2>
    </template>
  </DynamicLayout>
</template>
