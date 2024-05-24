import { createRouter, createWebHistory } from 'vue-router';
import UserView from '../views/UserView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*  {
      path: '/user/mike',
      name: 'userMike',
      component: UserView,
    },
    {
      path: '/user/john',
      name: 'userJohn',
      component: UserView,
    }, */
    {
      path: '/user/:id/profile',
      name: 'user',
      component: UserInfo,
    },
    {
      path: '/user/info',
      name: 'user',
      component: UserInfo,
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
    },
  ],
});

export default router;
