import { createRouter, createWebHistory } from 'vue-router'
import BreatheView from '../views/BreatheView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'breathe',
      component: BreatheView
    }
  ]
})

export default router
