<script setup>
import { useCartStore } from '@/stores/cart.js';
import { computed } from 'vue';
const cartStore = useCartStore();
// cartItem에 포함되어 있지 않은 item의 값만 필터링
const cartItem = computed(() => {
  return cartStore.item.filter((v) => cartStore.cartItem.includes(v.id));
});
// cartIem 스테이트 값 비우기
const allClear = () => {
  cartStore.cartItem = [];
};
// 장바구니에 담긴 전체 금액을 합산해 alert()으로 보여 주기
const payCart = () => {
  //cartItem이 이미 computed()로 계산된 속성이니, 이 속성의 값을 참조하면 쉽게 구할 수 있음
  const price = cartItem.value.reduce((prev, cur) => {
    return prev + cur.price;
  }, 0);
  alert(`총 ${price.toLocaleString()}원을 결제하시겠습니까?`);
};
// 장바구니에서 상품 삭제 기능
// cartItem에서 id 삭제
const outCart = (id) => {
  cartStore.outCart(id);
};
</script>
<template>
  <h1>장바구니 목록</h1>
  <RouterLink to="/">메인</RouterLink>
  <ul v-if="cartItem.length > 0">
    <li v-for="item in cartItem">
      <span>{{ item.name }}</span>
      <span>{{ item.price }}</span>
      <button @click="outCart(item.id)">삭제</button>
    </li>
  </ul>
  <p v-else>장바구니가 비어있습니다.</p>
  <button @click="payCart">결제</button>
  <button @click="allClear">전체 비우기</button>
</template>
