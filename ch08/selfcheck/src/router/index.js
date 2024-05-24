import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/books',
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../views/BookView.vue'),
      alias: ['/bk'],
    },
    {
      path: '/book/:id',
      name: 'book-detail',
      component: () => import('../views/BookDetailView.vue'),
      alias: ['/:id'],
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (
    to.name === 'book-detail' &&
    !Number.isInteger(Number.parseInt(to.params.id))
  )
    next('/books');
  else next();
});
export default router;
