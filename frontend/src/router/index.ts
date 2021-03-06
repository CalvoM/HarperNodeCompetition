import store from '@/store'
import { createRouter, createWebHistory, isNavigationFailure, NavigationFailure, NavigationFailureType, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {needsAuth: true}
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
    meta: {guest:true}
  },
  {
    path: '/signin',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {guest: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.needsAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/signin");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});


export default router
