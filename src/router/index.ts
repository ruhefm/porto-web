import { createRouter, createWebHistory } from 'vue-router'
import Overview from '@/views/Overview.vue'

const routes = [
  { path: '/', name: 'Overview', component: Overview }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
