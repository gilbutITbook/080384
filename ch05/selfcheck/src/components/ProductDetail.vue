<script>
export default {
  props: {
    selectProduct: {
      type: Object,
    },
  },
};
</script>
<template>
  <h2>상품 상세 정보</h2>
  <div>
    <p>상품명: {{ selectProduct.name }}</p>
    <p>가격: {{ selectProduct.price }}</p>
    <p>재고: {{ selectProduct.amount }}</p>
  </div>
</template>
