import { createRouter, createWebHistory } from 'vue-router'
import Overview from '@/views/Overview.vue'
import Education from '@/views/Education.vue'
import Experiences from '@/views/Experiences.vue'
import Landing from '@/views/Landing.vue'
import NotFound from '@/views/404.vue'
import Projects from '@/views/Projects.vue'
import projectDetail from '@/views/projectDetail.vue'
import Notes from '@/views/Notes.vue'
import noteDetail from '@/views/noteDetail.vue'

const routes = [
  { path: '/', name: 'LandingPage', component: Landing, meta: { title: 'Welcome | Heru Purnama' } },
  { path: '/about', name: 'Overview', component: Overview, meta: { title: 'About | Heru Purnama' } },
  { path: '/about/education', name: 'Education', component: Education, meta: { title: 'Education | Heru Purnama' } },
  { path: '/about/experiences', name: 'Experiences', component: Experiences, meta: { title: 'Experiences | Heru Purnama' } },
  { path: '/projects', name: 'Projects', component: Projects, meta: { title: 'Projects | Heru Purnama' } },
  { path: '/projects/:slug', name: 'projectDetail', component: projectDetail, meta: { title: 'Projects | Heru Purnama' } },
  { path: '/notes', name: 'Notes', component: Notes, meta: { title: 'Notes | Heru Purnama' } },
  { path: '/notes/:slug', name: 'noteDetail', component: noteDetail, meta: { title: 'Notes | Heru Purnama' } },
  { path: '/shortcut/smart-home', redirect: '/projects/3-Smart-Home' },
  { path: '/shortcut/relate-project', redirect: '/projects/1-Relate-Project' },
  { path: '/shortcut/kkn', redirect: '/projects/4-KKN-Project' },
  { path: '/shortcut/security-analysis', redirect: '/projects/5-Security-Method-Analysis' },
  { path: '/shortcut/cv', redirect: '/CV_Heru%20Purnama_Network_Public.pdf' },
  




  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },


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
