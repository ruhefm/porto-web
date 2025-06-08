import { createRouter, createWebHistory } from 'vue-router'
import Overview from '@/views/Overview.vue'
import Education from '@/views/Education.vue'
import Experiences from '@/views/Experiences.vue'
import Landing from '@/views/Landing.vue'
import NotFound from '@/views/404.vue'


const routes = [
  { path: '/', name: 'LandingPage', component: Landing, meta: { title: 'Welcome | Heru Purnama' } },
  { path: '/about', name: 'Overview', component: Overview, meta: { title: 'About | Heru Purnama' } },
  { path: '/about/education', name: 'Education', component: Education, meta: { title: 'Education | Heru Purnama' } },
  { path: '/about/experiences', name: 'Experiences', component: Experiences, meta: { title: 'Experiences | Heru Purnama' } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  const defaultTitle = 'Heru Purnama | Network & System Engineer | Software Engineer';
  const title = to.meta.title;
  document.title = typeof title === 'string' ? title : defaultTitle;
  next();
});

export default router
