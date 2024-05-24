<template>
  <slot name="header"></slot>
  <slot></slot>
  <!-- 내부적으로 <slot name="default">로 처리됨 -->
  <slot name="footer"></slot>
</template>
