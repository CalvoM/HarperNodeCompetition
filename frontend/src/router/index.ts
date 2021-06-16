import store from '@/store'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup/',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue'),
    meta: {guest:true}
  },
  {
    path: '/signin/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Login.vue'),
    meta: {guest: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.guest)){
    next()
  }
})

export default router
