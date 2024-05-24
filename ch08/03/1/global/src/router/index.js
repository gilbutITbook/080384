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
});
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);

  // next();

  setTimeout(() => {
    next();
  }, 10000); // 10초 걸리는 걸 재현
});

router.beforeResolve((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
});

router.afterEach((to, from, failure) => {
  console.log(to);
  console.log(from);
  console.log(failure);
});

export default router;
