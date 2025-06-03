import { createRouter, createWebHistory } from 'vue-router'
import Overview from '@/views/Overview.vue'
import Education from '@/views/Education.vue'


const routes = [
  { path: '/about', name: 'Overview', component: Overview, meta: { title: 'About | Heru Purnama' } },
  { path: '/about/education', name: 'Education', component: Education, meta: { title: 'Education | Heru Purnama' } }
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
