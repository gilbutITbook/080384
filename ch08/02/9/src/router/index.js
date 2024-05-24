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
      name: 'user',
      component: () => import('../views/UserView.vue'),
      redirect: '/', // 또는 { name: 'home' }
    },
    {
      path: '/user/:id',
      name: 'user-id',
      redirect: (to) => {
        return { name: 'person-id', params: { id: to.params.id } };
      },
    },
    {
      path: '/person/:id',
      name: 'person-id',
      component: () => import('../views/UserDetail.vue'),
      props: true,
    },
  ],
});
export default router;
