import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView,
      // alias: '/home',
      alias: ['home', 'root'],
    },
    {
      path: '/user/:id',
      name: 'user-id',
      component: () => import('../views/UserDetail.vue'),
      alias: ['/:id', '/u/:id'],
      props: true,
    },
  ],
});
export default router;
