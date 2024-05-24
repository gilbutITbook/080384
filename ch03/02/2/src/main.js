import { createApp, h } from 'vue';

createApp({
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },
  methods: {
    reverse() {
      this.message = this.message.split('').reverse().join('');
    },
  },
  render() {
    // data, methods에 정의한 속성 사용
    return h('div', [
      h('p', this.message),
      h('button', { onClick: this.reverse }, 'Reverse'),
    ]);
  },
}).mount('#app');
