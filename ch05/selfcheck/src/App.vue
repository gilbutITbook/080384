<script>
import ProductList from '@/components/ProductList.vue';
import ProductDetail from '@/components/ProductDetail.vue';
export default {
  components: {
    ProductList,
    ProductDetail,
  },
  data() {
    return {
      products: [
        {
          id: 1, // 고유값
          name: '바나나', // 상품명
          price: 1000, // 가격
          amount: 10, // 재고
        },
        {
          id: 2,
          name: '오렌지',
          price: 2000,
          amount: 5,
        },
        {
          id: 3,
          name: '딸기',
          price: 5000,
          amount: 12,
        },
        {
          id: 4,
          name: '블루베리',
          price: 3000,
          amount: 1,
        },
      ],
      selectedProductId: null,
    };
  },
  computed: {
    selectProduct() {
      return (
        this.selectedProductId &&
        this.products.find((v) => v.id === this.selectedProductId)
      );
    },
  },
};
</script>
<template>
  <ProductList
    :products="products"
    @selectedProduct="(id) => (selectedProductId = Number(id))"
  />
  <ProductDetail v-if="selectedProductId" :selectProduct="selectProduct" />
</template>
