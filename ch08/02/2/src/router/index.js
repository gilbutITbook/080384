import { createRouter, createWebHistory } from 'vue-router';
import UserInfo from '../views/UserInfo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user/info',
      name: 'userInfo',
      component: UserInfo,
    },
    {
      path: '/user/:id',
      name: 'userView',
      // component: () => import('../views/UserView.vue'),
      // component: () => import('../views/UserViewOptionsApi.vue'),
      component: () => import('../views/UserViewCompositionApi.vue'),
    },
  ],
});

export default router;
