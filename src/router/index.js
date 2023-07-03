import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/SupportView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   scrollBehavior () {
//     return {
//       top: 0,
//       left: 0,
//       behavior: 'smooth'
//     }
//   },
//   routes
// })

export default router
