import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import IntroduceView from '../views/IntroduceView.vue'
import LikeView from '../views/LikeView.vue'
import CareerView from '../views/CareerView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: IntroduceView
  },
  {
    path: '/like',
    name: 'like',
    component: LikeView
  },
  {
    path: '/career',
    name: 'career',
    component: CareerView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
