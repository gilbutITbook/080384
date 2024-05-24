<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<style scoped>
.btn {
  width: 80px;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
