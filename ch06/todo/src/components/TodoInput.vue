<script>
export default {
  data() {
    return {
      inputMsg: "", // 데이터 정의
    };
  },
  emits: ["addTodo"],
  methods: {
    addTodo() {
      this.$emit("addTodo", this.inputMsg); // 부모 컴포넌트 이벤트 호출
      this.inputMsg = ""; // 입력 데이터 초기화
    },
  },
};
</script>
<template>
  <div class="todo__input">
    <input
      v-model="inputMsg"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요."
    />
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>
