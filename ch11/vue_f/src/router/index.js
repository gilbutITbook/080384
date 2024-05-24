import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 홈
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // 예보
      path: '/forecast',
      name: 'forecast',
      component: () => import('../views/ForecastView.vue'),
    },
    {
      // 검색
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
    },
  ],
});
export default router;
