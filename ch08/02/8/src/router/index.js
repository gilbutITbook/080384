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
      path: '/user/:id',
      name: 'user',
      components: {
        header: () => import('../views/TheHeader.vue'),
        default: () => import('../views/UserView.vue'),
        footer: () => import('../views/TheFooter.vue'),
      },
      props: { header: true, default: false, footer: false },
    },
  ],
});
export default router;
