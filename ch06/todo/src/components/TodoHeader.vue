<script>
export default {
  props: {
    current: {
      type: String,
      default() {
        return "all";
      },
    },
  },
  emits: ["update-tab"],
  methods: {
    updateTab(tab) {
      this.$emit("update-tab", tab);
    },
  },
};
</script>

<template>
  <div class="todo__title">
    <h1 class="todo__text">Todo List</h1>
    <ul class="todo__tab">
      <li
        :class="{ 'todo__tab--active': current === 'all' }"
        @click="updateTab('all')"
      >
        전체
      </li>
      <li
        :class="{ 'todo__tab--active': current === 'completed' }"
        @click="updateTab('completed')"
      >
        완료
      </li>
    </ul>
  </div>
</template>
