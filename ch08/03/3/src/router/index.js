import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
  /* scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition; // 스크롤 위치가 같기 때문에 behavior 옵션 필요 없음
    else if (to.hash) return { el: to.hash, behavior: 'smooth' };
    else
      return new Promise((resolve, reject) => {
        // 500ms 기다린 후 스크롤
        setTimeout(() => {
          resolve({ left: 0, top: 0, behavior: 'smooth' });
        }, 500);
      });
  }, */
});

export default router;
