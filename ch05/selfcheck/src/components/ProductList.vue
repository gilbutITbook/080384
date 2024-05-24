<script>
export default {
  props: {
    products: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['selectedProduct'],
};
</script>
<template>
  <h1>상품 목록</h1>
  <ul>
    <li v-for="product in products" :key="product.id">
      <a href="#" @click="$emit('selectedProduct', product.id)">
        <span>{{ product.name }} / {{ product.price }}</span>
      </a>
    </li>
  </ul>
</template>
