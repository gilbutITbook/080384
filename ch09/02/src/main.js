import { createApp } from 'vue';
import { createPinia } from 'pinia'; // createPinia 함수 불러오기
import App from './App.vue';
import router from './router';
const app = createApp(App);
const pinia = createPinia(); // pinia 인스턴스 생성
app.use(router);
app.use(pinia); // pinia 인스턴스 등록
app.mount('#app');
