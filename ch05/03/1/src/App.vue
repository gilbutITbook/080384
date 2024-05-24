<script>
import FirstChild from "@/components/FirstChild.vue";
export default {
  components: {
    FirstChild,
  },
  data() {
    return {
      visible: true,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    setTimeout(() => {
      this.visible = false;
    }, 3000);
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
<template>
  <FirstChild v-if="visible" />
</template>
