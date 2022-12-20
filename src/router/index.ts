import { createRouter, createWebHistory } from 'vue-router'
import CssKeyword from '../views/CssKeyword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/css-keyword',
    },
    {
      path: '/css-keyword',
      name: 'home',
      component: CssKeyword
    },
  ]
})

export default router
