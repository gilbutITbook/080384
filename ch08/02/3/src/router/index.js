import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import UserGeneric from '../views/UserGeneric.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 아무 것이나 다 매치되며, 값은 `$route.params.pathMatch`에 할당됨
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // `/user-`로 시작하는 모든 것과 일치하고, 값은 `$route.params.afterUser`에 할당됨
    { path: '/user-:afterUser(.*)', component: UserGeneric },
  ],
});

export default router;
