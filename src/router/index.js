import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: () =>import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/project/:id',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/teste',
      name: 'teste',
      component: () => import('../views/TestView.vue')
    }
  ]
})

export default router
