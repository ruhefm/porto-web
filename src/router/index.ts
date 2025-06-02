import { createRouter, createWebHistory } from 'vue-router'
import Overview from '@/views/Overview.vue'
import Education from '@/views/Education.vue'


const routes = [
  { path: '/about', name: 'Overview', component: Overview },
  { path: '/about/education', name: 'Education', component: Education }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
