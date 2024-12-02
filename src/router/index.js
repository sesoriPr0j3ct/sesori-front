import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/PostView.vue'),
  },
  {
    path: '/post/:postIdx',
    name: 'PostDetail',
    component: () => import('@/views/PostDetailView.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;