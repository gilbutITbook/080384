import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.provide('globalMesasge', 'hello!'); // key: globalMesage, value: hello!
app.mount('#app');
