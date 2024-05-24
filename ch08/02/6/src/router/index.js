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
      path: '/user',
      component: () => import('../views/UserView.vue'),
      children: [
        {
          path: 'info',
          name: 'user-info',
          component: () => import('../views/UserInfo.vue'),
        },
        {
          path: 'profile',
          name: 'user-profile',
          component: () => import('../views/UserProfile.vue'),
        },
      ],
    },
  ],
});
export default router;
